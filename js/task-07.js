const fontSizeRangeElem = document.querySelector('#font-size-control');
const textElem = document.querySelector('#text');

const updateFontSize = event =>
textElem.style.fontSize = `${event.currentTarget.value}px`;

fontSizeRangeElem.addEventListener('input', updateFontSize);