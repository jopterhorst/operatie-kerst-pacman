// Generic Player Sprite (8-bit style)
function drawPlayerSprite() {
  const x = player.col * TILE_SIZE;
  const y = player.row * TILE_SIZE;
  const px = (n) => Math.round(n);

  // Simple 8-bit player character - a person with a backpack
  // Head
  ctx.fillStyle = "#FFC0A0";
  ctx.fillRect(px(x + 12), px(y + 4), px(8), px(8));

  // Body
  ctx.fillStyle = "#4169E1";
  ctx.fillRect(px(x + 10), px(y + 12), px(12), px(12));

  // Backpack
  ctx.fillStyle = "#FF6347";
  ctx.fillRect(px(x + 8), px(y + 10), px(4), px(14));
  ctx.fillRect(px(x + 20), px(y + 10), px(4), px(14));

  // Arms
  ctx.fillStyle = "#FFC0A0";
  ctx.fillRect(px(x + 4), px(y + 13), px(4), px(8));
  ctx.fillRect(px(x + 24), px(y + 13), px(4), px(8));

  // Legs
  ctx.fillStyle = "#333333";
  ctx.fillRect(px(x + 10), px(y + 24), px(4), px(6));
  ctx.fillRect(px(x + 18), px(y + 24), px(4), px(6));

  // Eyes
  ctx.fillStyle = "#000000";
  ctx.fillRect(px(x + 14), px(y + 6), px(2), px(2));
  ctx.fillRect(px(x + 18), px(y + 6), px(2), px(2));
}
