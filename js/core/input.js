// Input Handling
const keys = { ArrowUp: false, ArrowDown: false, ArrowLeft: false, ArrowRight: false };

window.addEventListener("keydown", (e) => {
  if (e.key in keys) {
    keys[e.key] = true;
    if (e.key === "ArrowUp")    player.nextDir = DIR.UP;
    if (e.key === "ArrowDown")  player.nextDir = DIR.DOWN;
    if (e.key === "ArrowLeft")  player.nextDir = DIR.LEFT;
    if (e.key === "ArrowRight") player.nextDir = DIR.RIGHT;
    e.preventDefault();
  }
});

window.addEventListener("keyup", (e) => {
  if (e.key in keys) {
    keys[e.key] = false;
    e.preventDefault();
  }
});
