function allowSubmitting() {
    var nonEmpty = true;  // assume that fields are not empty
    var textfields = document.querySelectorAll("input, textarea");

    for (var i = 0; i < textfields.length; i++) {
        if (textfields[i].value === "") {
            nonEmpty = false;
        }
    }

    document.getElementById("form-submit-button").disabled = !nonEmpty;
}

function validateInputs() {
    document.getElementById("form-alerts").innerHTML = '';

    var successMsg = document.createElement("section");
    successMsg.className = "success-msg";
    successMsg.innerText = "Form was successfully submitted.";

    if (validateName() && validateEmail()) {
        document.getElementById("form-alerts").appendChild(successMsg);
    }
}

function validateName() {
    var fullname = document.getElementById("fullname");
    var fullnamePattern = new RegExp("([A-Z][a-z]+)\\s([A-Z][a-z]+)");
    var isValid = fullnamePattern.test(fullname.value);

    var errorMsg = document.createElement("section");
    errorMsg.className = "alert-msg";
    errorMsg.innerText = "Please give full name.";

    if (!isValid) {
        document.getElementById("form-alerts").appendChild(errorMsg);
    }

    return isValid;
}

function validateEmail() {
    var email = document.getElementById("email");
    var emailPattern = new RegExp("([a-z]+\\.?[a-z]+\\@[a-z]+\\.[a-z]+)");
    var isValid = emailPattern.test(email.value);

    var errorMsg = document.createElement("section");
    errorMsg.className = "alert-msg";
    errorMsg.innerText = "Email form is wrong. Please give correct email";

    if (!isValid) {
        document.getElementById("form-alerts").appendChild(errorMsg);
    }

    return isValid;
}