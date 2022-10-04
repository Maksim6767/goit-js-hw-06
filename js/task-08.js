const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);
    
function onFormSubmit(event) {
    event.preventDefault();
    
    const { elements: { email, password } } = event.currentTarget;
    
    if (email.value === "" || password.value === "") {
        return alert("Please, fill in all the fields!");
    } 
    
    const userData = { email: email.value, Password: password.value };
    console.log(userData);
    
    event.currentTarget.reset();
}


// const form = document.querySelector(".login-form");

// form.addEventListener("submit", onFormSubmit);
    
// function onFormSubmit(event) {
//     event.preventDefault();
    
//     const { elements: { email, password } } = event.currentTarget;
    
//     if (email.value === "" || password.value === "") {
//         return alert("Please, fill in all the fields!");
//     } 
        
//     console.log(`Login: ${email.value}, Password: ${password.value}`);
//     event.currentTarget.reset();
// }
