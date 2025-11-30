// Mobile Touch Input Handler
const touchControls = {
  active: false,
  
  init() {
    // Always set up d-pad listeners (works on desktop too for testing)
    this.setupDpadListeners();
  },
  
  setupDpadListeners() {
    const dpadUp = document.getElementById('dpadUp');
    const dpadDown = document.getElementById('dpadDown');
    const dpadLeft = document.getElementById('dpadLeft');
    const dpadRight = document.getElementById('dpadRight');
    
    if (!dpadUp || !dpadDown || !dpadLeft || !dpadRight) {
      console.log('D-pad elements not found');
      return;
    }
    
    // Touch events for buttons
    dpadUp.addEventListener('touchstart', (e) => {
      e.preventDefault();
      e.stopPropagation();
      player.nextDir = DIR.UP;
      dpadUp.style.background = '#A02410';
    });
    dpadUp.addEventListener('touchend', (e) => {
      e.preventDefault();
      e.stopPropagation();
      dpadUp.style.background = '#C1341D';
    });
    
    dpadDown.addEventListener('touchstart', (e) => {
      e.preventDefault();
      e.stopPropagation();
      player.nextDir = DIR.DOWN;
      dpadDown.style.background = '#A02410';
    });
    dpadDown.addEventListener('touchend', (e) => {
      e.preventDefault();
      e.stopPropagation();
      dpadDown.style.background = '#C1341D';
    });
    
    dpadLeft.addEventListener('touchstart', (e) => {
      e.preventDefault();
      e.stopPropagation();
      player.nextDir = DIR.LEFT;
      dpadLeft.style.background = '#A02410';
    });
    dpadLeft.addEventListener('touchend', (e) => {
      e.preventDefault();
      e.stopPropagation();
      dpadLeft.style.background = '#C1341D';
    });
    
    dpadRight.addEventListener('touchstart', (e) => {
      e.preventDefault();
      e.stopPropagation();
      player.nextDir = DIR.RIGHT;
      dpadRight.style.background = '#A02410';
    });
    dpadRight.addEventListener('touchend', (e) => {
      e.preventDefault();
      e.stopPropagation();
      dpadRight.style.background = '#C1341D';
    });
    
    // Also support mouse events for desktop testing
    this.setupMouseListeners(dpadUp, dpadDown, dpadLeft, dpadRight);
  },
  
  setupMouseListeners(dpadUp, dpadDown, dpadLeft, dpadRight) {
    dpadUp.addEventListener('mousedown', () => {
      player.nextDir = DIR.UP;
      dpadUp.style.background = '#A02410';
    });
    dpadUp.addEventListener('mouseup', () => {
      dpadUp.style.background = '#C1341D';
    });
    dpadUp.addEventListener('mouseleave', () => {
      dpadUp.style.background = '#C1341D';
    });
    
    dpadDown.addEventListener('mousedown', () => {
      player.nextDir = DIR.DOWN;
      dpadDown.style.background = '#A02410';
    });
    dpadDown.addEventListener('mouseup', () => {
      dpadDown.style.background = '#C1341D';
    });
    dpadDown.addEventListener('mouseleave', () => {
      dpadDown.style.background = '#C1341D';
    });
    
    dpadLeft.addEventListener('mousedown', () => {
      player.nextDir = DIR.LEFT;
      dpadLeft.style.background = '#A02410';
    });
    dpadLeft.addEventListener('mouseup', () => {
      dpadLeft.style.background = '#C1341D';
    });
    dpadLeft.addEventListener('mouseleave', () => {
      dpadLeft.style.background = '#C1341D';
    });
    
    dpadRight.addEventListener('mousedown', () => {
      player.nextDir = DIR.RIGHT;
      dpadRight.style.background = '#A02410';
    });
    dpadRight.addEventListener('mouseup', () => {
      dpadRight.style.background = '#C1341D';
    });
    dpadRight.addEventListener('mouseleave', () => {
      dpadRight.style.background = '#C1341D';
    });
  }
};
