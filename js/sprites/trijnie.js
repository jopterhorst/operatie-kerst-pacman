// Trijnie Sprites - Albert's sister
function drawTrijnieSprite(x, y) {
  const px = (n) => Math.round(n);
  
  // Brown bun haircut on top
  ctx.fillStyle = "#8B4513";
  ctx.fillRect(px(x + 14), px(y + 0), px(4), px(4)); // Bun
  ctx.fillRect(px(x + 12), px(y + 2), px(8), px(4)); // Hair base
  
  // Face (peach)
  ctx.fillStyle = "#FFC0A0";
  ctx.fillRect(px(x + 12), px(y + 6), px(8), px(6));
  
  // Pink sweater
  ctx.fillStyle = "#FFB6D9";
  ctx.fillRect(px(x + 8), px(y + 12), px(16), px(10));
  
  // Arms slightly angled outward (assertive) - peach
  ctx.fillStyle = "#FFC0A0";
  ctx.fillRect(px(x + 2), px(y + 14), px(6), px(8)); // Left arm angled out
  ctx.fillRect(px(x + 26), px(y + 14), px(6), px(8)); // Right arm angled out
  
  // Long skirt line (dark pink/mauve)
  ctx.fillStyle = "#D97BA8";
  ctx.fillRect(px(x + 8), px(y + 22), px(16), px(8));
  
  // Legs visible below skirt
  ctx.fillStyle = "#FFC0A0";
  ctx.fillRect(px(x + 12), px(y + 26), px(4), px(4));
  ctx.fillRect(px(x + 18), px(y + 26), px(4), px(4));
}

function drawPlayerTrijnie() {
  const x = player.col * TILE_SIZE;
  const y = player.row * TILE_SIZE;
  const px = (n) => Math.round(n);
  
  // Brown bun haircut on top (highlighted)
  ctx.fillStyle = "#A0522D";
  ctx.fillRect(px(x + 14), px(y + 0), px(4), px(4)); // Bun
  ctx.fillRect(px(x + 12), px(y + 2), px(8), px(4)); // Hair base
  
  // Face (peach - highlighted)
  ctx.fillStyle = "#FFD4A0";
  ctx.fillRect(px(x + 12), px(y + 6), px(8), px(6));
  
  // Pink sweater (highlighted)
  ctx.fillStyle = "#FFC9E3";
  ctx.fillRect(px(x + 8), px(y + 12), px(16), px(10));
  
  // Arms slightly angled outward (peach - highlighted)
  ctx.fillStyle = "#FFD4A0";
  ctx.fillRect(px(x + 2), px(y + 14), px(6), px(8)); // Left arm angled out
  ctx.fillRect(px(x + 26), px(y + 14), px(6), px(8)); // Right arm angled out
  
  // Long skirt line (highlighted)
  ctx.fillStyle = "#E89BC2";
  ctx.fillRect(px(x + 8), px(y + 22), px(16), px(8));
  
  // Legs visible below skirt (highlighted)
  ctx.fillStyle = "#FFD4A0";
  ctx.fillRect(px(x + 12), px(y + 26), px(4), px(4));
  ctx.fillRect(px(x + 18), px(y + 26), px(4), px(4));
}
