# Operatie Kerst 🏥

A festive Pac-Man style maze game set in a Dutch hospital, where you collect characters during your shift!

## About

**Operatie Kerst** is an interactive HTML5 game where you navigate through hospital mazes collecting various healthcare workers and visitors. Each level features a different character with unique pixel art styling. The game is fully Dutch-localized with engaging level descriptions and characters.

## How to Play

- Use **arrow keys** (↑ ↓ ← →) to move your character
- **Collect all characters** visible in each level before time runs out
- Complete each level to advance to the next one
- **12 challenging levels** with increasing difficulty

## Game Features

✨ **12 Unique Levels** with distinct characters and time limits  
🎨 **8-bit Pixel Art** characters with detailed designs  
🇳🇱 **Fully Dutch** - All text, descriptions, and character names in Dutch  
⏱️ **Time-based Gameplay** - Collect before your shift ends  
🎮 **Smooth Movement** - Continuous Pac-Man style movement with direction buffering  
🔄 **Auto-progression** - Automatically advance to next level when complete

## Characters (Levels)

1. **👩‍⚕️ Verpleegsters Dash** - Collect nurses (60 sec)
2. **👴 Opa Gabby's Ronde** - Help the elderly gentleman find his way (75 sec)
3. **👩‍⚕️ Hoofdzuster Helga** - Organize with the head nurse (60 sec)
4. **👨‍⚕️ Dr. Hans Leliveld's Visite** - Follow the doctor's rounds (60 sec)
5. **👩‍⚕️ Floortje's Eerste Dag** - Help the intern find her way (70 sec)
6. **👨‍🛌 Simon van der Meer's Verhaal** - Help the patient feel comfortable (80 sec)
7. **👨‍🛌 Albert Tromp's Avontuur** - Navigate with the energetic patient (65 sec)
8. **😐 Psycholoog Bovenkamp's Spreekuur** - Document sessions (90 sec)
9. **👩 Trijnie's Bezoek** - Guide Albert's strong sister (70 sec)
10. **🧢 Sjonnie's Avond** - Party with Albert's best friend (75 sec)
11. **🦋 Gijs' Zoektocht** - Help Albert's brother find his way (65 sec)
12. **🤡 De Klinisch Clowns** - Have fun with Plokko and Okko! (90 sec)

## Technical Details

**Architecture:**
- Modular JavaScript with separated concerns
- Data-driven level configuration system
- HTML5 Canvas rendering
- Vanilla JavaScript (no dependencies)

**File Structure:**
```
├── index.html              # Main game page
├── styles/main.css         # Game styling
├── js/
│   ├── config/
│   │   ├── constants.js    # Game constants
│   │   └── levels.js       # Level configuration
│   ├── sprites/            # 13 character sprite files
│   ├── core/               # Core game engine modules
│   └── main.js             # Game startup
└── README.md               # This file
```

## Game Controls

| Key | Action |
|-----|--------|
| ↑ Arrow Up | Move up |
| ↓ Arrow Down | Move down |
| ← Arrow Left | Move left |
| → Arrow Right | Move right |

## Running the Game

Simply open `index.html` in any modern web browser. No server or build process required!

## Game Mechanics

- **Movement**: Continuous movement with direction buffering (Pac-Man style)
- **Collision Detection**: Pick up characters by walking over them
- **Maze Navigation**: Navigate through hospital corridors
- **Time Limit**: Each level has a specific time limit
- **Level Progression**: Complete all collectibles to auto-advance
- **HUD**: Real-time display of collected items, time remaining, and current level

## Browser Compatibility

Works on all modern browsers that support HTML5 Canvas:
- Chrome/Chromium
- Firefox
- Safari
- Edge

## License

Created for festive fun! 🎄

## Credits

Designed and developed as a hospital-themed Pac-Man adventure game.
All characters are original pixel art creations.
