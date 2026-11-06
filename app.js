
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");

    menuToggle.textContent =
        navLinks.classList.contains("show") ? "✕" : "☰";
});

// Close menu after clicking a link
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("show");
        menuToggle.textContent = "☰";
    });
});


document.addEventListener("DOMContentLoaded", () => {

    const hero = document.querySelector(".hero");
    const heroImage = document.querySelector(".hero-image img");

    // Hero entrance animation
    hero.classList.add("loaded");

    // Image loading check
    heroImage.addEventListener("error", () => {
        console.log("Hero image could not be loaded.");
    });

});


// How It Works Scroll Animation

const steps = document.querySelectorAll(".step");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
        }

    });

}, {
    threshold: 0.2
});

steps.forEach((step) => {
    observer.observe(step);
});

// ================= FOOTER JAVASCRIPT =================


// Automatic Copyright Year

const currentYear = document.getElementById("currentYear");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}


// Newsletter Form

const newsletterForm = document.getElementById("newsletterForm");

if (newsletterForm) {

    newsletterForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const emailInput = document.getElementById("newsletterEmail");
        const message = document.getElementById("newsletterMessage");

        const email = emailInput.value.trim();

        if (email === "") {
            message.textContent = "Please enter your email.";
            return;
        }

        message.textContent = "Thank you! Your email is ready for subscription.";
        emailInput.value = "";

    });

}


// Back To Top Button

const backToTop = document.getElementById("backToTop");

if (backToTop) {

    backToTop.addEventListener("click", function() {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}