// TODO: 5.Brickorna måste blandas
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

const renderMemory = (containerId, bricks) => {
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

  // FIXME: skriv om senare
  // loop för att skriva ut brickor
  for (let i = 0; i < brick.tiles.length; i++) {
    // FIXME: bör skrivas om senare
    // event hanterare funktion
    const handleClick = event => {
      // FIXME: skriv om senare
      let img;
      if (event.target.tagName === 'DIV') {
        img = event.target.firstElementChild;
      } else {
        img = event.target;
      }
      const path = `images/${bricks.tiles[i]}.png`;
      img.setAttribute('src', path);
    };
    // lägger in bricka
    const brick = document.importNode(templateDiv.firstElementChild, true);
    // FIXME: bör skrivas om senare
    // event lyssnare för brick
    brick.addEventListener('click', handleClick);
    div.appendChild(brick);
  }
};

const memory = () => {
  // render egenskaper
  const renderOptions = {
    rows: 4,
    columns: 4
  };

  // brick logik
  const bricks = {
    tiles: [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8]
  };

  // container id
  const containerId = 'memory';
  renderMemory(containerId, bricks);
};

export default memory;
