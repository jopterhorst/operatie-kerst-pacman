// Albert Sprites - Energetic Patient
function drawAlbertSprite(x, y) {
  const px = (n) => Math.round(n);
  
  // Orange/red messy hair (multiple chunks for messy effect)
  ctx.fillStyle = "#FF4500";
  ctx.fillRect(px(x + 8), px(y + 0), px(4), px(4));
  ctx.fillRect(px(x + 12), px(y + 1), px(8), px(5));
  ctx.fillRect(px(x + 20), px(y + 2), px(4), px(4));
  ctx.fillRect(px(x + 10), px(y + 4), px(12), px(2));
  
  // Face (peach)
  ctx.fillStyle = "#FFC0A0";
  ctx.fillRect(px(x + 12), px(y + 6), px(8), px(6));
  
  // Small mustache pixel (black/brown)
  ctx.fillStyle = "#654321";
  ctx.fillRect(px(x + 13), px(y + 12), px(2), px(1));
  ctx.fillRect(px(x + 17), px(y + 12), px(2), px(1));
  
  // Eyes (intense)
  ctx.fillStyle = "#000000";
  ctx.fillRect(px(x + 13), px(y + 10), px(2), px(2));
  ctx.fillRect(px(x + 17), px(y + 10), px(2), px(2));
  
  // Hospital gown but more upright (wider sprite)
  ctx.fillStyle = "#87CEEB";
  ctx.fillRect(px(x + 6), px(y + 12), px(20), px(14));
  
  // Arms (peach - slightly wider posture)
  ctx.fillStyle = "#FFC0A0";
  ctx.fillRect(px(x + 2), px(y + 14), px(4), px(8));
  ctx.fillRect(px(x + 28), px(y + 14), px(4), px(8));
  
  // Legs (peach - upright)
  ctx.fillStyle = "#FFC0A0";
  ctx.fillRect(px(x + 11), px(y + 26), px(4), px(4));
  ctx.fillRect(px(x + 19), px(y + 26), px(4), px(4));
}

function drawPlayerAlbert() {
  const x = player.col * TILE_SIZE;
  const y = player.row * TILE_SIZE;
  const px = (n) => Math.round(n);
  
  // Orange/red messy hair (highlighted)
  ctx.fillStyle = "#FF6347";
  ctx.fillRect(px(x + 8), px(y + 0), px(4), px(4));
  ctx.fillRect(px(x + 12), px(y + 1), px(8), px(5));
  ctx.fillRect(px(x + 20), px(y + 2), px(4), px(4));
  ctx.fillRect(px(x + 10), px(y + 4), px(12), px(2));
  
  // Face (peach - highlighted)
  ctx.fillStyle = "#FFD4A0";
  ctx.fillRect(px(x + 12), px(y + 6), px(8), px(6));
  
  // Small mustache pixel (highlighted)
  ctx.fillStyle = "#8B6914";
  ctx.fillRect(px(x + 13), px(y + 12), px(2), px(1));
  ctx.fillRect(px(x + 17), px(y + 12), px(2), px(1));
  
  // Eyes (intense - highlighted)
  ctx.fillStyle = "#222222";
  ctx.fillRect(px(x + 13), px(y + 10), px(2), px(2));
  ctx.fillRect(px(x + 17), px(y + 10), px(2), px(2));
  
  // Hospital gown but more upright (highlighted)
  ctx.fillStyle = "#5B7FD0";
  ctx.fillRect(px(x + 6), px(y + 12), px(20), px(14));
  
  // Arms (peach - highlighted)
  ctx.fillStyle = "#FFD4A0";
  ctx.fillRect(px(x + 2), px(y + 14), px(4), px(8));
  ctx.fillRect(px(x + 28), px(y + 14), px(4), px(8));
  
  // Legs (peach - highlighted)
  ctx.fillStyle = "#FFD4A0";
  ctx.fillRect(px(x + 11), px(y + 26), px(4), px(4));
  ctx.fillRect(px(x + 19), px(y + 26), px(4), px(4));
}
