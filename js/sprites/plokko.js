// Plokko Sprites - Clinic clown
function drawPlokkoSprite(x, y) {
  const px = (n) => Math.round(n);
  
  // Tall hat pixel (green top)
  ctx.fillStyle = "#228B22";
  ctx.fillRect(px(x + 12), px(y + 0), px(8), px(2));
  ctx.fillRect(px(x + 13), px(y + 2), px(6), px(2));
  
  // Round head (yellow base)
  ctx.fillStyle = "#FFFF00";
  ctx.fillRect(px(x + 10), px(y + 4), px(12), px(8));
  
  // Big red nose pixel
  ctx.fillStyle = "#FF0000";
  ctx.fillRect(px(x + 15), px(y + 6), px(2), px(2));
  
  // Eyes (black dots)
  ctx.fillStyle = "#000000";
  ctx.fillRect(px(x + 12), px(y + 5), px(1), px(1));
  ctx.fillRect(px(x + 19), px(y + 5), px(1), px(1));
  
  // Green top outfit
  ctx.fillStyle = "#228B22";
  ctx.fillRect(px(x + 8), px(y + 12), px(8), px(12));
  
  // Yellow bottom half
  ctx.fillStyle = "#FFFF00";
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

function drawPlayerPlokko() {
  const x = player.col * TILE_SIZE;
  const y = player.row * TILE_SIZE;
  const px = (n) => Math.round(n);
  
  // Tall hat pixel (green top - highlighted)
  ctx.fillStyle = "#32CD32";
  ctx.fillRect(px(x + 12), px(y + 0), px(8), px(2));
  ctx.fillRect(px(x + 13), px(y + 2), px(6), px(2));
  
  // Round head (yellow base - highlighted)
  ctx.fillStyle = "#FFFF99";
  ctx.fillRect(px(x + 10), px(y + 4), px(12), px(8));
  
  // Big red nose pixel (highlighted)
  ctx.fillStyle = "#FF6347";
  ctx.fillRect(px(x + 15), px(y + 6), px(2), px(2));
  
  // Eyes (black dots)
  ctx.fillStyle = "#333333";
  ctx.fillRect(px(x + 12), px(y + 5), px(1), px(1));
  ctx.fillRect(px(x + 19), px(y + 5), px(1), px(1));
  
  // Green top outfit (highlighted)
  ctx.fillStyle = "#32CD32";
  ctx.fillRect(px(x + 8), px(y + 12), px(8), px(12));
  
  // Yellow bottom half (highlighted)
  ctx.fillStyle = "#FFFF99";
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
