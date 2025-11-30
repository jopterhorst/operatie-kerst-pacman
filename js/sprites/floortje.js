// Floortje Sprites - Intern
function drawFloortjeSprite(x, y) {
  const px = (n) => Math.round(n);
  
  // Blonde pixel ponytail (left and right)
  ctx.fillStyle = "#FFD700";
  ctx.fillRect(px(x + 4), px(y + 8), px(3), px(4)); // Left ponytail
  ctx.fillRect(px(x + 29), px(y + 8), px(3), px(4)); // Right ponytail
  
  // Face (peach) with big scared-looking eyes
  ctx.fillStyle = "#FFC0A0";
  ctx.fillRect(px(x + 12), px(y + 6), px(8), px(6));
  
  // Big scared eyes (black)
  ctx.fillStyle = "#000000";
  ctx.fillRect(px(x + 13), px(y + 9), px(2), px(2));
  ctx.fillRect(px(x + 17), px(y + 9), px(2), px(2));
  
  // Light-green scrubs
  ctx.fillStyle = "#90EE90";
  ctx.fillRect(px(x + 8), px(y + 12), px(16), px(14));
  
  // Arms (peach)
  ctx.fillStyle = "#FFC0A0";
  ctx.fillRect(px(x + 4), px(y + 14), px(4), px(8));
  ctx.fillRect(px(x + 28), px(y + 14), px(4), px(8));
  
  // Legs (peach)
  ctx.fillStyle = "#FFC0A0";
  ctx.fillRect(px(x + 12), px(y + 26), px(4), px(4));
  ctx.fillRect(px(x + 18), px(y + 26), px(4), px(4));
  
  // Pink phone in hand
  ctx.fillStyle = "#FF69B4";
  ctx.fillRect(px(x + 26), px(y + 16), px(3), px(4));
}

function drawPlayerFloortje() {
  const x = player.col * TILE_SIZE;
  const y = player.row * TILE_SIZE;
  const px = (n) => Math.round(n);
  
  // Blonde pixel ponytail (left and right - highlighted)
  ctx.fillStyle = "#FFED4E";
  ctx.fillRect(px(x + 4), px(y + 8), px(3), px(4)); // Left ponytail
  ctx.fillRect(px(x + 29), px(y + 8), px(3), px(4)); // Right ponytail
  
  // Face (peach - highlighted) with big scared-looking eyes
  ctx.fillStyle = "#FFD4A0";
  ctx.fillRect(px(x + 12), px(y + 6), px(8), px(6));
  
  // Big scared eyes (highlighted)
  ctx.fillStyle = "#222222";
  ctx.fillRect(px(x + 13), px(y + 9), px(2), px(2));
  ctx.fillRect(px(x + 17), px(y + 9), px(2), px(2));
  
  // Light-green scrubs (highlighted)
  ctx.fillStyle = "#A8E6A8";
  ctx.fillRect(px(x + 8), px(y + 12), px(16), px(14));
  
  // Arms (peach - highlighted)
  ctx.fillStyle = "#FFD4A0";
  ctx.fillRect(px(x + 4), px(y + 14), px(4), px(8));
  ctx.fillRect(px(x + 28), px(y + 14), px(4), px(8));
  
  // Legs (peach - highlighted)
  ctx.fillStyle = "#FFD4A0";
  ctx.fillRect(px(x + 12), px(y + 26), px(4), px(4));
  ctx.fillRect(px(x + 18), px(y + 26), px(4), px(4));
  
  // Pink phone in hand (highlighted)
  ctx.fillStyle = "#FF1493";
  ctx.fillRect(px(x + 26), px(y + 16), px(3), px(4));
}
