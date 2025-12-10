const name=document.getElementById("name");
const email=document.getElementById("email");
const password=document.getElementById("password")
const form=document.getElementById("form")
const error = document.getElementById("error");

form.addEventListener("submit", function(e) {
e.preventDefault();
let nameValue = name.value.trim();
let emailValue = email.value.trim();
let passwordValue = password.value;
 // Check empty
    if (nameValue === "" || emailValue === "" || passwordValue === "") {
        error.innerText = "All fields are required!";
        error.style.color = "rgba(255, 0, 0, 1)";
        return;
    }

    // Email validation
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!emailValue.match(emailPattern)) {
        error.innerText = "Please enter a valid email!";
        error.style.color = "rgba(255, 0, 0, 1)";
        return;
    }

    // Password length
    if (passwordValue.length < 6) {
        error.innerText = "Password must be at least 6 characters!";
        error.style.color = "rgba(255, 0, 0, 1)";
        return;
    }
    error.style.color = "rgba(255, 0, 0, 1)";
    error.innerText = "Form submitted successfully!";
});