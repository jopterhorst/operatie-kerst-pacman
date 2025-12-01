// Game Constants
const TILE_SIZE = 32;
const ROWS = 17;
const COLS = 12;

const TILE_TYPE = {
  WALL: 0,
  PATH: 1,
  COLLECTIBLE: 2,
};

const DIR = {
  NONE:  { r: 0,  c: 0  },
  UP:    { r: -1, c: 0  },
  DOWN:  { r: 1,  c: 0  },
  LEFT:  { r: 0,  c: -1 },
  RIGHT: { r: 0,  c: 1  },
};

const BASE_MOVE_INTERVAL = 0.14; // Base Pac-Man style movement interval
const LEVEL_DURATION = 30; // Duration in seconds for each level
const GHOST_MOVE_INTERVAL = 0.22; // Slower than the player to keep things friendly
const GHOST_TURN_CHANCE = 0.25; // How often ghosts consider changing direction
const GHOST_COLORS = ["#f04b5f", "#6ac8ff", "#ffd166", "#c59cff"]; // Pac-Man inspired

// Get movement interval for current level (speed increases each level)
function getMoveIntervalForLevel(level) {
  const speedBoost = Math.min(level - 1, 8) * 0.01; // Max 8% faster
  return Math.max(0.08, BASE_MOVE_INTERVAL - speedBoost);
}
