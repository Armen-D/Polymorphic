let burger = document.getElementById("burger-menu");
let sidebar = document.querySelector(".mobile-bar")
let closeMenu = document.querySelector(".icon-cross")
burger.addEventListener("click", () => {
    sidebar.classList.add("active");
});
closeMenu.addEventListener("click", () => {
    sidebar.classList.remove("active");
});