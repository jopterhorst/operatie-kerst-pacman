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

// Level Management
function initLevel() {
  const config = getCurrentLevelConfig();
  const mazeLayout = getMazeLayout(gameState.currentLevel);
  gameState.map = cloneMap(mazeLayout);
  
  // Randomize positions
  randomizeCollectibles();
  randomizePlayerPosition();
  
  gameState.collectiblesTotal = countCollectibles();
  gameState.collectiblesCollected = 0;
  gameState.shiftTime = config.startTime;
  gameState.moveAccumulator = 0;
  gameState.levelStartTime = performance.now(); // Reset level start time
  
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
  const scoresBody = document.getElementById('scoresBody');
  
  scoresBody.innerHTML = '';
  let totalTime = 0;
  let completedLevels = 0;
  
  // Build table rows for each level
  for (let i = 1; i <= 11; i++) {
    const score = gameState.levelScores[i];
    if (score) {
      totalTime += score.timeElapsed;
      if (score.completed) completedLevels++;
      
      const levelConfig = LEVEL_CONFIG[i];
      const characterName = levelConfig ? levelConfig.characterName : `Personage ${i}`;
      
      const row = document.createElement('div');
      row.className = `score-row ${score.completed ? 'completed' : 'failed'}`;
      row.innerHTML = `
        <div class="score-level">${characterName}</div>
        <div class="score-count">${score.timeElapsed}s</div>
        <div class="score-status ${score.completed ? 'status-completed' : 'status-failed'}">
          ${score.completed ? '✓ Voltooid' : '✗ Mislukt'}
        </div>
      `;
      scoresBody.appendChild(row);
    }
  }
  
  document.getElementById('totalScore').textContent = `${totalTime}s - ${completedLevels}/11 voltooid`;
  modal.classList.add('active');
}

function resetGame() {
  gameState.currentLevel = 1;
  gameState.levelScores = {};
  gameState.gameOver = false;
  document.getElementById('scoresModal').classList.remove('active');
  initLevel();
}
