
const downCounter = document.querySelector('[data-action="decrement"]')
const upCounter = document.querySelector('[data-action="increment"]')
const spanEl = document.getElementById('value')

let counterValue = 0;

const decrement = () => {
    counterValue -= 1;
    spanEl.textContent = counterValue;
};
downCounter.addEventListener("click", decrement);

const increment = () => {
    counterValue += 1;
    spanEl.textContent = counterValue;
};
upCounter.addEventListener("click", increment);