function clearErrors() {
    let errors = document.getElementsByClassName('formerror');
    for (let item of errors) {
        item.innerHTML = "";
    }
}

function seterror(id, error) {
    // sets error inside tag of id
    let element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;
}

function validateform() {
    let returnval = true;
    clearErrors();

    // Validate name
    let name = document.forms['myform']['fname'].value;
    if (name.length < 5) {
        seterror('name', '*Name must be at least 5 characters long');
        returnval = false;
    }

    // Validate email
    let email = document.forms['myform']['femail'].value;
    if (email.length > 50) {
        seterror('email', '*Email length is too long');
        returnval = false;
    }

    // Validate phone
    let phone = document.forms['myform']['fphone'].value;
    if (phone.length != 10) {
        seterror('phone', '*Phone number should be of 10 digits');
        returnval = false;
    }

    // Validate password
    let password = document.forms['myform']['fpass'].value;
    if (password.length < 6) {
        seterror('pass', '*Password should be at least 6 characters long');
        returnval = false;
    }

    // Validate confirm password
    let cpassword = document.forms['myform']['fcpass'].value;
    if (cpassword != password) {
        seterror('cpass', '*Passwords do not match');
        returnval = false;
    }

    return returnval;
}
