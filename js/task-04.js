
const button = {
downCounter: document.querySelector('[data-action="decrement"]'),
upCounter: document.querySelector('[data-action="increment"]'),
spanEl: document.getElementById('value'),
}

let counterValue = 0;

const decrement = () => {
    counterValue -= 1;
    button.spanEl.textContent = counterValue;
};
button.downCounter.addEventListener("click", decrement);

const increment = () => {
    counterValue += 1;
    button.spanEl.textContent = counterValue;
};
button.upCounter.addEventListener("click", increment);

