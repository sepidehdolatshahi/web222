function validateForm(isreset = false) {
    let valid = true;
    const firstlettercap = new RegExp("[A-Z][a-zA-Z]*");
    const lastlettercap = new RegExp("[A-Z][a-zA-Z]*");
    const passwordvalidation = new RegExp(/^[A-Za-z](?=.*[A-Z])(?=.*\d).{5,}$/);
    const usernamevalidation = new RegExp(/^[A-Za-z].{5,}$/);
    let firstname = document.forms["signup"]["firstName"].value;
    const firstNameerr = document.getElementById('firstName-err');
    if (!firstlettercap.test(firstname) && !isreset) {
        firstNameerr.innerText = 'firstname format error';
        valid = false;
    }
    else {
        firstNameerr.innerText = '';
    }
    let lastname = document.forms["signup"]["lastname"].value;
    const lastNameerr = document.getElementById('lastName-err');
    if (!lastlettercap.test(lastname) && !isreset) {
        lastNameerr.innerText = 'lastname format error';
        valid = false;
    }
    else {
        lastNameerr.innerText = '';
    }

    let age = document.forms["signup"]["age"].value;
    const ageerr = document.getElementById('age-err');
    if (!(age >= 18 && age <= 90) && !isreset) {
        ageerr.innerText = 'age format error';
        valid = false;
    }
    else {
        ageerr.innerText = '';
    }
    let password = document.forms["signup"]["password"].value;
    const passerr = document.getElementById('pass-err');
    if (!passwordvalidation.test(password) && !isreset) {
        passerr.innerText = 'pass format error';
        valid = false;
    }
    else {
        passerr.innerText = '';
    }
    let rePassword = document.forms["signup"]["repassword"].value;
    const repasserr = document.getElementById('repass-err');
    if (rePassword != password && !isreset) {
        repasserr.innerText = 'repass format error';
        valid = false;
    }
    else {
        repasserr.innerText = '';
    }
    let username = document.forms["signup"]["userName"].value;
    const usernameserr = document.getElementById('username-err');
    if (!usernamevalidation.test(username) && !isreset) {
        usernameserr.innerText = 'username format error';
        valid = false;
    }
    else {
        usernameserr.innerText = '';
    }
    return valid;
}