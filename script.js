const toggleButton = document.querySelector('.dee-toggle');
let submitButton = document.getElementById('submit-button');
let toggleButtonHead = toggleButton.childNodes[1];
let toggleButtonText = toggleButton.childNodes[3];
let formTitle = document.getElementById('form-title');
let fullNameDiv = document.querySelector('#fullname-div');
let termsOfServiceDiv = document.getElementById('terms-of-service');
let form = document.getElementById('form');


//check text in login and form titles
function changeToggleButtonText() {
    //changes text to sign up
    if (toggleButtonText.textContent == 'sign in') {
        toggleButtonText.textContent = 'sign up';
        formTitle.textContent = 'sign up'; 
        removeClass(fullNameDiv, 'tw-hidden');
        removeClass(toggleButtonHead, 'tw-order-2');
        removeClass(toggleButton, 'tw-pr-0');
        removeClass(toggleButton, 'tw-pl-');
        removeClass(toggleButton, 'tw-justify-end');
        removeClass(termsOfServiceDiv, 'tw-hidden');
        // console.log(`toggle button is ${toggleButtonText.textContent}`);
        return;
    }

    //changes text to sign in
    if (toggleButtonText.textContent == 'sign up') {
        toggleButtonText.textContent = 'sign in';
        formTitle.textContent = 'sign in';
        addClass(fullNameDiv, 'tw-hidden');
        addClass(toggleButtonHead, 'tw-order-2');
        addClass(toggleButton, 'tw-pr-0');
        addClass(toggleButton, 'tw-pl-');
        addClass(toggleButton, 'tw-justify-end');
        addClass(termsOfServiceDiv, 'tw-hidden');
        addClass(form, 'dee-opacity-fade-n-out-in');
        // console.log(`toggle button is ${toggleButtonText.textContent}`);
        return;
    }
}

//handles adding predefined css classes to an element's classlists
function addClass(element, className) {
    return element.classList.add(className);
}

//handles removing predefined css classes from an element's classlists
function removeClass(element, className) {
    return element.classList.remove(className)
}

//changes the textcontent of the toggle button and form title
toggleButton.addEventListener('click', function() {
    changeToggleButtonText();
    console.log(`toggle button clicked`);
});

submitButton.addEventListener('click', function (event) {
    event.preventDefault();
});

