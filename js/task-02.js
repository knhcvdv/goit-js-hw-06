const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ulElem = document.querySelector('#ingredients')
const liItemElem = ingredients.map(text => {
  const liElem = document.createElement('li')
  liElem.textContent = text
  liElem.classList.add('item')
  return liElem
})

ulElem.append(...liItemElem)