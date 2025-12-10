const name=document.getElementById("name");
const email=document.getElementById("email");
const password=document.getElementById("password")
const form=document.getElementById("form")
// const error = document.getElementById("error");

const errorName = document.getElementById("errorName");
const erroremail = document.getElementById("erroremail");
const errorpasswod = document.getElementById("errorpasswod");
form.addEventListener("submit", function(e) {
    e.preventDefault();

    // Saare previous messages clear kar do
    errorName.innerText = "";
    erroremail.innerText = "";
    errorpasswod.innerText = "";

    let nameValue = name.value;
    let emailValue = email.value;
    let passwordValue = password.value;

    let hasError = false;  // Track karega koi error hai ya nahi

    // Name check
    if (nameValue === "") {
        errorName.innerText = "Please enter your name!";
        errorName.style.color = "red";
        hasError = true;
    }

    // Email check
    if (emailValue === "") {
        erroremail.innerText = "Please enter your email!";
        erroremail.style.color = "red";
        hasError = true;
    } else {
        let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!emailValue.match(emailPattern)) {
            erroremail.innerText = "Please enter a valid email!";
            erroremail.style.color = "red";
            hasError = true;
        }
    }

    // Password check
    if (passwordValue === "") {
        errorpasswod.innerText = "Password is required!";
        errorpasswod.style.color = "red";
        hasError = true;
    } else if (passwordValue.length < 6) {
        errorpasswod.innerText = "Password must be at least 6 characters!";
        errorpasswod.style.color = "red";
        hasError = true;
    }

    // Agar error hai to return karo
    if (hasError) return;

    // Success
    alert("Form submitted successfully!");
});
