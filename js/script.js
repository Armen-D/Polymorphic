let burger = document.getElementById("burger-menu");
let sidebar = document.querySelector(".sideBar")
let closeMenu = document.querySelector(".icon-cross")
const sidemenu = document.querySelectorAll(".side-nav a");
burger.addEventListener("click", () => {
    sidebar.classList.add("active");
});
closeMenu.addEventListener("click", () => {
    sidebar.classList.remove("active");
});