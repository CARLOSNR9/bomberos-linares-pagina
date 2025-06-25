document.addEventListener('DOMContentLoaded', function() {
    console.log("Script de Bomberos Linares cargado y ejecutado. ¡La página está lista!");

    // --- Funcionalidad de la Galería de Fotos (Modal / Lightbox) ---
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("img01");
    const captionText = document.getElementById("caption");

    const galleryImages = document.querySelectorAll(".gallery-item img");

    galleryImages.forEach(img => {
        img.addEventListener('click', function() {
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
            document.body.style.overflow = "hidden";
        });
    });

    const closeButton = document.querySelector(".close-button");

    closeButton.addEventListener('click', function() {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    });

    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        }
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === "Escape" && modal.style.display === "block") {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        }
    });

    // --- Funcionalidad del Menú Hamburguesa ---
    const hamburgerBtn = document.querySelector('.hamburger-menu');
    const mainNav = document.querySelector('.main-nav');
    const navLinks = document.querySelectorAll('.main-nav a');

    hamburgerBtn.addEventListener('click', function() {
        mainNav.classList.toggle('nav-open');
        this.classList.toggle('is-active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (mainNav.classList.contains('nav-open')) {
                mainNav.classList.remove('nav-open');
                hamburgerBtn.classList.remove('is-active');
            }
        });
    });

    // --- Funcionalidad de Scroll Suave para la Navegación ---
    document.querySelectorAll('.main-nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const headerHeight = document.querySelector('.main-header').offsetHeight;
                
                window.scrollTo({
                    top: targetElement.offsetTop - headerHeight,
                    behavior: 'smooth'
                });
            }
        });
    });
});