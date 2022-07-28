let user = document.getElementById('user');
let pass = document.getElementById('pass');
let paragraph = document.getElementById('notAccount');
let submitButton = document.getElementById('submit');

// ----------------------------------------------OPEN INPUT BY CLICK----------------------------------------------- //
user.addEventListener('click', () => {
    user.style.height = '45px';
});
pass.addEventListener('click', () => {
    pass.style.height = '45px';
});
// -----------------------------------------------TYPING ANIMATION----------------------------------------------- //
function Typing(id) {
    const TextList = id.innerHTML.split('');
    id.innerHTML = '';
    TextList.forEach((letter, i) => {
        setTimeout(function() {
            id.innerHTML += letter;
        }, 65 * i);
    });
};

Typing(paragraph);

// -----------------------------------------------INPUT VALIDATION----------------------------------------------- //

submitButton.addEventListener('click', () => {
    if (!user.value) {
        user.style.height = '45px'
        user.focus()
        user.style.borderBottom = '3px solid red';
    }
    else {
        if (user.value.length >= 5) {
            user.style.borderBottom = '3px solid green';
        }
        else if (user.value.length < 5) {
            user.style.borderBottom = '3px solid red';
        };
    };
    if (!pass.value) {
        pass.style.height = '45px';
        pass.focus();
        pass.style.borderBottom = '3px solid red';
    }
    else {
        if (pass.value.length >= 5) {
            pass.style.borderBottom = '3px solid green';
        }
        else if (pass.value.length < 5) {
            pass.style.borderBottom = '3px solid red';
        };
    }// fazer uma validação através de uma variável com valor FALSE
})