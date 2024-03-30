const title = document.getElementById("title");
const nameField = document.getElementById("nameField");
const signInBtn = document.getElementById("signInBtn");
const signUpBtn = document.getElementById("signUpBtn");

signUpBtn.onclick = function () {
    title.innerHTML = "Signup";
    nameField.style.display = "block";
};

signInBtn.onclick = function () {
    title.innerHTML = "Login";
    nameField.style.display = "none";
};