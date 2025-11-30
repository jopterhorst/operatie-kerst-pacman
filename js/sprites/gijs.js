// Gijs Sprites - Brother, depressed
function drawGijsSprite(x, y) {
  const px = (n) => Math.round(n);
  
  // Black hair
  ctx.fillStyle = "#1a1a1a";
  ctx.fillRect(px(x + 11), px(y + 2), px(10), px(6));
  
  // Face (peach)
  ctx.fillStyle = "#FFC0A0";
  ctx.fillRect(px(x + 12), px(y + 6), px(8), px(6));
  
  // Downward slanted eyes (sad)
  ctx.fillStyle = "#000000";
  ctx.fillRect(px(x + 13), px(y + 9), px(2), px(1));
  ctx.fillRect(px(x + 17), px(y + 10), px(2), px(1));
  
  // Gray sweater
  ctx.fillStyle = "#A9A9A9";
  ctx.fillRect(px(x + 8), px(y + 12), px(16), px(12));
  
  // Arms (peach - droopy posture)
  ctx.fillStyle = "#FFC0A0";
  ctx.fillRect(px(x + 4), px(y + 16), px(4), px(6));
  ctx.fillRect(px(x + 28), px(y + 16), px(4), px(6));
  
  // Legs (peach - hunched)
  ctx.fillStyle = "#FFC0A0";
  ctx.fillRect(px(x + 12), px(y + 26), px(4), px(4));
  ctx.fillRect(px(x + 18), px(y + 26), px(4), px(4));
  
  // Small butterfly pixel (purple - right hand)
  ctx.fillStyle = "#9370DB";
  ctx.fillRect(px(x + 27), px(y + 14), px(2), px(2));
  ctx.fillRect(px(x + 28), px(y + 13), px(1), px(4)); // Body
}

function drawPlayerGijs() {
  const x = player.col * TILE_SIZE;
  const y = player.row * TILE_SIZE;
  const px = (n) => Math.round(n);
  
  // Black hair
  ctx.fillStyle = "#1a1a1a";
  ctx.fillRect(px(x + 11), px(y + 2), px(10), px(6));
  
  // Face (peach - highlighted)
  ctx.fillStyle = "#FFD4A0";
  ctx.fillRect(px(x + 12), px(y + 6), px(8), px(6));
  
  // Downward slanted eyes (sad - highlighted)
  ctx.fillStyle = "#333333";
  ctx.fillRect(px(x + 13), px(y + 9), px(2), px(1));
  ctx.fillRect(px(x + 17), px(y + 10), px(2), px(1));
  
  // Gray sweater (highlighted)
  ctx.fillStyle = "#BFBFBF";
  ctx.fillRect(px(x + 8), px(y + 12), px(16), px(12));
  
  // Arms (peach - highlighted)
  ctx.fillStyle = "#FFD4A0";
  ctx.fillRect(px(x + 4), px(y + 16), px(4), px(6));
  ctx.fillRect(px(x + 28), px(y + 16), px(4), px(6));
  
  // Legs (peach - highlighted)
  ctx.fillStyle = "#FFD4A0";
  ctx.fillRect(px(x + 12), px(y + 26), px(4), px(4));
  ctx.fillRect(px(x + 18), px(y + 26), px(4), px(4));
  
  // Small butterfly pixel (purple - highlighted)
  ctx.fillStyle = "#BA55D3";
  ctx.fillRect(px(x + 27), px(y + 14), px(2), px(2));
  ctx.fillRect(px(x + 28), px(y + 13), px(1), px(4)); // Body
}
