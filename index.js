const email = document.querySelector('#email');
email.minLength = '10';

email.addEventListener('input', () => {
    const span = email.closest('.input-holder').querySelector('span');
    if (email.validity.valid) {
        span.textContent = '';
        span.className = '';
    } else {
        showEmailError(span);
    }
});

function showEmailError(span) {
    if (email.validity.valueMissing) {
        span.textContent = 'You need to enter an e-mail address.';
    } else if (email.validity.typeMismatch) {
        span.textContent = 'Entered value needs to be an e-mail address.';
    } else if (email.validity.tooShort) {
        span.textContent = `E-mail should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
    }
    span.className = 'active';
}

const inputName = document.querySelector('#name');
inputName.minLength = '10';

inputName.addEventListener('input', () => {
    const span = inputName.closest('.input-holder').querySelector('span');
    if (inputName.validity.valid) {
        span.textContent = '';
        span.className = '';
    } else {
        showNameError(span);
    }
});

function showNameError(span) {
    if (inputName.validity.valueMissing) {
        span.textContent = 'You need to enter name.';
    } else if (inputName.validity.tooShort) {
        span.textContent = `Name should be at least ${inputName.minLength} characters; you entered ${inputName.value.length}.`;
    }
    span.className = 'active';
}

const password = document.querySelector('#password');
password.minLength = '6';
const repeatPassword = document.querySelector('#repeat-password');
repeatPassword.minLength = '6';

password.addEventListener('input', () => {
    const span = password.closest('.input-holder').querySelector('span');
    if (password.validity.valid) {
        span.textContent = '';
        span.className = '';
    } else {
        showPasswordError(span, password);
    }
});

password.addEventListener('change', () => {
    const span = password.closest('.input-holder').querySelector('span');
    span.textContent = '';
    span.className = '';
});

function showPasswordError(span, password) {
    if (password.validity.valueMissing) {
        span.textContent = 'You need to enter password.';
    } else if (password.validity.tooShort) {
        span.textContent = `Password should be at least ${password.minLength} characters; you entered ${password.value.length}.`;
    }
    span.className = 'active';
}

repeatPassword.addEventListener('input', () => {
    const span = repeatPassword.closest('.input-holder').querySelector('span');
    if (repeatPassword.validity.valid) {
        span.textContent = '';
        span.className = '';
        showPasswordCompatibility(span);
    } else {
        showPasswordError(span, repeatPassword);
    }
});

function showPasswordCompatibility(span) {
    if ((password.value.length >= 6) & (repeatPassword.value.length >= 6)) {
        if (password.value == repeatPassword.value) {
            span.textContent = '';
            span.className = '';
        } else {
            span.textContent = "Passwords don't match!";
            span.className = 'active';
        }
    }
}

repeatPassword.addEventListener('change', () => {
    const span = password.closest('.input-holder').querySelector('span');
    span.textContent = '';
    span.className = '';
});
