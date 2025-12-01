// Movement Logic
function updateMovement(delta) {
  const moveInterval = getMoveIntervalForLevel(gameState.currentLevel);
  gameState.moveAccumulator += delta;
  while (gameState.moveAccumulator >= moveInterval) {
    gameState.moveAccumulator -= moveInterval;

    // Try to turn in desired direction if possible
    if (player.nextDir !== player.currentDir) {
      const tryRow = player.row + player.nextDir.r;
      const tryCol = player.col + player.nextDir.c;
      if (tileIsWalkable(tryRow, tryCol)) {
        player.currentDir = player.nextDir;
      }
    }

    // Move in current direction if possible
    const newRow = player.row + player.currentDir.r;
    const newCol = player.col + player.currentDir.c;

    if (tileIsWalkable(newRow, newCol)) {
      player.row = newRow;
      player.col = newCol;
      handleTileCollision(player.row, player.col);
      checkGhostCollision();
    } else {
      player.currentDir = DIR.NONE;
      break;
    }
  }
}

function maybeTurnGhost(ghost) {
  const possibleDirs = [DIR.UP, DIR.DOWN, DIR.LEFT, DIR.RIGHT].filter((dir) => {
    const newRow = ghost.row + dir.r;
    const newCol = ghost.col + dir.c;
    return tileIsWalkable(newRow, newCol);
  });

  if (!possibleDirs.length) return ghost.dir;

  const keepDirection = tileIsWalkable(ghost.row + ghost.dir.r, ghost.col + ghost.dir.c);
  const shouldTurn = Math.random() < GHOST_TURN_CHANCE || !keepDirection;

  if (shouldTurn) {
    return possibleDirs[Math.floor(Math.random() * possibleDirs.length)];
  }

  return ghost.dir;
}

function updateGhosts(delta) {
  gameState.ghosts.forEach((ghost) => {
    ghost.moveAccumulator += delta;
    while (ghost.moveAccumulator >= GHOST_MOVE_INTERVAL) {
      ghost.moveAccumulator -= GHOST_MOVE_INTERVAL;
      ghost.dir = maybeTurnGhost(ghost);

      const newRow = ghost.row + ghost.dir.r;
      const newCol = ghost.col + ghost.dir.c;

      if (tileIsWalkable(newRow, newCol)) {
        ghost.row = newRow;
        ghost.col = newCol;
      } else {
        ghost.dir = DIR.NONE;
      }

      checkGhostCollision();
    }
  });
}

function checkGhostCollision() {
  const collided = gameState.ghosts.some((ghost) => ghost.row === player.row && ghost.col === player.col);
  if (!collided) return;

  statusEl.textContent = "👻 Terug naar start!";
  player.row = gameState.playerStart.row;
  player.col = gameState.playerStart.col;
  player.currentDir = DIR.NONE;
  player.nextDir = DIR.NONE;
  gameState.shiftTime = Math.max(0, gameState.shiftTime - 2);
}

function handleTileCollision(r, c) {
  if (gameState.map[r][c] === TILE_TYPE.COLLECTIBLE) {
    gameState.map[r][c] = TILE_TYPE.PATH;
    gameState.collectiblesCollected++;
    updateHUD();
    if (gameState.collectiblesCollected === gameState.collectiblesTotal) {
      statusEl.textContent = "✅ Allemaal verzameld!";
      gameState.levelTransitionDelay = 2; // 2 second delay before next level
    }
  }
}
