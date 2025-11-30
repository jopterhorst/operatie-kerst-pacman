// Sjonnie Beentjes Sprites - Best friend
function drawSjonnieSprite(x, y) {
  const px = (n) => Math.round(n);
  
  // Backwards blue cap
  ctx.fillStyle = "#0047AB";
  ctx.fillRect(px(x + 10), px(y + 2), px(12), px(4)); // Cap bill pointing back
  ctx.fillRect(px(x + 12), px(y + 0), px(8), px(3)); // Cap crown
  
  // Face (peach)
  ctx.fillStyle = "#FFC0A0";
  ctx.fillRect(px(x + 12), px(y + 6), px(8), px(6));
  
  // Big grin pixel (black)
  ctx.fillStyle = "#000000";
  ctx.fillRect(px(x + 13), px(y + 12), px(6), px(1)); // Wide smile
  
  // White tank top
  ctx.fillStyle = "#FFFFFF";
  ctx.fillRect(px(x + 8), px(y + 12), px(16), px(12));
  
  // Arms (peach - relaxed)
  ctx.fillStyle = "#FFC0A0";
  ctx.fillRect(px(x + 4), px(y + 14), px(4), px(8));
  ctx.fillRect(px(x + 28), px(y + 14), px(4), px(8));
  
  // Legs (peach)
  ctx.fillStyle = "#FFC0A0";
  ctx.fillRect(px(x + 12), px(y + 26), px(4), px(4));
  ctx.fillRect(px(x + 18), px(y + 26), px(4), px(4));
  
  // Whiskey bottle pixel (green)
  ctx.fillStyle = "#228B22";
  ctx.fillRect(px(x + 26), px(y + 16), px(2), px(6));
  ctx.fillRect(px(x + 25), px(y + 15), px(4), px(1)); // Bottle neck
}

function drawPlayerSjonnie() {
  const x = player.col * TILE_SIZE;
  const y = player.row * TILE_SIZE;
  const px = (n) => Math.round(n);
  
  // Backwards blue cap (highlighted)
  ctx.fillStyle = "#1E90FF";
  ctx.fillRect(px(x + 10), px(y + 2), px(12), px(4)); // Cap bill pointing back
  ctx.fillRect(px(x + 12), px(y + 0), px(8), px(3)); // Cap crown
  
  // Face (peach - highlighted)
  ctx.fillStyle = "#FFD4A0";
  ctx.fillRect(px(x + 12), px(y + 6), px(8), px(6));
  
  // Big grin pixel (highlighted)
  ctx.fillStyle = "#333333";
  ctx.fillRect(px(x + 13), px(y + 12), px(6), px(1)); // Wide smile
  
  // White tank top (highlighted)
  ctx.fillStyle = "#F0F0F0";
  ctx.fillRect(px(x + 8), px(y + 12), px(16), px(12));
  
  // Arms (peach - highlighted)
  ctx.fillStyle = "#FFD4A0";
  ctx.fillRect(px(x + 4), px(y + 14), px(4), px(8));
  ctx.fillRect(px(x + 28), px(y + 14), px(4), px(8));
  
  // Legs (peach - highlighted)
  ctx.fillStyle = "#FFD4A0";
  ctx.fillRect(px(x + 12), px(y + 26), px(4), px(4));
  ctx.fillRect(px(x + 18), px(y + 26), px(4), px(4));
  
  // Whiskey bottle pixel (highlighted)
  ctx.fillStyle = "#32CD32";
  ctx.fillRect(px(x + 26), px(y + 16), px(2), px(6));
  ctx.fillRect(px(x + 25), px(y + 15), px(4), px(1)); // Bottle neck
}
