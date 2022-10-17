const usernameEl = document.querySelector('#firstname');
const middleName = document.querySelector('#middlenane');
const lastName = document.querySelector('#lastnane');
const form = document.querySelector('#signup');

form.addEventListener('submit', function (e) {
    // prevent the form from submitting
    e.preventDefault();

});
const isRequired = value => value === '' ? false : true;

const isBetween = (length, min, max) => length < min || length > max ? false : true;
const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

const showError = (input, message) => {
    // get the form-field element
    const formField = input.parentElement;
    // add the error class
    formField.classList.remove('success');
    formField.classList.add('error');

    // show the error message
    const error = formField.querySelector('small');
    error.textContent = message;
};

const formField = input.parentElement;
formField.classList.remove('success');
formField.classList.add('error');
const error = formField.querySelector('small');
error.textContent = message;

const showSuccess = (input) => {
    // get the form-field element
    const formField = input.parentElement;

    // remove the error class
    formField.classList.remove('error');
    formField.classList.add('success');

    // hide the error message
    const error = formField.querySelector('small');
    error.textContent = '';
}

const checkfirstName = () => {

    let valid = false;
    const min = 3,
        max = 25;
    const firstname = usernameEl.value.trim();

    if (!isRequired(username)) {
        showError(usernameEl, 'Username cannot be blank.');
    } else if (!isBetween(username.length, min, max)) {
        showError(usernameEl, `Username must be between ${min} and ${max} characters.`)
    } else {
        showSuccess(usernameEl);
        valid = true;
    }
    return valid;
}
const checkEmail = () => {
    let valid = false;
    const email = email.value.trim();
    if (!isRequired(email)) {
        showError(email, 'Email cannot be blank.');
    } else if (!isEmailValid(email)) {
        showError(email, 'Email is not valid.')
    } else {
        showSuccess(email);
        valid = true;
    }
    return valid;
}

form.addEventListener('submit', function (e) {
    // prevent the form from submitting
    e.preventDefault();

    // validate forms
    let isFirstnameValid = checkfirstName(),
        isEmailValid = checkEmail();
      

    let isFormValid = isUsernameValid &&
        isEmailValid 
        

    // submit to the server if the form is valid
    if (isFormValid) {

    }
});

form.addEventListener('input', function (e) {
    switch (e.target.id) {
        case 'username':
            checkfirstName();
            break;
        case 'email':
            checkEmail();
            break;
        
    }
});