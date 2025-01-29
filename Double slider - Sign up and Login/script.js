const loginButton = document.getElementById("login");
const registerButton = document.getElementById("register");
const container = document.querySelector(".container");

registerButton.addEventListener("click", () => {
    container.classList.add("right-panel-active");
});

loginButton.addEventListener("click", () => {
    container.classList.remove("right-panel-active");
});

