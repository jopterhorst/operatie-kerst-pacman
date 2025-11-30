// Rendering
function drawMap() {
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      const x = c * TILE_SIZE;
      const y = r * TILE_SIZE;

      if (gameState.map[r][c] === TILE_TYPE.WALL) {
        ctx.fillStyle = "#566F48";
        ctx.fillRect(x, y, TILE_SIZE, TILE_SIZE);
        ctx.strokeStyle = "#C1341D";
        ctx.lineWidth = 2;
        ctx.strokeRect(x + 2, y + 2, TILE_SIZE - 4, TILE_SIZE - 4);
      } else {
        ctx.fillStyle = "#FAF7EF";
        ctx.fillRect(x, y, TILE_SIZE, TILE_SIZE);
      }

      if (gameState.map[r][c] === TILE_TYPE.COLLECTIBLE) {
        const config = getCurrentLevelConfig();
        config.collectibleSprite(x, y);
      }
    }
  }
}

function drawPlayer() {
  drawPlayerSprite();
}

function drawHUDOverlay() {
  if (gameState.shiftTime <= 0 && gameState.collectiblesCollected < gameState.collectiblesTotal) {
    statusEl.textContent = "⌛ Tijd voorbij!";
  }
  if (gameState.collectiblesCollected === gameState.collectiblesTotal) {
    statusEl.textContent = "✅ Allemaal verzameld!";
  }
}
