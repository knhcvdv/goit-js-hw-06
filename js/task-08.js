const loginFormElem = document.querySelector('.login-form');
const emailInputElem = document.querySelector('input[name="email"]');
const passwordInputElem = document.querySelector('input[name="password"]');

const handleSubmit = event => {
    event.preventDefault();
    const { email, password } = event.currentTarget.elements;
    if (emailInputElem.value === '' || passwordInputElem.value === '') {
        alert('Please fill in all fields');
    } else {
        const user = {
            email: email.value,
            password: password.value,
        };
        console.log(user);
        event.currentTarget.reset();
    }
}

loginFormElem.addEventListener('submit', handleSubmit);
