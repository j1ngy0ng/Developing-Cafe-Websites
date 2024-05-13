const buttons = document.querySelectorAll(".nav_button");
const slides = document.querySelectorAll(".slide_vid");

var slideVid = function(manual){
    buttons.forEach((btns) => {
        btns.classList.remove("changeVid");
    });

    slides.forEach((slide) => {
        slide.classList.remove("changeVid");
    });

    buttons[manual].classList.add("changeVid");
    slides[manual].classList.add("changeVid");
}

buttons.forEach((btns, i) => {
    btns.addEventListener('click', () => {
        slideVid(i);
    });
});