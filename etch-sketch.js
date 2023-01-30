/* eslint-disable no-param-reassign */
/* eslint-disable radix */
// Create grid
const masterContainer = document.getElementsByClassName('master-container')[0];

let count = 0;
while (count < 16 * 16) {
  const grid = document.createElement('div');
  masterContainer.appendChild(grid);
  count += 1;
}

const nestedDivs = document.querySelectorAll('.master-container div');
nestedDivs.forEach((div) => {
  // eslint-disable-next-line no-param-reassign
  div.addEventListener('mouseover', () => { div.style.backgroundColor = 'black'; });
});

// Create event for button pressing
const button = document.querySelector('button');

function getDimension(e) {
  if (e !== undefined) {
    const answer = prompt('Please input number n to get a new nxn grid. Number must be less than 100.');
    console.log(parseInt(answer));
    if (typeof parseInt(answer) !== 'number' || Number.isNaN(answer)) {
      throw new Error('Invalid input. You must provide a number.');
    } else if (parseInt(answer) > 100) {
      throw new Error('Invalid input. Input must be less than or equal to 100.');
    } else {
      return parseInt(answer);
    }
  }
  throw new Error('Event is undefined');
}

// Calculate padding
function getPaddingPercentage(n) {
  return (100 - n) / n;
}

function createNewGrid(e) {
  if (e !== undefined) {
    const gridsToDelete = document.querySelectorAll('.master-container div');
    const dimension = getDimension(e);

    gridsToDelete.forEach((grid) => {
      masterContainer.removeChild(grid);
    });

    masterContainer.style.cssText = `grid-template-rows: repeat(${dimension}, 1fr); grid-template-columns: repeat(${dimension}, 1fr);`;

    let gridCount = 0;
    while (gridCount < dimension * dimension) {
      const grid = document.createElement('div');
      grid.style.cssText = `padding: ${getPaddingPercentage(dimension)}%;`;
      masterContainer.appendChild(grid);
      gridCount += 1;
    }
    const cngNestedDivs = document.querySelectorAll('.master-container div');

    // Change color of squares
    cngNestedDivs.forEach((div) => {
      div.addEventListener('mouseover', () => { div.style.backgroundColor = 'black'; });
    });
  } else {
    throw (new Error('The event is undefined'));
  }
}

button.addEventListener('click', createNewGrid);
