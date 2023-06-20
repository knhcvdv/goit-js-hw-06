const counterValueElem = document.querySelector('#value');
const btnDecrementElem = document.querySelector('button[data-action="decrement"]');
const btnIncrementElem = document.querySelector('button[data-action="increment"]');
let counterValue = 0;


const onClickIncrement = () => {
        counterValue += 1;
    counterValueElem.textContent = counterValue;
};

const onClickDecrement = () => {
        counterValue -= 1;
        counterValueElem.textContent = counterValue
};


btnDecrementElem.addEventListener("click", onClickDecrement);
btnIncrementElem.addEventListener('click', onClickIncrement);
