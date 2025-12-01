// DOM Elements
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const titleEl = document.getElementById("title");
const descriptionEl = document.querySelector(".subtitle");
const scoreEl = document.getElementById("score");
const totalEl = document.getElementById("total");
const timerEl = document.getElementById("timer");
const levelEl = document.getElementById("level");
const statusEl = document.getElementById("status");
const collectibleIconEl = document.getElementById("collectible-icon");

// Game State
const gameState = {
  currentLevel: 1,
  map: [],
  collectiblesTotal: 0,
  collectiblesCollected: 0,
  shiftTime: 60,
  lastTime: performance.now(),
  moveAccumulator: 0,
  levelTransitionDelay: 0,
  levelScores: {}, // Track scores for each level {levelNumber: {timeElapsed, completed}}
  gameOver: false,
  levelStartTime: performance.now(), // Track when level started
  ghostWarningTimer: 0
};

const player = {
  row: 7,
  col: 9,
  currentDir: DIR.NONE,
  nextDir: DIR.NONE,
};

// Utility Functions
function cloneMap(base) {
  return base.map(row => row.slice());
}

function countCollectibles() {
  let count = 0;
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      if (gameState.map[r][c] === TILE_TYPE.COLLECTIBLE) count++;
    }
  }
  return count;
}

function tileIsWalkable(r, c) {
  if (r < 0 || c < 0 || r >= ROWS || c >= COLS) return false;
  return gameState.map[r][c] !== TILE_TYPE.WALL;
}

// Seeded random number generator for consistent randomization per level
function seededRandom(seed) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

// Randomize collectible positions in the maze (seeded by level for consistency)
function randomizeCollectibles() {
  // Collect all walkable positions (not walls)
  const walkableTiles = [];
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      if (gameState.map[r][c] !== TILE_TYPE.WALL) {
        walkableTiles.push({ r, c });
      }
    }
  }

  // Clear all collectibles first
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      if (gameState.map[r][c] === TILE_TYPE.COLLECTIBLE) {
        gameState.map[r][c] = TILE_TYPE.PATH;
      }
    }
  }

  // Count how many collectibles we should have (preserve original count)
  const originalLayout = getMazeLayout(gameState.currentLevel);
  let collectibleCount = 0;
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      if (originalLayout[r][c] === TILE_TYPE.COLLECTIBLE) collectibleCount++;
    }
  }

  // Shuffle using level-based seed for consistency
  const shuffled = walkableTiles.sort((a, b) => {
    const seedA = seededRandom(gameState.currentLevel * 1000 + a.r * 100 + a.c);
    const seedB = seededRandom(gameState.currentLevel * 1000 + b.r * 100 + b.c);
    return seedA - seedB;
  });
  
  // Place collectibles on shuffled walkable tiles
  for (let i = 0; i < collectibleCount && i < shuffled.length; i++) {
    const tile = shuffled[i];
    gameState.map[tile.r][tile.c] = TILE_TYPE.COLLECTIBLE;
  }
}

// Randomize player starting position (seeded by level for consistency)
function randomizePlayerPosition() {
  // Collect all walkable positions (not walls)
  const walkableTiles = [];
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      if (gameState.map[r][c] !== TILE_TYPE.WALL) {
        walkableTiles.push({ r, c });
      }
    }
  }

  // Pick a starting position using level-based seed
  if (walkableTiles.length > 0) {
    const seed = seededRandom(gameState.currentLevel * 5000);
    const index = Math.floor(seed * walkableTiles.length);
    const startPos = walkableTiles[index];
    player.row = startPos.r;
    player.col = startPos.c;
  } else {
    // Fallback to center if somehow no walkable tiles
    player.row = Math.floor(ROWS / 2);
    player.col = Math.floor(COLS / 2);
  }
}

function handleGhostCatch() {
  sound.playDeath();
  gameState.shiftTime = Math.max(0, gameState.shiftTime - 5);
  statusEl.textContent = "👻 Gepakt! -5s";
  randomizePlayerPosition();
  resetGhostPositions();
  updateHUD();
}

// Level Management
function initLevel() {
  const config = getCurrentLevelConfig();
  const mazeLayout = getMazeLayout(gameState.currentLevel);
  gameState.map = cloneMap(mazeLayout);
  
  // Randomize positions
  randomizeCollectibles();
  randomizePlayerPosition();
  initGhosts();
  
  gameState.collectiblesTotal = countCollectibles();
  gameState.collectiblesCollected = 0;
  gameState.shiftTime = LEVEL_DURATION;
  gameState.moveAccumulator = 0;
  gameState.levelStartTime = performance.now(); // Reset level start time
  gameState.ghostWarningTimer = 0;
  
  player.currentDir = DIR.NONE;
  player.nextDir = DIR.NONE;
  
  titleEl.textContent = config.characterName;
  descriptionEl.style.display = 'none';
  collectibleIconEl.textContent = config.collectibleIcon;
  
  updateHUD();
  statusEl.textContent = "";
}

function updateHUD() {
  scoreEl.textContent = gameState.collectiblesCollected;
  totalEl.textContent = gameState.collectiblesTotal;
  timerEl.textContent = Math.max(0, Math.floor(gameState.shiftTime));
  levelEl.textContent = gameState.currentLevel;
  
  // Update timer warning states
  const timerCard = document.querySelector('.timer-card');
  const timePercentage = (gameState.shiftTime / LEVEL_DURATION) * 100;
  
  if (timePercentage <= 10) {
    // Critical: 10% or less - flashing red
    timerCard.classList.remove('timer-warning');
    timerCard.classList.add('timer-critical');
  } else if (timePercentage <= 20) {
    // Warning: 20% or less - red
    timerCard.classList.remove('timer-critical');
    timerCard.classList.add('timer-warning');
  } else {
    // Normal: more than 20% - yellow
    timerCard.classList.remove('timer-warning', 'timer-critical');
  }
}

function nextLevel() {
  gameState.currentLevel++;
  gameState.levelTransitionDelay = 0;
  initLevel();
}

function saveLevelScore() {
  const timeElapsed = Math.round((performance.now() - gameState.levelStartTime) / 1000);
  gameState.levelScores[gameState.currentLevel] = {
    timeElapsed: timeElapsed,
    completed: gameState.collectiblesCollected === gameState.collectiblesTotal
  };
}

function showScoresScreen() {
  gameState.gameOver = true;
  const modal = document.getElementById('scoresModal');
  const scoresTable = document.getElementById('scoresTable');
  const scoresMessage = document.getElementById('scoresMessage');
  const scoreTotal = document.getElementById('scoreTotal');
  
  // Hide table and total, show congratulations message
  scoresTable.style.display = 'none';
  scoreTotal.style.display = 'none';
  scoresMessage.style.display = 'block';
  
  modal.classList.add('active');
}

function resetGame() {
  gameState.currentLevel = 1;
  gameState.levelScores = {};
  gameState.gameOver = false;
  document.getElementById('scoresModal').classList.remove('active');
  initLevel();
}
