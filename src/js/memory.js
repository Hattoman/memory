// TODO: 3. Bild på varje brickas framsida.
// TODO: 4. Skriva ut 4x4 brickor.
// TODO: 5. Rutnät, 4 rader, 4 per rad.
// TODO: 6. Tryck på en bricka för att vända den.
// TODO: 7. 2 lika brickor tas bort.
// TODO: 8. 2 olika brickor vänds tillbaka.
// TODO: 9. När 2 brickor vänds ska antalet försök uppdateras.
// TODO: 10. Antalet försök och antalet par ska visas för användaren.
// TODO: 11. Antalet sekunder spelat ska också visas.
// TODO: 12. När spelet är slut ska tiden stoppas.
/* TODO: 13. Det ska enkelt gå att ladda in flera spel,
genom att anropa en funktion flera gånger. */
/* TODO: 14. En enklare dokumentation i README.md som ska vara
skriven i markup språket Markdown. Bör innehålla kortare information
om vad som ligger i respektive fil samt vilka kommandon som ska
köras för att starta utvecklingsserver samt hur man bygger en build. */

const memory = () => {
  const rows = 4;
  const columns = 4;

  // container id
  const containerId = 'memory';

  // container element
  const container = document.getElementById(containerId);
  // template element
  const template = document.querySelector('#memory template');
  // FIXME: ska skrivas om senare.
  // innehållet i template
  const templateDiv = template.content.firstElementChild;
  // endast .memory div
  const div = document.importNode(templateDiv, false);
  // lägg till div i container
  container.appendChild(div);
  // loop för att skriva ut brickor
  for (let i = 0; i < rows * columns; i++) {
    // lägger in bricka
    const brick = document.importNode(templateDiv.firstElementChild, true);
    div.appendChild(brick);
  }
};

export default memory;
