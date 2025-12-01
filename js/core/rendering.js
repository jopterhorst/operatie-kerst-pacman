// Rendering
function drawMap() {
  ctx.save();
  ctx.fillStyle = "#0d0f1a";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // First pass: draw paths and collectibles
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      const x = c * TILE_SIZE;
      const y = r * TILE_SIZE;

      if (gameState.map[r][c] !== TILE_TYPE.WALL) {
        ctx.fillStyle = "rgba(255, 255, 255, 0.03)";
        ctx.fillRect(x, y, TILE_SIZE, TILE_SIZE);
      }

      if (gameState.map[r][c] === TILE_TYPE.COLLECTIBLE) {
        const config = getCurrentLevelConfig();
        ctx.save();
        ctx.shadowColor = '#ffd93d';
        ctx.shadowBlur = 12;
        config.collectibleSprite(x, y);
        ctx.restore();
      }
    }
  }

  // Second pass: draw glowing walls
  ctx.strokeStyle = "#28c9a5";
  ctx.lineWidth = 4;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.shadowColor = '#28c9a5';
  ctx.shadowBlur = 10;

  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      if (gameState.map[r][c] === TILE_TYPE.WALL) {
        const x = c * TILE_SIZE + TILE_SIZE / 2;
        const y = r * TILE_SIZE + TILE_SIZE / 2;

        const up = r > 0 && gameState.map[r - 1][c] === TILE_TYPE.WALL;
        const down = r < ROWS - 1 && gameState.map[r + 1][c] === TILE_TYPE.WALL;
        const left = c > 0 && gameState.map[r][c - 1] === TILE_TYPE.WALL;
        const right = c < COLS - 1 && gameState.map[r][c + 1] === TILE_TYPE.WALL;

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
  ctx.restore();
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
