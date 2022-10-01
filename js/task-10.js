const createEl = document.querySelector('[data-create]');
const destroyEl = document.querySelector('[data-destroy]');
const boxes = document.getElementById("boxes");

createEl.addEventListener("click", getAmount => {
  const amount = document.querySelector("#controls input").value;
  createBoxes(amount);
});

function createBoxes(amount) {
  const basicSize = 30;
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < amount; i += 1) {
    let size = basicSize + i * 10;
    const div = document.createElement("div");
    div.style.width = String(30 + 10 * i) + 'px';
    div.style.height = String(30 + 10 * i) + 'px';
    div.style.backgroundColor = getRandomHexColor();
    fragment.append(div);
  }
  boxes.append(fragment);
};

destroyEl.addEventListener("click", destroyBoxes => {
  boxes.innerHTML = "";
});
  
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};
