const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.getElementById('ingredients');
const elements = ingredients.map(ingredient => {
  const liEl = document.createElement('li');
  liEl.textContent = ingredient;
  liEl.classList.add("item");

  return liEl;
})

ingredientsEl.append(...elements);

console.log(elements);