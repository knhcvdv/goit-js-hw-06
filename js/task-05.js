const inputElem = document.querySelector('#name-input');
const outputElem = document.querySelector('#name-output');

const onOutputElem = event => {
    if (event.currentTarget.value !== '') {
        outputElem.textContent = event.currentTarget.value;
        } else {
            outputElem.textContent = 'Anonymous';
        }
    };
inputElem.addEventListener('input', onOutputElem);
