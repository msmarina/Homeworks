function formValidation() {

}

function validateName(fname) {
    var error = "";
    var illegalChars = /\W/; //allow letters, numbers, and underscores

    if (fname.value == "") {
        fname.style.background = "red";
        error = "You didn't enter a name.\n";
        alert(error);
        return false;
    } else if ((fname.value.length < 5) || (fname.value.length > 12)) {
        fname.style.background = "red";
        error = "The user name is the wrong lenght.\n";
        alert(error);
        return false;
    } else if (illegalChars.test(fname.value)) {
        fname.style.background = "red";
        error = "The user name contains illegal characters. n\";
        alert(error);
        return false;
    } else {
        fname.style.background = "White";
    }
    return true;

}
