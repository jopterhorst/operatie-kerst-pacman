// Bovenkamp Sprites - Psychologist
function drawBovenkampSprite(x, y) {
  const px = (n) => Math.round(n);
  
  // Black hair
  ctx.fillStyle = "#1a1a1a";
  ctx.fillRect(px(x + 11), px(y + 2), px(10), px(6));
  
  // Face (peach)
  ctx.fillStyle = "#FFC0A0";
  ctx.fillRect(px(x + 12), px(y + 6), px(8), px(6));
  
  // Glasses pixels (black)
  ctx.fillStyle = "#000000";
  ctx.fillRect(px(x + 12), px(y + 8), px(2), px(2)); // Left lens
  ctx.fillRect(px(x + 18), px(y + 8), px(2), px(2)); // Right lens
  ctx.fillRect(px(x + 14), px(y + 9), px(4), px(1)); // Bridge
  
  // Dark blue sweater
  ctx.fillStyle = "#1a3a52";
  ctx.fillRect(px(x + 8), px(y + 12), px(16), px(10));
  
  // Brown pants
  ctx.fillStyle = "#654321";
  ctx.fillRect(px(x + 8), px(y + 22), px(16), px(8));
  
  // Arms (peach)
  ctx.fillStyle = "#FFC0A0";
  ctx.fillRect(px(x + 4), px(y + 14), px(4), px(8));
  ctx.fillRect(px(x + 28), px(y + 14), px(4), px(8));
  
  // Small white notepad pixel
  ctx.fillStyle = "#FFFFFF";
  ctx.fillRect(px(x + 26), px(y + 16), px(4), px(5));
  
  // Notepad lines (black)
  ctx.fillStyle = "#000000";
  ctx.fillRect(px(x + 27), px(y + 18), px(2), px(1));
}

function drawPlayerBovenkamp() {
  const x = player.col * TILE_SIZE;
  const y = player.row * TILE_SIZE;
  const px = (n) => Math.round(n);
  
  // Black hair
  ctx.fillStyle = "#1a1a1a";
  ctx.fillRect(px(x + 11), px(y + 2), px(10), px(6));
  
  // Face (peach - highlighted)
  ctx.fillStyle = "#FFD4A0";
  ctx.fillRect(px(x + 12), px(y + 6), px(8), px(6));
  
  // Glasses pixels (highlighted)
  ctx.fillStyle = "#333333";
  ctx.fillRect(px(x + 12), px(y + 8), px(2), px(2)); // Left lens
  ctx.fillRect(px(x + 18), px(y + 8), px(2), px(2)); // Right lens
  ctx.fillRect(px(x + 14), px(y + 9), px(4), px(1)); // Bridge
  
  // Dark blue sweater (highlighted)
  ctx.fillStyle = "#2F5A8E";
  ctx.fillRect(px(x + 8), px(y + 12), px(16), px(10));
  
  // Brown pants (highlighted)
  ctx.fillStyle = "#8B6914";
  ctx.fillRect(px(x + 8), px(y + 22), px(16), px(8));
  
  // Arms (peach - highlighted)
  ctx.fillStyle = "#FFD4A0";
  ctx.fillRect(px(x + 4), px(y + 14), px(4), px(8));
  ctx.fillRect(px(x + 28), px(y + 14), px(4), px(8));
  
  // Small white notepad pixel (highlighted)
  ctx.fillStyle = "#F0F0F0";
  ctx.fillRect(px(x + 26), px(y + 16), px(4), px(5));
  
  // Notepad lines (highlighted)
  ctx.fillStyle = "#666666";
  ctx.fillRect(px(x + 27), px(y + 18), px(2), px(1));
}
