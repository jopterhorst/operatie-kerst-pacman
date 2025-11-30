// Nurse Sprites
function drawNurseSprite(x, y) {
  const px = (n) => Math.round(n);
  ctx.fillStyle = "#FFF1DD";
  ctx.fillRect(px(x + 10), px(y + 14), px(12), px(12));
  ctx.fillRect(px(x + 6), px(y + 16), px(4), px(6));
  ctx.fillRect(px(x + 22), px(y + 16), px(4), px(6));
  ctx.fillStyle = "#E9D8B5";
  ctx.fillRect(px(x + 11), px(y + 26), px(4), px(6));
  ctx.fillRect(px(x + 17), px(y + 26), px(4), px(6));
  ctx.fillStyle = "#FAB939";
  ctx.fillRect(px(x + 11), px(y + 6), px(10), px(8));
  ctx.fillStyle = "#FFF1DD";
  ctx.fillRect(px(x + 10), px(y + 2), px(12), px(4));
  ctx.fillRect(px(x + 12), px(y + 0), px(8), px(3));
  ctx.fillStyle = "#C1341D";
  ctx.fillRect(px(x + 15), px(y + 1), px(2), px(3));
  ctx.fillRect(px(x + 14), px(y + 2), px(4), px(1));
}

function drawPlayerNurse() {
  const x = player.col * TILE_SIZE;
  const y = player.row * TILE_SIZE;
  const px = (n) => Math.round(n);
  ctx.fillStyle = "#FAB939";
  ctx.fillRect(px(x + 10), px(y + 14), px(12), px(12));
  ctx.fillRect(px(x + 6), px(y + 16), px(4), px(6));
  ctx.fillRect(px(x + 22), px(y + 16), px(4), px(6));
  ctx.fillStyle = "#C78A2A";
  ctx.fillRect(px(x + 11), px(y + 26), px(4), px(6));
  ctx.fillRect(px(x + 17), px(y + 26), px(4), px(6));
  ctx.fillStyle = "#FFF1DD";
  ctx.fillRect(px(x + 11), px(y + 6), px(10), px(8));
  ctx.fillStyle = "#C1341D";
  ctx.fillRect(px(x + 12), px(y + 16), px(8), px(4));
  ctx.fillStyle = "#FFF1DD";
  ctx.fillRect(px(x + 13), px(y + 17), px(2), px(2));
}
