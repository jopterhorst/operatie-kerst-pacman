// Helga Sprites - Head Nurse
function drawHelgaSprite(x, y) {
  const px = (n) => Math.round(n);
  
  // Sharp dark bob haircut
  ctx.fillStyle = "#2C2C2C";
  ctx.fillRect(px(x + 10), px(y + 4), px(12), px(6));
  ctx.fillRect(px(x + 8), px(y + 6), px(16), px(2));
  
  // Face (peach)
  ctx.fillStyle = "#FFC0A0";
  ctx.fillRect(px(x + 12), px(y + 6), px(8), px(6));
  
  // White nurse uniform
  ctx.fillStyle = "#FFFFFF";
  ctx.fillRect(px(x + 8), px(y + 12), px(16), px(14));
  
  // Arms in akimbo V-shape (peach)
  ctx.fillStyle = "#FFC0A0";
  ctx.fillRect(px(x + 3), px(y + 14), px(5), px(8)); // Left arm angled
  ctx.fillRect(px(x + 26), px(y + 14), px(5), px(8)); // Right arm angled
  
  // Legs (peach)
  ctx.fillStyle = "#FFC0A0";
  ctx.fillRect(px(x + 12), px(y + 26), px(4), px(4));
  ctx.fillRect(px(x + 18), px(y + 26), px(4), px(4));
  
  // Black whistle at chest
  ctx.fillStyle = "#000000";
  ctx.fillRect(px(x + 15), px(y + 16), px(2), px(3));
  ctx.fillRect(px(x + 16), px(y + 17), px(2), px(1));
}

function drawPlayerHelga() {
  const x = player.col * TILE_SIZE;
  const y = player.row * TILE_SIZE;
  const px = (n) => Math.round(n);
  
  // Sharp dark bob haircut
  ctx.fillStyle = "#2C2C2C";
  ctx.fillRect(px(x + 10), px(y + 4), px(12), px(6));
  ctx.fillRect(px(x + 8), px(y + 6), px(16), px(2));
  
  // Face (peach - highlighted)
  ctx.fillStyle = "#FFD4A0";
  ctx.fillRect(px(x + 12), px(y + 6), px(8), px(6));
  
  // White nurse uniform (highlighted)
  ctx.fillStyle = "#F0F0F0";
  ctx.fillRect(px(x + 8), px(y + 12), px(16), px(14));
  
  // Arms in akimbo V-shape (peach - highlighted)
  ctx.fillStyle = "#FFD4A0";
  ctx.fillRect(px(x + 3), px(y + 14), px(5), px(8)); // Left arm angled
  ctx.fillRect(px(x + 26), px(y + 14), px(5), px(8)); // Right arm angled
  
  // Legs (peach - highlighted)
  ctx.fillStyle = "#FFD4A0";
  ctx.fillRect(px(x + 12), px(y + 26), px(4), px(4));
  ctx.fillRect(px(x + 18), px(y + 26), px(4), px(4));
  
  // Black whistle at chest (highlighted)
  ctx.fillStyle = "#222222";
  ctx.fillRect(px(x + 15), px(y + 16), px(2), px(3));
  ctx.fillRect(px(x + 16), px(y + 17), px(2), px(1));
}
