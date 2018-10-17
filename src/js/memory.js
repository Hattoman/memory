// TODO: 5.Brickorna måste blandas
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

const turnBrick = (bricks, img) => {
  // FIXME: fixa sen
  if (bricks.second !== null) {
    return;
  }
  // FIXME: fixa till sen
  // kolla om en brick redan är vänd
  if (bricks.first === null) {
    bricks.first = img;
  } else {
    bricks.second = img;

    // kolla om vi har ett par
    if (
      bricks.first.getAttribute('src') === bricks.second.getAttribute('src') &&
      bricks.first.parentElement.getAttribute('data-index-number') !==
        bricks.second.parentElement.getAttribute('data-index-number')
    ) {
      // FIXME: skriv om sen
      // göm brickor
      const removeBrick = () => {
        bricks.first.parentElement.classList.add('hidden');
        bricks.second.parentElement.classList.add('hidden');
        // reset brick logik
        bricks.first = null;
        bricks.second = null;
      };
      window.setTimeout(removeBrick, 100);
    } else {
      // FIXME: fixa sen
      const turnBackBrick = () => {
        // sökväg till bilden för baksida
        const path = 'images/0.png';
        // vänd tillbaka brickor
        bricks.first.setAttribute('src', path);
        bricks.second.setAttribute('src', path);
        // reset brick logik
        bricks.first = null;
        bricks.second = null;
      };
      window.setTimeout(turnBackBrick, 500);
    }
  }
};

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
  for (let i = 0; i < bricks.tiles.length; i++) {
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

      // vänd bricka
      turnBrick(bricks, img);
    };

    // lägger in bricka
    const brick = document.importNode(templateDiv.firstElementChild, true);
    // FIXME: bör skrivas om senare
    // event lyssnare för brick
    brick.addEventListener('click', handleClick);
    brick.setAttribute('data-index-number', i);
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
    first: null,
    second: null,
    tiles: [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8]
  };

  // container id
  const containerId = 'memory';
  renderMemory(containerId, bricks);
};

export default memory;
