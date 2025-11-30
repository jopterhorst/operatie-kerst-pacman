// Gabby Sprites - Dementerende oudere
function drawGabbySprite(x, y) {
  const px = (n) => Math.round(n);
  
  // Puffy Einstein hair (white cloud)
  ctx.fillStyle = "#FFFFFF";
  ctx.fillRect(px(x + 6), px(y + 0), px(4), px(2));
  ctx.fillRect(px(x + 4), px(y + 2), px(8), px(4));
  ctx.fillRect(px(x + 22), px(y + 2), px(8), px(4));
  ctx.fillRect(px(x + 8), px(y + 1), px(16), px(6));
  
  // Face (peach)
  ctx.fillStyle = "#FFC0A0";
  ctx.fillRect(px(x + 12), px(y + 6), px(8), px(6));
  
  // Light blue gown
  ctx.fillStyle = "#ADD8E6";
  ctx.fillRect(px(x + 8), px(y + 12), px(16), px(12));
  
  // Arms (peach)
  ctx.fillStyle = "#FFC0A0";
  ctx.fillRect(px(x + 4), px(y + 14), px(4), px(6));
  ctx.fillRect(px(x + 28), px(y + 14), px(4), px(6));
  
  // Gray rollator (two wheels + frame)
  ctx.fillStyle = "#808080";
  ctx.fillRect(px(x + 2), px(y + 20), px(4), px(4)); // Left wheel
  ctx.fillRect(px(x + 28), px(y + 20), px(4), px(4)); // Right wheel
  ctx.fillRect(px(x + 5), px(y + 18), px(22), px(2)); // Handle bar
  
  // Yellow note (optional floating detail)
  ctx.fillStyle = "#FFFF00";
  ctx.fillRect(px(x + 24), px(y + 8), px(3), px(3));
}

function drawPlayerGabby() {
  const x = player.col * TILE_SIZE;
  const y = player.row * TILE_SIZE;
  const px = (n) => Math.round(n);
  
  // Puffy Einstein hair (white cloud)
  ctx.fillStyle = "#FFFFFF";
  ctx.fillRect(px(x + 6), px(y + 0), px(4), px(2));
  ctx.fillRect(px(x + 4), px(y + 2), px(8), px(4));
  ctx.fillRect(px(x + 22), px(y + 2), px(8), px(4));
  ctx.fillRect(px(x + 8), px(y + 1), px(16), px(6));
  
  // Face (peach - highlighted)
  ctx.fillStyle = "#FFD4A0";
  ctx.fillRect(px(x + 12), px(y + 6), px(8), px(6));
  
  // Light blue gown (highlighted)
  ctx.fillStyle = "#87CEEB";
  ctx.fillRect(px(x + 8), px(y + 12), px(16), px(12));
  
  // Arms (peach - highlighted)
  ctx.fillStyle = "#FFD4A0";
  ctx.fillRect(px(x + 4), px(y + 14), px(4), px(6));
  ctx.fillRect(px(x + 28), px(y + 14), px(4), px(6));
  
  // Gray rollator (highlighted)
  ctx.fillStyle = "#A0A0A0";
  ctx.fillRect(px(x + 2), px(y + 20), px(4), px(4)); // Left wheel
  ctx.fillRect(px(x + 28), px(y + 20), px(4), px(4)); // Right wheel
  ctx.fillRect(px(x + 5), px(y + 18), px(22), px(2)); // Handle bar
}
