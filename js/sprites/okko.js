// Okko Sprites - Clinic clown
function drawOkkoSprite(x, y) {
  const px = (n) => Math.round(n);
  
  // Shorter hat pixel (red top)
  ctx.fillStyle = "#FF0000";
  ctx.fillRect(px(x + 13), px(y + 1), px(6), px(2));
  ctx.fillRect(px(x + 14), px(y + 3), px(4), px(1));
  
  // Round head (blue base)
  ctx.fillStyle = "#0047AB";
  ctx.fillRect(px(x + 10), px(y + 4), px(12), px(8));
  
  // Big red nose pixel
  ctx.fillStyle = "#FF0000";
  ctx.fillRect(px(x + 15), px(y + 6), px(2), px(2));
  
  // Eyes (black dots)
  ctx.fillStyle = "#000000";
  ctx.fillRect(px(x + 12), px(y + 5), px(1), px(1));
  ctx.fillRect(px(x + 19), px(y + 5), px(1), px(1));
  
  // Red top outfit
  ctx.fillStyle = "#FF0000";
  ctx.fillRect(px(x + 8), px(y + 12), px(8), px(12));
  
  // Blue bottom half
  ctx.fillStyle = "#0047AB";
  ctx.fillRect(px(x + 16), px(y + 12), px(8), px(12));
  
  // Arms (flesh tone)
  ctx.fillStyle = "#FFD4A0";
  ctx.fillRect(px(x + 2), px(y + 14), px(6), px(8));
  ctx.fillRect(px(x + 26), px(y + 14), px(6), px(8));
  
  // Legs (flesh tone)
  ctx.fillStyle = "#FFD4A0";
  ctx.fillRect(px(x + 11), px(y + 24), px(3), px(6));
  ctx.fillRect(px(x + 20), px(y + 24), px(3), px(6));
}

function drawPlayerOkko() {
  const x = player.col * TILE_SIZE;
  const y = player.row * TILE_SIZE;
  const px = (n) => Math.round(n);
  
  // Shorter hat pixel (red top - highlighted)
  ctx.fillStyle = "#FF6347";
  ctx.fillRect(px(x + 13), px(y + 1), px(6), px(2));
  ctx.fillRect(px(x + 14), px(y + 3), px(4), px(1));
  
  // Round head (blue base - highlighted)
  ctx.fillStyle = "#1E90FF";
  ctx.fillRect(px(x + 10), px(y + 4), px(12), px(8));
  
  // Big red nose pixel (highlighted)
  ctx.fillStyle = "#FF6347";
  ctx.fillRect(px(x + 15), px(y + 6), px(2), px(2));
  
  // Eyes (black dots)
  ctx.fillStyle = "#333333";
  ctx.fillRect(px(x + 12), px(y + 5), px(1), px(1));
  ctx.fillRect(px(x + 19), px(y + 5), px(1), px(1));
  
  // Red top outfit (highlighted)
  ctx.fillStyle = "#FF6347";
  ctx.fillRect(px(x + 8), px(y + 12), px(8), px(12));
  
  // Blue bottom half (highlighted)
  ctx.fillStyle = "#1E90FF";
  ctx.fillRect(px(x + 16), px(y + 12), px(8), px(12));
  
  // Arms (flesh tone - highlighted)
  ctx.fillStyle = "#FFE8B6";
  ctx.fillRect(px(x + 2), px(y + 14), px(6), px(8));
  ctx.fillRect(px(x + 26), px(y + 14), px(6), px(8));
  
  // Legs (flesh tone - highlighted)
  ctx.fillStyle = "#FFE8B6";
  ctx.fillRect(px(x + 11), px(y + 24), px(3), px(6));
  ctx.fillRect(px(x + 20), px(y + 24), px(3), px(6));
}
