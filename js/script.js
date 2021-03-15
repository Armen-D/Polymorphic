const burger = document.getElementById("burger-menu");
const sideNav = document.querySelector(".side-nav");
const closeBtn = document.getElementById("close-side");
burger.addEventListener("click", () => {
    sideNav.classList.add("active");
});
closeBtn.addEventListener("click", () => {
    sideNav.classList.remove("active");
});

let userBtn = document.getElementById("user-btn");
let userNav = document.querySelector(".user-nav");
let closeBtn2 = document.getElementById("user-nav");
userBtn.addEventListener("click", () => {
    userNav.classList.add("active");
});
closeBtn2.addEventListener("click", () => {
    userNav.classList.remove("active");
});

$('.grid-slider').owlCarousel({
    autoplay: false,
    loop:true,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

$('.instagram-slider').owlCarousel({
    dots: false,
    loop: true,
    nav: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:6
        }
    }
})