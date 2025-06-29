//NAV BAR//
document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.getElementById("menu-toggle");
    const nav = document.getElementById("nav-links");

    toggle.addEventListener("click", (e) => {
        e.stopPropagation(); // Impede que o clique se propague e feche o menu
        nav.classList.toggle("active");
    });

    // Nova funcionalidade: fecha o menu ao clicar fora dele
    document.addEventListener("click", function (e) {
        const isClickInsideNav = nav.contains(e.target);
        const isClickOnToggle = toggle.contains(e.target);

        if (nav.classList.contains("active") && !isClickInsideNav && !isClickOnToggle) {
            nav.classList.remove("active");
        }
    });
});

const slides = document.querySelectorAll(".introducao .slide");
const prevBtn = document.querySelector(".nav-btn.prev");
const nextBtn = document.querySelector(".nav-btn.next");
let currentIndex = 0;
let timer;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove("ativo");
        if (i === index) slide.classList.add("ativo");
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
}

function startAutoSlide() {
    timer = setInterval(nextSlide, 5000);
}

function resetTimer() {
    clearInterval(timer);
    startAutoSlide();
}

nextBtn.addEventListener("click", () => {
    nextSlide();
    resetTimer();
});

prevBtn.addEventListener("click", () => {
    prevSlide();
    resetTimer();
});

startAutoSlide();

