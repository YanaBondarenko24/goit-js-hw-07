const list = document.querySelector('#categories');
const items = document.querySelectorAll('.item');
const nextList = list.querySelectorAll('ul');
const text = list.querySelectorAll('h2');




console.log(`Number of categories: ${items.length}`)

nextList.forEach((elem, index) => {
console.log(`Category: ${text[index].textContent}
Elements: ${elem.children.length}`);

})
  