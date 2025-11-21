// Toggle theme (light / dark-ish)// Menu responsive
function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.style.display = (menu.style.display === "flex") ? "none" : "flex";
}

// Dark mode
document.getElementById("darkModeBtn").onclick = () => {
    document.body.classList.toggle("dark");
};

// Effet machine à écrire
const text = "Bienvenue sur mon Portfolio, je suis Chahd";
let index = 0;

function typeEffect() {
    document.getElementById("typing").textContent = text.slice(0, index++);
    if (index <= text.length) {
        setTimeout(typeEffect, 80);
    }
}
typeEffect();

// Animation lors du scroll
const elements = document.querySelectorAll('.fade-in');

function showSections() {
    elements.forEach(el => {
        const pos = el.getBoundingClientRect().top;
        if (pos < window.innerHeight - 100) {
            el.classList.add('visible');
        }
    });
}
window.addEventListener("scroll", showSections);
showSections();

// Scroll to top button
window.onscroll = () => {
    document.getElementById("upBtn").style.display = 
        (document.documentElement.scrollTop > 200) ? "block" : "none";
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

