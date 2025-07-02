// NAV BAR //
document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.getElementById("menu-toggle");
    const navContainer = document.querySelector(".nav_container");

    toggleBtn.addEventListener("click", function (event) {
        event.stopPropagation(); // evita que o clique no botão feche imediatamente
        navContainer.classList.toggle("open");
    });

    // Fecha o menu ao clicar fora
    document.addEventListener("click", function (event) {
        const isClickInside = navContainer.contains(event.target);
        if (!isClickInside) {
            navContainer.classList.remove("open");
        }
    });
});

// Nova funcionalidade: fecha o menu ao clicar fora dele
document.addEventListener("click", function (e) {
    const isClickInsideNav = nav.contains(e.target);
    const isClickOnToggle = toggle.contains(e.target);

    if (nav.classList.contains("active") && !isClickInsideNav && !isClickOnToggle) {
        nav.classList.remove("active");
    }
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

