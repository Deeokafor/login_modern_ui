const toggle = document.querySelector('.dee-toggle');
const toggle_child_1 = toggle.childNodes[1];
let sign_in_up = document.querySelectorAll('.dee-sign-in-message');

let is_sign_up = () => {
    if (toggle_child_1.textContent == 'sign in') {
        console.log(`${toggle_child_1}`)
    }
}

//this changes the state of the sign-in toggle and form title
toggle.addEventListener('click', function () {
    //console.log(`${toggle.getAttribute('class')} clicked`);
    for (let key in sign_in) {
        sign_in[key].textContent = 'sign up'
    }
    
    (function () {
        console.log(2 + 2);
    })()
    

    console.log(toggle_child_1);
})