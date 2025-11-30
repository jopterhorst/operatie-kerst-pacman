// Movement Logic
function updateMovement(delta) {
  gameState.moveAccumulator += delta;
  while (gameState.moveAccumulator >= MOVE_INTERVAL) {
    gameState.moveAccumulator -= MOVE_INTERVAL;

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
    } else {
      player.currentDir = DIR.NONE;
      break;
    }
  }
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
