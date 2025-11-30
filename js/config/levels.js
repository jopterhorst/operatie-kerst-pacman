// Level Configuration (map layouts now in mazes.js)
const LEVEL_CONFIG = {
  1: {
    characterName: "Gabby",
    title: "Opa Gabby's Ronde",
    description: "Help Gabby de weg vinden rond de afdeling.",
    collectibleIcon: "👴",
    collectibleName: "Wandelaars",
    collectibleSprite: drawGabbySprite,
  },
  2: {
    characterName: "Hoofdzuster Helga",
    title: "Hoofdzuster Helga",
    description: "Organiseer de afdeling met Helga's gezag.",
    collectibleIcon: "👩‍⚕️",
    collectibleName: "Taken",
    collectibleSprite: drawHelgaSprite,
  },
  3: {
    characterName: "Dr. Hans Leliveld",
    title: "Dr. Hans Leliveld's Visite",
    description: "Volg Dr. Leliveld op zijn ochtendvisites.",
    collectibleIcon: "👨‍⚕️",
    collectibleName: "Consulten",
    collectibleSprite: drawDrHansSprite,
  },
  4: {
    characterName: "Floortje",
    title: "Floortje's Eerste Dag",
    description: "Help de stagiaire haar weg te vinden.",
    collectibleIcon: "👩‍⚕️",
    collectibleName: "Stagiaires",
    collectibleSprite: drawFloortjeSprite,
  },
  5: {
    characterName: "Simon van der Meer",
    title: "Simon van der Meer's Verhaal",
    description: "Help de patiënt zich comfortabel voelen.",
    collectibleIcon: "👨‍🛌",
    collectibleName: "Patiënten",
    collectibleSprite: drawSimonSprite,
  },
  6: {
    characterName: "Albert Tromp",
    title: "Albert Tromp's Avontuur",
    description: "Navigeer met de energieke patiënt.",
    collectibleIcon: "👨‍🛌",
    collectibleName: "Bezoekers",
    collectibleSprite: drawAlbertSprite,
  },
  7: {
    characterName: "Psycholoog Bovenkamp",
    title: "Psycholoog Bovenkamp's Spreekuur",
    description: "Documenteer je bevindingen met Bovenkamp.",
    collectibleIcon: "😐",
    collectibleName: "Sessies",
    collectibleSprite: drawBovenkampSprite,
  },
  8: {
    characterName: "Trijnie",
    title: "Trijnie's Bezoek",
    description: "Begeleiding voor Albert's sterke zus.",
    collectibleIcon: "👩",
    collectibleName: "Familie",
    collectibleSprite: drawTrijnieSprite,
  },
  9: {
    characterName: "Sjonnie",
    title: "Sjonnie's Avond",
    description: "Feest met Albert's beste vriend.",
    collectibleIcon: "🧢",
    collectibleName: "Vrienden",
    collectibleSprite: drawSjonnieSprite,
  },
  10: {
    characterName: "Gijs",
    title: "Gijs' Zoektocht",
    description: "Help Albert's broer de weg vinden.",
    collectibleIcon: "🦋",
    collectibleName: "Familie",
    collectibleSprite: drawGijsSprite,
  },
  11: {
    characterName: "Plokko & Okko",
    title: "De Klinisch Clowns",
    description: "Plezier met Plokko en Okko!",
    collectibleIcon: "🤡",
    collectibleName: "Clowns",
    collectibleSprite: drawPlokkoSprite,
  }
};

function getCurrentLevelConfig() {
  return LEVEL_CONFIG[gameState.currentLevel] || LEVEL_CONFIG[1];
}
