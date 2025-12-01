// Main Game Loop
function gameLoop(timestamp) {
  const delta = (timestamp - gameState.lastTime) / 1000;
  gameState.lastTime = timestamp;

  // Skip game loop if game is over
  if (gameState.gameOver) {
    requestAnimationFrame(gameLoop);
    return;
  }

  // Handle level transition delay
  if (gameState.levelTransitionDelay > 0) {
    gameState.levelTransitionDelay -= delta;
    if (gameState.levelTransitionDelay <= 0) {
      // Save score for completed level before moving to next
      saveLevelScore();
      
      // Check if all levels completed
      if (gameState.currentLevel >= 11) {
        showScoresScreen();
      } else {
        nextLevel();
      }
    }
  } else if (gameState.shiftTime > 0 && gameState.collectiblesCollected < gameState.collectiblesTotal) {
    gameState.shiftTime -= delta;
    if (gameState.shiftTime < 0) gameState.shiftTime = 0;
    updateMovement(delta);
    updateGhosts(delta);
    updateHUD();
  } else if (gameState.shiftTime <= 0 && gameState.collectiblesCollected < gameState.collectiblesTotal) {
    // Time ran out before collecting all items
    saveLevelScore();
    
    // Check if all levels completed
    if (gameState.currentLevel >= 11) {
      showScoresScreen();
    } else {
      gameState.levelTransitionDelay = 2; // 2 second delay before next level
    }
  }

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawMap();
  drawGhosts();
  drawPlayer();
  drawHUDOverlay();

  requestAnimationFrame(gameLoop);
}
