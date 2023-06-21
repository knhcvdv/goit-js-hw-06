const categoriesElem = document.querySelector('#categories').children.length;
console.log(`Number of categories: ${categoriesElem}`);

const itemsElem = document.querySelectorAll(".item");
itemsElem.forEach((item)=>{
    console.log("Category:",item.firstElementChild.textContent);
    console.log("Elements:",item.lastElementChild.children.length);
}) 