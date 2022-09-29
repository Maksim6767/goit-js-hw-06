
const downCounter = document.querySelector('[data-action="decrement"]');
const upCounter = document.querySelector('[data-action="increment"]');
const spanEl = document.getElementById('value');

let counterValue = 0;

downCounter.addEventListener ("click", () => {
    counterValue -= 1;
    spanEl.textContent = counterValue;
});

upCounter.addEventListener ("click", () => {
    counterValue += 1;
    spanEl.textContent = counterValue;
});