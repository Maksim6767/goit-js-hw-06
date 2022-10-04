const totalCategories = document.querySelectorAll('.item');
console.log(`Number of categories: ${totalCategories.length}`);

const listElements = document.querySelectorAll('#categories>li');

listElements.forEach(el => {

console.log(
`Category: ${el.firstElementChild.textContent}
Elements: ${el.lastElementChild.children.length}`
  );
});

// const totalCategories = document.querySelectorAll('.item');
// console.log(`Number of categories: ${totalCategories.length}`);

// const categoriesArr = [...totalCategories]

// .map(categories => `Category: ${categories.children[0].textContent}
// Elements: ${categories.children[1].children.length}`)
// .join('\n');
// console.log(categoriesArr);