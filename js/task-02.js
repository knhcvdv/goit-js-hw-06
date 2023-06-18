const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ulList = document.querySelector('#ingredients')
const liItemList = ingredients.map(text => {
  const liList = document.createElement('li')
  liList.textContent = text
  liList.classList.add('item')
  return liList
})

ulList.append(...liItemList)