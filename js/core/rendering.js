// Rendering
function drawMap() {
  ctx.fillStyle = "#040a1a";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      const x = c * TILE_SIZE;
      const y = r * TILE_SIZE;
      const tile = gameState.map[r][c];

      if (tile !== TILE_TYPE.WALL) {
        drawRoundedRect(x + 2, y + 2, TILE_SIZE - 4, TILE_SIZE - 4, 8, "rgba(11, 20, 46, 0.9)");
        ctx.fillStyle = "rgba(0, 255, 255, 0.05)";
        ctx.fillRect(x + TILE_SIZE / 2 - 1, y + TILE_SIZE / 2 - 1, 2, 2);
      }

      if (tile === TILE_TYPE.COLLECTIBLE) {
        const config = getCurrentLevelConfig();
        config.collectibleSprite(x, y);
      }
    }
  }

  ctx.strokeStyle = "#00c7ff";
  ctx.lineWidth = 4;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";

  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      if (gameState.map[r][c] === TILE_TYPE.WALL) {
        const x = c * TILE_SIZE + TILE_SIZE / 2;
        const y = r * TILE_SIZE + TILE_SIZE / 2;

        const up = r > 0 && gameState.map[r - 1][c] === TILE_TYPE.WALL;
        const down = r < ROWS - 1 && gameState.map[r + 1][c] === TILE_TYPE.WALL;
        const left = c > 0 && gameState.map[r][c - 1] === TILE_TYPE.WALL;
        const right = c < COLS - 1 && gameState.map[r][c + 1] === TILE_TYPE.WALL;

        ctx.shadowColor = "rgba(0, 199, 255, 0.5)";
        ctx.shadowBlur = 8;

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

        ctx.shadowBlur = 0;
      }
    }
  }
}

function drawPlayer() {
  drawPlayerSprite();
}

function drawGhosts() {
  gameState.ghosts.forEach((ghost) => {
    const x = ghost.col * TILE_SIZE;
    const y = ghost.row * TILE_SIZE;
    drawGhostSprite(x, y, ghost.color);
  });
}

function drawRoundedRect(x, y, width, height, radius, fillStyle) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
  ctx.fillStyle = fillStyle;
  ctx.fill();
}

function drawHUDOverlay() {
  if (gameState.shiftTime <= 0 && gameState.collectiblesCollected < gameState.collectiblesTotal) {
    statusEl.textContent = "⌛ Tijd voorbij!";
  }
  if (gameState.collectiblesCollected === gameState.collectiblesTotal) {
    statusEl.textContent = "✅ Allemaal verzameld!";
  }
}
