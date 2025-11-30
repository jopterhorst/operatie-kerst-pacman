// Rendering
function drawMap() {
  // First pass: draw semi-transparent background tiles
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      const x = c * TILE_SIZE;
      const y = r * TILE_SIZE;

      if (gameState.map[r][c] !== TILE_TYPE.WALL) {
        ctx.fillStyle = "rgba(250, 247, 239, 0.5)";
        ctx.fillRect(x, y, TILE_SIZE, TILE_SIZE);
      }

      if (gameState.map[r][c] === TILE_TYPE.COLLECTIBLE) {
        const config = getCurrentLevelConfig();
        config.collectibleSprite(x, y);
      }
    }
  }

  // Second pass: draw walls as continuous lines
  ctx.strokeStyle = "#566F48";
  ctx.lineWidth = 3;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";

  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      if (gameState.map[r][c] === TILE_TYPE.WALL) {
        const x = c * TILE_SIZE + TILE_SIZE / 2;
        const y = r * TILE_SIZE + TILE_SIZE / 2;

        // Check neighbors to draw continuous lines
        const up = r > 0 && gameState.map[r - 1][c] === TILE_TYPE.WALL;
        const down = r < ROWS - 1 && gameState.map[r + 1][c] === TILE_TYPE.WALL;
        const left = c > 0 && gameState.map[r][c - 1] === TILE_TYPE.WALL;
        const right = c < COLS - 1 && gameState.map[r][c + 1] === TILE_TYPE.WALL;

        // Draw lines to connected wall tiles
        if (up) {
          ctx.beginPath();
          ctx.moveTo(x, y - TILE_SIZE / 2);
          ctx.lineTo(x, y);
          ctx.stroke();
        }
        if (down) {
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(x, y + TILE_SIZE / 2);
          ctx.stroke();
        }
        if (left) {
          ctx.beginPath();
          ctx.moveTo(x - TILE_SIZE / 2, y);
          ctx.lineTo(x, y);
          ctx.stroke();
        }
        if (right) {
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(x + TILE_SIZE / 2, y);
          ctx.stroke();
        }
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
