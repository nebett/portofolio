// Navigation
const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-list");
const header = document.querySelector(".header");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navList.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navList.classList.remove("active");
}));

// Header scrol
window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

// Form submission
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    // Simulasi pengiriman form
    const formData = new FormData(contactForm);
    const formValues = Object.fromEntries(formData.entries());
    
    // Di sini Anda bisa menambahkan kode untuk mengirim data form
    // Misalnya menggunakan fetch API atau AJAX
    
    alert('Terima kasih! Pesan Anda telah dikirim.');
    contactForm.reset();
});

// Animasi saat scrolling
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

document.querySelectorAll('.skill-card, .project-card').forEach(el => {
    observer.observe(el);
});