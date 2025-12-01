// Ghost management and rendering
const ghosts = [];

function initGhosts() {
  ghosts.length = 0;
  const walkable = getWalkableTiles();
  const ghostCount = Math.min(4, Math.max(2, Math.floor(gameState.currentLevel / 3) + 1));

  for (let i = 0; i < ghostCount; i++) {
    const spawn = walkable[(gameState.currentLevel * 37 + i * 13) % walkable.length];
    ghosts.push({
      row: spawn.r,
      col: spawn.c,
      color: ['#ff6b6b', '#ffd93d', '#4cc9f0', '#b892ff'][i % 4],
      direction: DIR.NONE,
      accumulator: 0,
      speedMultiplier: 0.9 + (i * 0.05)
    });
  }
}

function getWalkableTiles() {
  const tiles = [];
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      if (tileIsWalkable(r, c)) {
        tiles.push({ r, c });
      }
    }
  }
  return tiles;
}

function drawGhosts() {
  ghosts.forEach((ghost) => {
    drawGhostSprite(ghost);
  });
}

function updateGhosts(delta) {
  ghosts.forEach((ghost) => {
    const interval = Math.max(0.1, (GHOST_MOVE_INTERVAL * ghost.speedMultiplier));
    ghost.accumulator += delta;

    if (ghost.accumulator >= interval) {
      ghost.accumulator -= interval;
      moveGhostTowardsPlayer(ghost);
    }
  });
  warnIfClose(delta);
  checkGhostCollision();
}

function moveGhostTowardsPlayer(ghost) {
  const nextStep = findNextStepTowardsPlayer(ghost.row, ghost.col, player.row, player.col);
  if (nextStep) {
    ghost.row = nextStep.r;
    ghost.col = nextStep.c;
  }
}

function findNextStepTowardsPlayer(startR, startC, targetR, targetC) {
  const queue = [{ r: startR, c: startC, prev: null }];
  const visited = Array.from({ length: ROWS }, () => Array(COLS).fill(false));
  visited[startR][startC] = true;

  const dirs = [DIR.UP, DIR.DOWN, DIR.LEFT, DIR.RIGHT];

  while (queue.length) {
    const current = queue.shift();

    if (current.r === targetR && current.c === targetC) {
      let step = current;
      while (step.prev && step.prev.prev) {
        step = step.prev;
      }
      return step;
    }

    for (const dir of dirs) {
      const nr = current.r + dir.r;
      const nc = current.c + dir.c;
      if (tileIsWalkable(nr, nc) && !visited[nr][nc]) {
        visited[nr][nc] = true;
        queue.push({ r: nr, c: nc, prev: current });
      }
    }
  }
  return null;
}

function checkGhostCollision() {
  ghosts.forEach((ghost) => {
    if (ghost.row === player.row && ghost.col === player.col) {
      handleGhostCatch();
    }
  });
}

function warnIfClose(delta) {
  gameState.ghostWarningTimer -= delta;
  const danger = ghosts.some((ghost) => Math.abs(ghost.row - player.row) + Math.abs(ghost.col - player.col) <= 1);
  if (danger && gameState.ghostWarningTimer <= 0) {
    sound.playGhostWarning();
    gameState.ghostWarningTimer = 0.4;
  }
}

function resetGhostPositions() {
  const walkable = getWalkableTiles();
  ghosts.forEach((ghost, index) => {
    const spawn = walkable[(gameState.currentLevel * 91 + index * 7) % walkable.length];
    ghost.row = spawn.r;
    ghost.col = spawn.c;
    ghost.accumulator = 0;
  });
}
