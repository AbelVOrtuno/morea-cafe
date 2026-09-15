// Menu Movil

const menuButton = document.querySelector(".menu-toggle");
const mainNav = document.querySelector("#main-nav");
const menuIcon = document.querySelector(".menu-toggle__icon");
const navLinks = document.querySelectorAll(".nav a");

menuButton.addEventListener("click", () => {
    mainNav.classList.toggle("nav--open");

    if(mainNav.classList.contains("nav--open")){
        menuIcon.textContent ="✕";
        menuButton.setAttribute("aria-label", "Cerrar menu");
        menuButton.setAttribute("aria-expanded", true);
    }else{
        menuIcon.textContent = "☰";
        menuButton.setAttribute("aria-label", "Abrir menu");
        menuButton.setAttribute("aria-expanded", "false");
    }
});

navLinks.forEach((navLink) => {
    navLink.addEventListener("click", () => {
        mainNav.classList.remove("nav--open");

        menuIcon.textContent ="☰";
        menuButton.setAttribute("aria-label", "Abrir menu");
        menuButton.setAttribute("aria-expanded", "false");
    });
});