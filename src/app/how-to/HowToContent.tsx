export const howToContent = {
    title: "Sådan bruger du værktøjet",
    tabs: {
      oprettelse: {
        label: "Oprettelse af bemærkninger",
        emoji: "📝",
        title: "",
        content: `
## Opsummering og sammenligning af bemærkninger

For at opsummere og sammenligne bemærkninger, skal du først uploade de dokumenter, du ønsker at sammenligne. Dette kan være i form af en pdf, docx eller email.

### Upload af dokumenter

1. Klik på "Upload" knappen
2. Vælg de dokumenter, du vil analysere
3. Vent på at uploadet er færdigt

### Tilføj nøgleord og temaer

Når dokumenterne er uploadet, kan du tilføje nøgleord som modellen skal bruge til at fokusere sin opsummering. Desto mere præcise nøgleord, desto bedre vil opsummeringen være.

Du kan også tilføje temaer, som modellen skal bruge til at klassificere bemærkningerne. Sørg for at de er adskilt af komma.

Når du er klar, tryk på 'Start opsummering' knappen for at få dine opsummeringer.

Programmet vil i første omgang lave en opsummering per dokument og derefter en sammenligning af de forskellige opsummeringer. Dette vil give dig et overblik over de vigtigste punkter i de forskellige dokumenter.
      `
      },
      søg: {
        label: "Søg dokumenter",
        emoji: "🔍",
        title: "",
        content: `
For at søge på lovforslag eller lovgivninger, skal du først vælge hvilken kilde, du ønsker at bruge:

### Lovgivning
Her søges i bekendtgørelser fra Retsinformation.dk. Når du søger på lovgivningen, har du et par valgmugligheder:
1. Retriever Type: Definere måden dokumenterne hentes ind på. Brug son udgangspunkt "base\”, men udforsk også gerne de andre. For mere baggrund i de forskellige retriver typer, hold musen ovenpå spørgsmålstegnet inde på siden, du søger.
2. Lov Titel: Valgfrit kan du vælge en lovtitel at søge i. Den liste af lovtitler, der fremgår her, er desuden de bekendtgørelser, der er inkluderet indtil videre. Ved specificiering af denne indsnævres søgning og vil oftest forbedre søgeresultaterne.

### Lovforslag
Her søges i lovforslag fra folketingets hjemmeside. Ulig for lovgivning, så er der ikke nogen valgmuligheder for lovforslag, der kan indsnævre søgekriterierne. Disse kan tilføjes, hvis det ønskes

For begge søgetyper skal der defineres et "spørgsmål" (det behøver ikke decideret være et spørgsmål), som man søger på. Desto tættere dette spørgsmål er på det, der aktuelt fremgår i de dokumenter, du søger efter, desto bedre. Prøv derfor gerne forskellige spørgsmål af.
      `
      }
    }
  };