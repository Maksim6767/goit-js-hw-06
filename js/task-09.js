const body = document.querySelector('body');
const spanEl = document.querySelector('.color');
const btnEl = document.querySelector('.change-color');

btnEl.addEventListener("click", getRandomHexColor => {
  const RandomHexColor = getRandomHexColor()
  
  body.style.backgroundColor = RandomHexColor;
  spanEl.textContent = RandomHexColor;

  function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
});


// const body = document.querySelector('body');
// const spanEl = document.querySelector('.color');
// const btnEl = document.querySelector('.change-color');

// btnEl.addEventListener("click", getRandomHexColor => {
//   body.style.backgroundColor = getRandomHexColor();
//   spanEl.textContent = getRandomHexColor();

//   function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }
// });