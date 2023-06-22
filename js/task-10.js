function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controlsContainerEl = document.querySelector('#controls')
const quantityInputEl = document.querySelector('input[type="number"]');
const createButtonEl = document.querySelector('button[data-create]');
const destroyButtonEl = document.querySelector('button[data-destroy]');
const boxesContainerEl = document.querySelector('#boxes');
controlsContainerEl.style.display = 'flex';
controlsContainerEl.style.justifyContent = 'center';
controlsContainerEl.style.gap = '15px';

let boxCount = 0;

const createBoxes = () => {
  boxCount = quantityInputEl.value;
  let boxSize = 30;
  const boxElements = [];
  
  for (let i = 0; i < boxCount; i += 1) {
    boxSize += 10;

    const boxElement = document.createElement('div');
    boxElement.style.height = `${boxSize}px`;
    boxElement.style.width = `${boxSize}px`;
    boxElement.style.backgroundColor = getRandomHexColor();
    boxElement.style.margin = 'auto';
    
    boxElements.push(boxElement);
  }

  boxesContainerEl.append(...boxElements);
};

const destroyBoxes = () => {
  boxesContainerEl.innerHTML = '';
  quantityInputEl.value = '';
}

createButtonEl.addEventListener('click', createBoxes);
destroyButtonEl.addEventListener('click', destroyBoxes);
