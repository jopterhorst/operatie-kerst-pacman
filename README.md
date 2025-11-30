# Operatie Kerst 🏥

Een gezellig Pac-Man stijl doolhof spel in een Nederlands ziekenhuis, waar je karakters verzamelt tijdens je dienst!

## Over het spel

**Operatie Kerst** is een interactief HTML5 spel waarbij je door ziekenhuisdoolhoven navigeert om verschillende ziekenhuismedewerkers en bezoekers te verzamelen. Elk niveau bevat een ander karakter met unieke pixel art-stijl. Het spel is volledig Nederlands gelokaliseerd met aantrekkelijke niveaubeschrijvingen en karakters.

## Hoe te spelen

- Gebruik **pijltjestoetsen** (↑ ↓ ← →) om je karakter te bewegen
- **Verzamel alle karakters** in elk niveau voordat de tijd op is
- Voltooi elk niveau om naar het volgende niveau te gaan
- **12 uitdagende niveaus** met toenemende moeilijkheid

## Functies van het spel

✨ **12 unieke niveaus** met verschillende karakters en tijdslimieten  
🎨 **8-bit Pixel Art** karakters met gedetailleerde designs  
🇳🇱 **Volledig Nederlands** - Alle teksten, beschrijvingen en karakternamen in het Nederlands  
⏱️ **Gameplay op basis van tijd** - Verzamel alles voordat je dienst eindigt  
🎮 **Vloeiende beweging** - Doorlopende Pac-Man stijl beweging met richtingsbuffer  
🔄 **Automatische progressie** - Automatisch naar het volgende niveau wanneer voltooid

## Karakters (Niveaus)

1. **👩‍⚕️ Verpleegsters Dash** - Verzamel verpleegsters (60 sec)
2. **👴 Opa Gabby's Ronde** - Help de oude heer zijn weg te vinden (75 sec)
3. **👩‍⚕️ Hoofdzuster Helga** - Organiseer met de hoofdzuster (60 sec)
4. **👨‍⚕️ Dr. Hans Leliveld's Visite** - Volg de doktersronde (60 sec)
5. **👩‍⚕️ Floortje's Eerste Dag** - Help de stagiaire haar weg te vinden (70 sec)
6. **👨‍🛌 Simon van der Meer's Verhaal** - Help de patiënt zich op zijn gemak te voelen (80 sec)
7. **👨‍🛌 Albert Tromp's Avontuur** - Navigeer met de energieke patiënt (65 sec)
8. **😐 Psycholoog Bovenkamp's Spreekuur** - Documenteer sessies (90 sec)
9. **👩 Trijnie's Bezoek** - Begeleid Alberts sterke zus (70 sec)
10. **🧢 Sjonnie's Avond** - Feest met Alberts beste vriend (75 sec)
11. **🦋 Gijs' Zoektocht** - Help Alberts broer zijn weg te vinden (65 sec)
12. **🤡 De Klinisch Clowns** - Veel plezier met Plokko en Okko! (90 sec)

## Technische Details

**Architectuur:**
- Modulair JavaScript met gescheiden verantwoordelijkheden
- Data-gestuurde niveauconfiguratie systeem
- HTML5 Canvas rendering
- Vanilla JavaScript (geen afhankelijkheden)

**Mapstructuur:**
```
├── index.html              # Hoofdpagina spel
├── styles/main.css         # Spelstijl
├── js/
│   ├── config/
│   │   ├── constants.js    # Spelconstanten
│   │   └── levels.js       # Niveauconfiguratie
│   ├── sprites/            # 13 karaktersprite bestanden
│   ├── core/               # Kernspelmotor modules
│   └── main.js             # Spelstartup
└── README.md               # Dit bestand
```

## Spelbesturing

| Toets | Actie |
|-------|-------|
| ↑ Pijl Omhoog | Omhoog bewegen |
| ↓ Pijl Omlaag | Omlaag bewegen |
| ← Pijl Links | Links bewegen |
| → Pijl Rechts | Rechts bewegen |

## Het spel uitvoeren

Open eenvoudig `index.html` in elke moderne webbrowser. Geen server of buildproces vereist!

## Spelmechanica

- **Beweging**: Doorlopende beweging met richtingsbuffer (Pac-Man stijl)
- **Botsingsdetectie**: Verzamel karakters door eroverheen te lopen
- **Doolhofnavigatie**: Navigeer door ziekenhuisgangers
- **Tijdslimiet**: Elk niveau heeft een specifieke tijdslimiet
- **Niveauprogressie**: Voltooi alle verzamelbare items voor automatische vooruitgang
- **HUD**: Real-time weergave van verzamelde items, resterende tijd en huidige niveau

## Browsercompatibiliteit

Werkt op alle moderne browsers die HTML5 Canvas ondersteunen:
- Chrome/Chromium
- Firefox
- Safari
- Edge

## Licentie

Gemaakt voor feestelijk plezier! 🎄

## Dankwoord

Ontworpen en ontwikkeld als een ziekenhuis-themed Pac-Man avontuurspel.
Alle karakters zijn originele pixel art creaties.
