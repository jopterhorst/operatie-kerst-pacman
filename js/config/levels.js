// Level Configuration (map layouts now in mazes.js)
const LEVEL_CONFIG = {
  1: {
    title: "Opa Gabby's Ronde",
    description: "Help Gabby de weg vinden rond de afdeling.",
    collectibleIcon: "👴",
    collectibleName: "Wandelaars",
    collectibleSprite: drawGabbySprite,
    startTime: 75,
  },
  2: {
    title: "Hoofdzuster Helga",
    description: "Organiseer de afdeling met Helga's gezag.",
    collectibleIcon: "👩‍⚕️",
    collectibleName: "Taken",
    collectibleSprite: drawHelgaSprite,
    startTime: 60,
  },
  3: {
    title: "Dr. Hans Leliveld's Visite",
    description: "Volg Dr. Leliveld op zijn ochtendvisites.",
    collectibleIcon: "👨‍⚕️",
    collectibleName: "Consulten",
    collectibleSprite: drawDrHansSprite,
    startTime: 60,
  },
  4: {
    title: "Floortje's Eerste Dag",
    description: "Help de stagiaire haar weg te vinden.",
    collectibleIcon: "👩‍⚕️",
    collectibleName: "Stagiaires",
    collectibleSprite: drawFloortjeSprite,
    startTime: 70,
  },
  5: {
    title: "Simon van der Meer's Verhaal",
    description: "Help de patiënt zich comfortabel voelen.",
    collectibleIcon: "👨‍🛌",
    collectibleName: "Patiënten",
    collectibleSprite: drawSimonSprite,
    startTime: 80,
  },
  6: {
    title: "Albert Tromp's Avontuur",
    description: "Navigeer met de energieke patiënt.",
    collectibleIcon: "👨‍🛌",
    collectibleName: "Bezoekers",
    collectibleSprite: drawAlbertSprite,
    startTime: 65,
  },
  7: {
    title: "Psycholoog Bovenkamp's Spreekuur",
    description: "Documenteer je bevindingen met Bovenkamp.",
    collectibleIcon: "😐",
    collectibleName: "Sessies",
    collectibleSprite: drawBovenkampSprite,
    startTime: 90,
  },
  8: {
    title: "Trijnie's Bezoek",
    description: "Begeleiding voor Albert's sterke zus.",
    collectibleIcon: "👩",
    collectibleName: "Familie",
    collectibleSprite: drawTrijnieSprite,
    startTime: 70,
  },
  9: {
    title: "Sjonnie's Avond",
    description: "Feest met Albert's beste vriend.",
    collectibleIcon: "🧢",
    collectibleName: "Vrienden",
    collectibleSprite: drawSjonnieSprite,
    startTime: 75,
  },
  10: {
    title: "Gijs' Zoektocht",
    description: "Help Albert's broer de weg vinden.",
    collectibleIcon: "🦋",
    collectibleName: "Familie",
    collectibleSprite: drawGijsSprite,
    startTime: 65,
  },
  11: {
    title: "De Klinisch Clowns",
    description: "Plezier met Plokko en Okko!",
    collectibleIcon: "🤡",
    collectibleName: "Clowns",
    collectibleSprite: drawPlokkoSprite,
    startTime: 90,
  }
};

function getCurrentLevelConfig() {
  return LEVEL_CONFIG[gameState.currentLevel] || LEVEL_CONFIG[1];
}
