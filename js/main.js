const showMenu = document.querySelector(".menu")
const menuButton = document.querySelector (".burger")
const timesBtn = document.querySelector(".times")


menuButton.addEventListener("click", () => {
    showMenu.classList.toggle("show-menu");
}
);
timesBtn.addEventListener("click", () => {
    showMenu.classList.toggle("show-menu");
}
);