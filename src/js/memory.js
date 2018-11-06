import getMixedNumberArray from './helpers';

const timer = score => {
  const timeEL = document.getElementById('time');
  // FIXME: fixa sen
  const t = window.setInterval(() => {
    const currentTime = Date.now();
    score.time = Math.round((currentTime - score.startTime) / 1000);
    timeEL.textContent = score.time;
  }, 1000);
  return t;
};

const turnBrick = (bricks, img, score, renderOptions, t) => {
  const triesEl = document.getElementById('tries');
  const pairsEl = document.getElementById('pairs');
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
        // FIXME: fixa sen
        score.pairs += 1;
        score.tries += 1;
        pairsEl.textContent = score.pairs;
        triesEl.textCOntent = score.tries;
        // reset brick logik
        bricks.first = null;
        bricks.second = null;
        if ((renderOptions.rows * renderOptions.columns) / 2 === score.pairs) {
          const msgEl = document.getElementById('win-message');
          clearInterval(t);
          msgEl.textContent = `Grattis! Du vann efter ${score.tries} försök och
          fick ${score.pairs} par på ${score.time} sekunder.`;
        }
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
        // FIXME: fixa sen
        score.tries += 1;
        triesEl.textContent = score.tries;
        // reset brick logik
        bricks.first = null;
        bricks.second = null;
      };
      window.setTimeout(turnBackBrick, 500);
    }
  }
};

const renderMemory = (containerId, bricks, score, renderOptions) => {
  // container element
  const container = document.getElementById(containerId);
  // template element
  const template = document.querySelector('#memory template');
  // FIXME: ska skrivas om senare.
  // innehållet i template
  const templateDiv = template.content.querySelector('.memory');
  const headerDiv = template.content.getElementById('header');
  // endast .memory div
  const div = document.importNode(templateDiv, false);
  const header = document.importNode(headerDiv, true);
  // lägg till div i container
  div.appendChild(header);
  container.appendChild(div);
  const t = timer(score);

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
      turnBrick(bricks, img, score, renderOptions, t);
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
    tiles: getMixedNumberArray((renderOptions.rows * renderOptions.columns) / 2)
  };

  const score = {
    tries: 0,
    pairs: 0,
    time: 0,
    startTime: Date.now()
  };

  // container id
  const containerId = 'memory';
  renderMemory(containerId, bricks, score, renderOptions);
};

export default memory;
