const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirm_password = document.getElementById('password2');


form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
})

function checkInputs() {
    //Get values from inputs
    const usernameValue = username.value.trim();
    const emailValue= email.value.trim();
    const passwordValue = password.value.trim();
    const confirm_passwordValue = confirm_password.value.trim();

    if (usernameValue === ''){
        //show error
        //add error class
        setErrorFor(username, 'Username can not be Blank')
    }else {
        //add success
        setSuccessFor(username)
    }

    if (emailValue === '') {
        setErrorFor(email, 'Email can not be blank')

    }else if(!isEmail(emailValue)){
        setErrorFor(email, 'Email is not Valid')
    }else {
        setSuccessFor(email)
    }

    if(passwordValue=== ''){

        setErrorFor(password, 'Password can not be Blank')
    }else {
        //add success
        setSuccessFor(password)
    }

    if(confirm_passwordValue=== ''){

        setErrorFor(confirm_password, 'Password must be Confirmed')
    }else if(passwordValue !== confirm_passwordValue){

        setErrorFor(confirm_password, 'Password Does not Match')

    }else {
        //add success
        setSuccessFor(confirm_password)
    }

}

function setErrorFor(input, message) {
    const formControl = input.parentElement;//.form-control
    const small = formControl.querySelector('small');
    // add error message inside small

    small.innerText = message;
    //Add error class
    formControl.className = 'form-control error'
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success'
}

function isEmail(email){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}