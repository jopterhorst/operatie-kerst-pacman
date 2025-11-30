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

// Level Management
function initLevel() {
  const config = getCurrentLevelConfig();
  gameState.map = cloneMap(config.map);
  gameState.collectiblesTotal = countCollectibles();
  gameState.collectiblesCollected = 0;
  gameState.shiftTime = config.startTime;
  gameState.moveAccumulator = 0;
  gameState.levelStartTime = performance.now(); // Reset level start time
  
  player.row = 7;
  player.col = 9;
  player.currentDir = DIR.NONE;
  player.nextDir = DIR.NONE;
  
  titleEl.textContent = config.title;
  descriptionEl.textContent = config.description;
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
      
      const row = document.createElement('div');
      row.className = `score-row ${score.completed ? 'completed' : 'failed'}`;
      row.innerHTML = `
        <div class="score-level">Verdieping ${i}</div>
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
