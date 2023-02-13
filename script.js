const toggleButton = document.querySelector('.dee-toggle');
const toggleButtonChild2 = toggleButton.childNodes[3];
const fullNameDiv = document.querySelector('#fullname-div');
let loginTitleText = document.querySelectorAll('.dee-sign-in-message');
let isTextSignIn = toggleButtonChild2.textContent;

//check text in login and form titles
function changeText() {
    if (isTextSignIn == 'sign up') {
        for (let key in loginTitleText) {
            loginTitleText[key].textContent = 'sign in';
        }
    } else {
        loginTitleText.textContent = 'sign up';
    }
}

//handles adding classlists
function addClass(element, className) {
    element.classList.add(className);
}

//handles removing classlists
function removeClass(element, className) {
    element.classList.remove(className)
}

//handles text check for 

/* 
    this changes the state of the sign-in toggle and form title 
*/

toggleButton.addEventListener('click', function() {
    changeText();
    addClass(fullNameDiv, 'tw-hidden');
});