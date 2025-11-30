// Game Constants
const TILE_SIZE = 32;
const ROWS = 15;
const COLS = 19;

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

const MOVE_INTERVAL = 0.14; // Pac-Man style movement interval
