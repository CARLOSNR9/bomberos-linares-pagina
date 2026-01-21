document.addEventListener('DOMContentLoaded', () => {
    /* =========================================
       MENÚ MÓVIL
       ========================================= */
    const hamburger = document.querySelector('.hamburger-menu');
    const nav = document.querySelector('.main-nav');
    const navLinks = document.querySelectorAll('.main-nav a');

    if (hamburger && nav) {
        hamburger.addEventListener('click', () => {
            nav.classList.toggle('nav-open');
            hamburger.classList.toggle('is-active');
        });

        // Cerrar menú al hacer clic en un enlace
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('nav-open');
                hamburger.classList.remove('is-active');
            });
        });
    }

    /* =========================================
       GALERÍA (MODAL / LIGHTBOX)
       ========================================= */
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById("img01");
    const captionText = document.getElementById("caption");
    const galleryImages = document.querySelectorAll('.gallery-item img');
    const closeBtn = document.querySelector('.close-button');

    if (modal && modalImg && captionText) {
        galleryImages.forEach(img => {
            img.addEventListener('click', function () {
                modal.style.display = "block";
                modalImg.src = this.src;
                // Intentar tomar el texto del caption hermano si existe
                const captionDiv = this.nextElementSibling;
                if (captionDiv && captionDiv.classList.contains('gallery-caption')) {
                    captionText.innerHTML = captionDiv.innerHTML;
                } else {
                    captionText.innerHTML = this.alt;
                }
            });
        });

        // Cerrar modal con el botón X
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                modal.style.display = "none";
            });
        }

        // Cerrar modal al hacer clic fuera de la imagen
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = "none";
            }
        });
    }

    /* =========================================
       SCROLL SUAVE (Mejora UX)
       ========================================= */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

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