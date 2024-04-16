// function to validate the form in the support page
function validateForm() {
    // checking for valid email, name and message
    const email = document.getElementById("email").value;
    const name = document.getElementById("name").value;    
    const message = document.getElementById("message").value;

    const emailError = document.getElementById("email-error");
    const nameError = document.getElementById("name-error");
    const messageError = document.getElementById("message-error");

    emailError.textContent = "";
    nameError.textContent = "";
    messageError.textContent = "";

    let isValid = true;

    //TODO textcontent colors
    if (email === "" || !email.includes("@")) {
        emailError.textContent = "";
        document.getElementById("email").style.borderColor = "red";
        isValid = false;
    }
    
    if (name === "") {
        nameError.textContent = "";
        document.getElementById("name").style.borderColor = "red";
        isValid = false;
    }

    if (message === "") {
        messageError.textContent = "";
        document.getElementById("message").style.borderColor = "red";
        isValid = false;
    }

    return isValid;
}

function validateBug(){
    // same as above, but for the bug report form (should not be empty)
    const bug = document.getElementById("description").value;
    const bugError = document.getElementById("description");
    bugError.textContent = "";

    let isValid = true;
    if (bug === "") {
        bugError.textContent = "";
        document.getElementById("description").style.borderColor = "red";
        isValid = false;
    }

    return isValid;
}