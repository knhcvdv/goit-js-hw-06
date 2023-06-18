const categoriesList = document.querySelector('#categories').children.length;
console.log(`Number of categories: ${categoriesList}`);

const itemsList = document.querySelectorAll(".item");
itemsList.forEach((item)=>{
    console.log("Category:",item.firstElementChild.textContent);
    console.log("Elements:",item.lastElementChild.children.length);
})