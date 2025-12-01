// Lightweight sound manager using Web Audio API
const sound = {
  context: null,
  unlocked: false,

  init() {
    if (!this.context) {
      this.context = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (this.context.state === "suspended") {
      this.context.resume();
    }
    this.unlocked = true;
  },

  unlockOnInteraction() {
    const unlock = () => {
      sound.init();
      window.removeEventListener('pointerdown', unlock);
      window.removeEventListener('keydown', unlock);
      window.removeEventListener('touchstart', unlock);
    };
    window.addEventListener('pointerdown', unlock);
    window.addEventListener('keydown', unlock);
    window.addEventListener('touchstart', unlock);
  },

  playTone(frequency, duration, type = 'sine', volume = 0.15) {
    if (!this.unlocked) return;
    const ctx = this.context || new (window.AudioContext || window.webkitAudioContext)();
    this.context = ctx;

    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();

    oscillator.type = type;
    oscillator.frequency.value = frequency;
    gainNode.gain.value = volume;

    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);

    oscillator.start();
    oscillator.stop(ctx.currentTime + duration);
  },

  playCollect() {
    this.playTone(880, 0.12, 'triangle', 0.12);
  },

  playLevelComplete() {
    this.playTone(1046, 0.18, 'sawtooth', 0.16);
    setTimeout(() => this.playTone(1318, 0.18, 'sawtooth', 0.14), 120);
  },

  playGhostWarning() {
    this.playTone(320, 0.1, 'square', 0.1);
  },

  playDeath() {
    this.playTone(150, 0.3, 'sawtooth', 0.18);
  }
};

sound.unlockOnInteraction();
