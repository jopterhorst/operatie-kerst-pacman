// Dr. Hans Sprites - Doctor
function drawDrHansSprite(x, y) {
  const px = (n) => Math.round(n);
  
  // Brown hair
  ctx.fillStyle = "#8B4513";
  ctx.fillRect(px(x + 12), px(y + 2), px(8), px(6));
  
  // Face (peach)
  ctx.fillStyle = "#FFC0A0";
  ctx.fillRect(px(x + 12), px(y + 8), px(8), px(4));
  
  // Tall white coat
  ctx.fillStyle = "#FFFFFF";
  ctx.fillRect(px(x + 8), px(y + 10), px(16), px(18));
  
  // Blue tie pixel
  ctx.fillStyle = "#0047AB";
  ctx.fillRect(px(x + 15), px(y + 12), px(2), px(4));
  
  // Clipboard (tan/beige)
  ctx.fillStyle = "#D2B48C";
  ctx.fillRect(px(x + 26), px(y + 14), px(4), px(8));
  
  // Clipboard clip (black)
  ctx.fillStyle = "#000000";
  ctx.fillRect(px(x + 27), px(y + 13), px(2), px(2));
  
  // Legs (dark)
  ctx.fillStyle = "#333333";
  ctx.fillRect(px(x + 12), px(y + 28), px(4), px(2));
  ctx.fillRect(px(x + 18), px(y + 28), px(4), px(2));
}

function drawPlayerDrHans() {
  const x = player.col * TILE_SIZE;
  const y = player.row * TILE_SIZE;
  const px = (n) => Math.round(n);
  
  // Brown hair
  ctx.fillStyle = "#8B4513";
  ctx.fillRect(px(x + 12), px(y + 2), px(8), px(6));
  
  // Face (peach - highlighted)
  ctx.fillStyle = "#FFD4A0";
  ctx.fillRect(px(x + 12), px(y + 8), px(8), px(4));
  
  // Tall white coat (highlighted)
  ctx.fillStyle = "#F0F0F0";
  ctx.fillRect(px(x + 8), px(y + 10), px(16), px(18));
  
  // Blue tie pixel (highlighted)
  ctx.fillStyle = "#1E90FF";
  ctx.fillRect(px(x + 15), px(y + 12), px(2), px(4));
  
  // Clipboard (tan/beige - highlighted)
  ctx.fillStyle = "#E8C77B";
  ctx.fillRect(px(x + 26), px(y + 14), px(4), px(8));
  
  // Clipboard clip (highlighted)
  ctx.fillStyle = "#222222";
  ctx.fillRect(px(x + 27), px(y + 13), px(2), px(2));
  
  // Legs (dark - highlighted)
  ctx.fillStyle = "#555555";
  ctx.fillRect(px(x + 12), px(y + 28), px(4), px(2));
  ctx.fillRect(px(x + 18), px(y + 28), px(4), px(2));
}
