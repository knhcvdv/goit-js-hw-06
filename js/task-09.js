function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const changeColorButtonElem = document.querySelector('.change-color');
const colorNameElem = document.querySelector('.color');
const bodyElem = document.querySelector('body');

const handleColorChange = () => {
  colorNameElem.textContent = getRandomHexColor();
  bodyElem.style.backgroundColor = getRandomHexColor();
}

changeColorButtonElem.addEventListener('click', handleColorChange);
