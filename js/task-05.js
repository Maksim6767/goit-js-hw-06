const textInputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

textInputEl.addEventListener('input', (event) => {
    if (textInputEl.value === '') {
        outputEl.innerHTML = 'Anonymous';
    } else {
        outputEl.textContent = event.currentTarget.value;
    }
});

