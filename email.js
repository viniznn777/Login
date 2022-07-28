let email = document.getElementById('email');
let submitButtonS = document.getElementById('submit');

email.addEventListener('click', () => {
    email.style.height = '45px';
});

submitButtonS.addEventListener('click', () => {
    if (email.value.indexOf('@') === -1 || email.value.indexOf('.com') === -1 || !email.value) {
        email.style.height = '45px';
        email.focus()
        email.style.borderBottom = '3px solid red'
    }
    else {
        email.style.borderBottom = '3px solid green'
    }
})