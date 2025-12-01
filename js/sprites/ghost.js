// Pac-Man inspired ghost sprite
function drawGhostSprite(x, y, color) {
  const px = (n) => Math.round(n);
  ctx.save();
  ctx.translate(x, y);

  // Body
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(px(4), px(16));
  ctx.quadraticCurveTo(px(4), px(4), px(16), px(4));
  ctx.quadraticCurveTo(px(28), px(4), px(28), px(16));
  ctx.lineTo(px(28), px(28));
  ctx.lineTo(px(24), px(24));
  ctx.lineTo(px(20), px(28));
  ctx.lineTo(px(16), px(24));
  ctx.lineTo(px(12), px(28));
  ctx.lineTo(px(8), px(24));
  ctx.lineTo(px(4), px(28));
  ctx.closePath();
  ctx.fill();

  // Eyes
  ctx.fillStyle = "#fff";
  ctx.beginPath();
  ctx.arc(px(12), px(14), px(4), 0, Math.PI * 2);
  ctx.arc(px(20), px(14), px(4), 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = "#1b2b4a";
  ctx.beginPath();
  ctx.arc(px(13), px(14), px(2), 0, Math.PI * 2);
  ctx.arc(px(21), px(14), px(2), 0, Math.PI * 2);
  ctx.fill();

  ctx.restore();
}
