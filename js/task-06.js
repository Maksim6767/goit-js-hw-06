const onblur = document.getElementById("validation-input");

onblur.addEventListener("blur", () => {
  if (onblur.value.length < onblur.getAttribute('data-length')) { 
    onblur.classList.remove('valid');
    onblur.classList.add('invalid');
  } else {
    onblur.classList.remove('invalid');
    onblur.classList.add('valid');
  }
});
