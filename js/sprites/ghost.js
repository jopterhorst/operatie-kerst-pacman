// Simple ghost sprite inspired by Pac-Man
function drawGhostSprite(ghost) {
  const x = ghost.col * TILE_SIZE;
  const y = ghost.row * TILE_SIZE;
  const px = (n) => Math.round(n);

  ctx.save();
  ctx.fillStyle = ghost.color;
  ctx.shadowColor = ghost.color;
  ctx.shadowBlur = 8;

  // Body
  ctx.beginPath();
  ctx.moveTo(px(x + 4), px(y + TILE_SIZE - 2));
  ctx.lineTo(px(x + 4), px(y + 12));
  ctx.quadraticCurveTo(px(x + TILE_SIZE / 2), px(y - 2), px(x + TILE_SIZE - 4), px(y + 12));
  ctx.lineTo(px(x + TILE_SIZE - 4), px(y + TILE_SIZE - 2));
  ctx.lineTo(px(x + TILE_SIZE - 10), px(y + TILE_SIZE - 6));
  ctx.lineTo(px(x + TILE_SIZE - 16), px(y + TILE_SIZE - 2));
  ctx.lineTo(px(x + TILE_SIZE - 22), px(y + TILE_SIZE - 6));
  ctx.lineTo(px(x + 10), px(y + TILE_SIZE - 2));
  ctx.closePath();
  ctx.fill();

  // Eyes
  ctx.fillStyle = '#fff';
  ctx.shadowBlur = 0;
  ctx.fillRect(px(x + 10), px(y + 10), 6, 8);
  ctx.fillRect(px(x + 18), px(y + 10), 6, 8);
  ctx.fillStyle = '#1b1b2f';
  ctx.fillRect(px(x + 12), px(y + 14), 3, 3);
  ctx.fillRect(px(x + 20), px(y + 14), 3, 3);
  ctx.restore();
}
