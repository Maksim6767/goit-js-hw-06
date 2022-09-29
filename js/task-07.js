const fontSizeControl = document.getElementById('font-size-control');
const spanEl = document.getElementById('text');

fontSizeControl.addEventListener("input", (event) => {
    spanEl.style.fontSize = event.currentTarget.value + 'px';
});
console.log(fontSizeControl);

