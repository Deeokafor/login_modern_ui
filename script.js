const toggleButton = document.querySelector('.dee-toggle');
let toggleButtonText = toggleButton.childNodes[3];
let fullNameDiv = document.querySelector('#fullname-div');
let formTitle = document.getElementById('form-title');

//check text in login and form titles
function changeToggleButtonText() {
    if (toggleButtonText.textContent == 'sign in') {
        toggleButtonText.textContent = 'sign up';
        formTitle.textContent = 'sign up';
        // console.log(`toggle button is ${toggleButtonText.textContent}`);
        return;
    }

    if (toggleButtonText.textContent == 'sign up') {
        toggleButtonText.textContent = 'sign in';
        formTitle.textContent = 'sign in';
        // console.log(`toggle button is ${toggleButtonText.textContent}`);
        return;
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


/* 
    this changes the state of the sign-in toggle and form title 
*/

toggleButton.addEventListener('click', function() {
    changeToggleButtonText();
    console.log(`toggle button clicked`);
});

