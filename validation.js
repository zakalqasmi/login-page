const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', validateLoginForm);

function validateLoginForm(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessages = document.getElementById('errorMessages');

    errorMessages.innerHTML = '';

    if (!validateEmail(email)) {
        errorMessages.innerHTML += '<p>Please enter a valid email address.</p>';
        return;
    }

    if (!validatePassword(password)) {
        errorMessages.innerHTML += '<p>Please enter a valid password.</p>';
        return;
    }

    alert('Login successful!');
}

function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

function validatePassword(password) {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);

    return (
        password.length >= minLength &&
        hasUpperCase &&
        hasLowerCase &&
        hasNumber
    );
}
