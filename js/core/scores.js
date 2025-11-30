// Scores Screen Management

function initScoresScreen() {
  const restartBtn = document.getElementById('restartBtn');
  const shareBtn = document.getElementById('shareBtn');
  
  restartBtn.addEventListener('click', handleRestart);
  shareBtn.addEventListener('click', handleShare);
}

function handleRestart() {
  resetGame();
}

function handleShare() {
  const modal = document.getElementById('scoresModal');
  
  // For mobile, try native share
  if (navigator.share) {
    navigator.share({
      title: 'Operatie Kerst',
      text: 'Ik heb Operatie Kerst gespeeld! 🏥🎄',
      url: window.location.href
    }).catch(err => console.log('Share cancelled:', err));
  } else {
    // Fallback: Take screenshot of scores modal
    // Note: This requires html2canvas library or similar
    // For now, we'll just copy the scores to clipboard
    const scoresBody = document.getElementById('scoresBody');
    const totalScore = document.getElementById('totalScore').textContent;
    
    let scoreText = '🎄 Operatie Kerst - Eindstand 🏥\n';
    scoreText += '================================\n\n';
    
    const rows = scoresBody.querySelectorAll('.score-row');
    rows.forEach(row => {
      const level = row.querySelector('.score-level').textContent;
      const count = row.querySelector('.score-count').textContent;
      const status = row.querySelector('.score-status').textContent;
      scoreText += `${level}: ${count} ${status}\n`;
    });
    
    scoreText += '\n================================\n';
    scoreText += `Totaal: ${totalScore}\n\n`;
    scoreText += `Speel mee op: ${window.location.href}`;
    
    // Copy to clipboard
    navigator.clipboard.writeText(scoreText).then(() => {
      alert('Score gekopieerd naar klembord! 📋');
    });
  }
}
