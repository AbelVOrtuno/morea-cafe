// Animaciones al bajar en la pagina

const animatedElements = document.querySelectorAll(".animate");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add("animate--visible");
            observer.unobserve(entry.target);
        }
    });
});
animatedElements.forEach((animatedElement)=> {
    observer.observe(animatedElement);
});