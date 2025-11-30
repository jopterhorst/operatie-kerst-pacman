// Main Game Loop
function gameLoop(timestamp) {
  const delta = (timestamp - gameState.lastTime) / 1000;
  gameState.lastTime = timestamp;

  // Handle level transition delay
  if (gameState.levelTransitionDelay > 0) {
    gameState.levelTransitionDelay -= delta;
    if (gameState.levelTransitionDelay <= 0) {
      nextLevel();
    }
  } else if (gameState.shiftTime > 0 && gameState.collectiblesCollected < gameState.collectiblesTotal) {
    gameState.shiftTime -= delta;
    if (gameState.shiftTime < 0) gameState.shiftTime = 0;
    updateMovement(delta);
    updateHUD();
  }

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawMap();
  drawPlayer();
  drawHUDOverlay();

  requestAnimationFrame(gameLoop);
}
