# Operatie Kerst - Niveaugids

## Overzicht
Het spel ondersteunt nu 8 speelbare niveaus, elk met een uniek karakter uit het ziekenhuisscenario. De game engine is volledig modulair en data-driven, waardoor het eenvoudig is om nieuwe niveaus toe te voegen of bestaande aan te passen.

## Huidige Niveaus

### Level 1: Verpleegsters Dash 👩‍⚕️
- **Speler**: Gewone verpleegster met badge
- **Collectibles**: Verpleegsters (wit uniform, muts met kruis)
- **Tijdslimiet**: 60 seconden
- **Thema**: Traditionele ziekenhuisdienst

### Level 2: Opa Gabby's Ronde 👴
- **Speler**: Gabby (dementerende oudere)
- **Collectibles**: Gabby sprites (Einstein haar, lichtblauw gewaad, rollator)
- **Tijdslimiet**: 75 seconden (langer, respectvol tempo)
- **Identificatie**: Witte pluizige haarwolk, grijze rollator, bleek gewaad

### Level 3: Hoofdzuster Helga 👩‍⚕️
- **Speler**: Helga (Hoofdzuster)
- **Collectibles**: Helga sprites (scherpe bobkapsel, armen in V-vorm, fluitje)
- **Tijdslimiet**: 60 seconden
- **Identificatie**: Donker bobkapsel, wit uniform, gezaghebbende houding

### Level 4: Dr. Hans Leliveld's Visite 👨‍⚕️
- **Speler**: Dr. Hans Leliveld
- **Collectibles**: Dr. Hans sprites (lange witte jas, klembord, das)
- **Tijdslimiet**: 60 seconden
- **Identificatie**: Lange witte jas, bruin haar, blauwe das, beige klembord

### Level 5: Floortje's Eerste Dag 👩‍⚕️
- **Speler**: Floortje (de stagiaire)
- **Collectibles**: Floortje sprites (blond paardenstaart, groene scrubs, telefoon)
- **Tijdslimiet**: 70 seconden
- **Identificatie**: Blond paardenstaart links, bange ogen, roze telefoon, lichtgroene scrubs

### Level 6: Simon van der Meer's Verhaal 👨‍🛌
- **Speler**: Simon van der Meer (patiënt)
- **Collectibles**: Simon sprites (voorovergebogen, bleek, infuuszak)
- **Tijdslimiet**: 80 seconden (langst - patiënt beweegt langzaam)
- **Identificatie**: Bleek gezicht, blauw gewaad, voorovergebogen houding, infuuszak

### Level 7: Albert Tromp's Avontuur 👨‍🛌
- **Speler**: Albert Tromp (energieke patiënt)
- **Collectibles**: Albert sprites (rood/oranje warrig haar, snor, rechtop)
- **Tijdslimiet**: 65 seconden
- **Identificatie**: Oranje/rood warrig haar, opvallende snor, bredere sprite, intense ogen

### Level 8: Psycholoog Bovenkamp's Spreekuur 😐
- **Speler**: Psycholoog Bovenkamp
- **Collectibles**: Bovenkamp sprites (bril, sweater, notitieblok)
- **Tijdslimiet**: 90 seconden (langst - contemplatief)
- **Identificatie**: Zwarte bril (opvallend kenmerk), donkerblauwe sweater, bruine broek, wit notitieblok

## Hoe een nieuw niveau toe te voegen

Het spel gebruikt een gecentraliseerd `LEVEL_CONFIG` object. Om een nieuw niveau toe te voegen:

1. **Maak sprite functies** (voorbeeld voor nieuw karakter "Trijnie"):
```javascript
function drawTrinjieSprite(x, y) {
  const px = (n) => Math.round(n);
  // Teken collectible sprite hier
}

function drawPlayerTrijnie() {
  const x = player.col * TILE_SIZE;
  const y = player.row * TILE_SIZE;
  const px = (n) => Math.round(n);
  // Teken speler sprite hier
}
```

2. **Voeg niveauconfiguratie toe** aan `LEVEL_CONFIG`:
```javascript
9: {
  title: "Trijnie's Taak",
  description: "Help de zus de afdeling organiseren.",
  collectibleIcon: "👩",
  collectibleName: "Taken",
  playerSprite: drawPlayerTrijnie,
  collectibleSprite: drawTrinjieSprite,
  startTime: 70,
  map: [
    // Kopieer doolhof van bestaand niveau en pas naar behoefte aan
  ]
}
```

3. **Pas de kaart aan** indien gewenst (zelfde structuur als bestaande niveaus)

## Architectuur

### Niveauconfiguratie Structuur
```javascript
{
  title: string                    // Niveautitel voor UI
  description: string              // Niveaubeschrijving voor UI
  collectibleIcon: emoji            // Emoji getoond in HUD
  collectibleName: string           // Algemene naam voor collectibles
  playerSprite: function            // Functiereferentie voor speler tekenen
  collectibleSprite: function       // Functiereferentie voor collectible tekenen
  startTime: number                 // Starttijd in seconden
  map: 2D array                     // 15x19 raster (0=muur, 1=pad, 2=collectible)
}
```

### Sprite Tekenrichtlijnen

**Gebruikte Kleurenpalet**:
- Huidskleur: #F5D5B8, #F5E6D3, #D4A574, #F0E6D2
- Ziekenhuiswit: #FFFFFF, #FFF1DD, #FAF7EF
- Accentkleuren: #C1341D (rood), #1E90FF (blauw), #FFD700 (goud)
- Haarkleur: Verschillende bruinen en natuurlijke tinten
- Kleding: Context-specifieke kleuren

**Positionering** (alle sprites passen in 32x32 tegels):
- Hoofd meestal: y + 4 tot y + 14
- Lichaam/uniform: y + 10 tot y + 28
- Benen/voeten: y + 26 tot y + 32
- Links/rechts plaatsing: x + 6 tot x + 26

**Speler Varianten**:
- Collectible sprites tonen basisuiterlijk
- Speler sprites kunnen ogen/kleuren variaties hebben ter onderscheid
- Voorbeeld: Floortje's bange ogen (zwart) vs. zelfverzekerde ogen (blauw)

## Game Mechanics (Ongewijzigd)

- **Beweging**: Pac-Man stijl continue beweging met richting buffering
- **Besturing**: Pijltjestoetsen
- **Wincondities**: Verzamel alle zichtbare collectibles op de kaart
- **Verliesconditie**: Tijd loopt af voor alle collectibles verzameld
- **Tegel Grootte**: 32x32 pixels
- **Raster**: 19 kolommen × 15 rijen

## Ontwikkelingsopmerkingen

- Sprite functies gebruiken `ctx.fillStyle` en `ctx.fillRect()` voor pixel-art rendering
- De `px()` functie rondt coördinaten af om sub-pixel rendering te voorkomen
- Spelerpositie wordt benaderd via `player.row` en `player.col`
- Collectible sprites ontvangen rechtstreeks tegel coördinaten (x, y)
- Dezelfde kaart kan voor meerdere niveaus hergebruikt worden met verschillende karakters
