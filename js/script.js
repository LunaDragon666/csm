// Hamburger menu toggle
const hamburgerMenu = document.querySelector(".hamburger-menu");
const navbar = document.querySelector(".nav-menu");

hamburgerMenu.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburgerMenu.classList.toggle("active");
    navbar.classList.toggle("active");
}

//Subscribe form
const subForm = document.querySelector("#subform");
const subMessage = document.querySelector("#subMessage");
const regEmail = document.querySelector("#subfield");
const regError = document.querySelector("#subError");

function passTheForm() {
    let error = false;
 
    if (validateEmail(regEmail.value) === true) {
        regError.style.display = "none";
    } else {
        regError.style.display = "block";
        error = true;
    }
    return error;
 } 

 function submitForm(event) {
    event.preventDefault();
    const regError = passTheForm();

    if(!regError) {
        subMessage.innerHTML = '<div class="sub-message">GO!</div>';
    } 
    subForm.focus();
}

subForm.addEventListener("submit", submitForm);

function length(value, len) {
    if (value.trim().length > len) {
        return true;
    }   else {
        return false;
    }
}

function validateEmail(regEmail) {
    const reg = /\S+@\S+\.\S+/;
    const patternMatches = reg.test(regEmail);
    return patternMatches;
}