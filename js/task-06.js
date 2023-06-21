const userInputElem = document.querySelector('#validation-input');
const lengthOnElem = userInputElem.getAttribute('data-length');

const findLengthOnInputElem = (event) => {
    if (Number(event.currentTarget.value.length) === Number(lengthOnElem)) {
        userInputElem.classList.remove('invalid')
        userInputElem.classList.add('valid');
    } else {
        userInputElem.classList.remove('valid');
        userInputElem.classList.add('invalid');
    }
};

userInputElem.addEventListener('blur', findLengthOnInputElem); 