// Simon Sprites - Patient
function drawSimonSprite(x, y) {
  const px = (n) => Math.round(n);
  
  // Pale face (very light)
  ctx.fillStyle = "#E8D0C0";
  ctx.fillRect(px(x + 12), px(y + 8), px(8), px(6));
  
  // Downward slanted eyes (sad/hunched)
  ctx.fillStyle = "#333333";
  ctx.fillRect(px(x + 13), px(y + 11), px(2), px(1));
  ctx.fillRect(px(x + 17), px(y + 12), px(2), px(1));
  
  // Simple blue patient gown (hunched posture - lower)
  ctx.fillStyle = "#4169E1";
  ctx.fillRect(px(x + 8), px(y + 16), px(16), px(12));
  
  // Arms (peach - slightly curved inward)
  ctx.fillStyle = "#E8D0C0";
  ctx.fillRect(px(x + 4), px(y + 18), px(4), px(6));
  ctx.fillRect(px(x + 28), px(y + 18), px(4), px(6));
  
  // Legs (peach - hunched)
  ctx.fillStyle = "#E8D0C0";
  ctx.fillRect(px(x + 12), px(y + 26), px(4), px(4));
  ctx.fillRect(px(x + 18), px(y + 26), px(4), px(4));
  
  // Tiny IV-bag pixel (beige/tan)
  ctx.fillStyle = "#FFE4B5";
  ctx.fillRect(px(x + 26), px(y + 14), px(2), px(3));
  ctx.fillRect(px(x + 27), px(y + 16), px(1), px(2)); // IV tube
}

function drawPlayerSimon() {
  const x = player.col * TILE_SIZE;
  const y = player.row * TILE_SIZE;
  const px = (n) => Math.round(n);
  
  // Pale face (very light - highlighted)
  ctx.fillStyle = "#F0DFCF";
  ctx.fillRect(px(x + 12), px(y + 8), px(8), px(6));
  
  // Downward slanted eyes (sad/hunched - highlighted)
  ctx.fillStyle = "#555555";
  ctx.fillRect(px(x + 13), px(y + 11), px(2), px(1));
  ctx.fillRect(px(x + 17), px(y + 12), px(2), px(1));
  
  // Simple blue patient gown (hunched posture - highlighted)
  ctx.fillStyle = "#5B7FD0";
  ctx.fillRect(px(x + 8), px(y + 16), px(16), px(12));
  
  // Arms (peach - highlighted)
  ctx.fillStyle = "#F0DFCF";
  ctx.fillRect(px(x + 4), px(y + 18), px(4), px(6));
  ctx.fillRect(px(x + 28), px(y + 18), px(4), px(6));
  
  // Legs (peach - highlighted)
  ctx.fillStyle = "#F0DFCF";
  ctx.fillRect(px(x + 12), px(y + 26), px(4), px(4));
  ctx.fillRect(px(x + 18), px(y + 26), px(4), px(4));
  
  // Tiny IV-bag pixel (highlighted)
  ctx.fillStyle = "#FFD89B";
  ctx.fillRect(px(x + 26), px(y + 14), px(2), px(3));
  ctx.fillRect(px(x + 27), px(y + 16), px(1), px(2)); // IV tube
}
