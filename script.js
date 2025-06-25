document.addEventListener('DOMContentLoaded', function() {
    // Este código se ejecuta una vez que todo el DOM (la estructura de la página) está cargado.

    console.log("Script de Bomberos Linares cargado y ejecutado. ¡La página está lista!");

    // --- Funcionalidad de la Galería de Fotos (Modal / Lightbox) ---
    const modal = document.getElementById("imageModal"); // El contenedor de la modal
    const modalImg = document.getElementById("img01"); // El elemento <img> dentro de la modal
    const captionText = document.getElementById("caption"); // El div para la descripción de la imagen

    // Obtener todas las imágenes de la galería
    // Selecciona las imágenes que están dentro de un 'div' con clase 'gallery-item'
    const galleryImages = document.querySelectorAll(".gallery-item img");

    galleryImages.forEach(img => {
        img.addEventListener('click', function() {
            modal.style.display = "block"; // Muestra la modal
            modalImg.src = this.src; // Establece la ruta de la imagen seleccionada en la modal
            captionText.innerHTML = this.alt; // Muestra el texto alternativo (alt) como descripción
            document.body.style.overflow = "hidden"; // Evita el scroll en el body cuando la modal está abierta
        });
    });

    // Obtener el botón de cerrar (la 'x')
    const closeButton = document.querySelector(".close-button");

    // Cuando el usuario hace clic en <span> (x), cierra la modal
    closeButton.addEventListener('click', function() {
        modal.style.display = "none";
        document.body.style.overflow = "auto"; // Restaura el scroll en el body
    });

    // Cuando el usuario hace clic fuera de la imagen (en el fondo oscuro de la modal), cierra la modal
    modal.addEventListener('click', function(e) {
        // Asegurarse de que el clic no fue en la imagen misma ni en el botón de cierre
        if (e.target === modal) {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        }
    });

    // Cierra la modal con la tecla ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === "Escape" && modal.style.display === "block") {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        }
    });

    // --- Funcionalidad de Scroll Suave para la Navegación ---
    document.querySelectorAll('.main-nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Previene el comportamiento por defecto del enlace (salto instantáneo)

            const targetId = this.getAttribute('href'); // Obtiene el ID de la sección (ej. #contacto)
            const targetElement = document.querySelector(targetId); // Encuentra el elemento de la sección

            if (targetElement) {
                // Obtener la altura dinámica del header para un scroll más preciso
                // Esto es crucial para que el contenido no quede oculto bajo el header fijo
                const headerHeight = document.querySelector('.main-header').offsetHeight;
                
                // Realiza un scroll suave hacia el elemento, ajustando por la altura del encabezado fijo
                window.scrollTo({
                    top: targetElement.offsetTop - headerHeight,
                    behavior: 'smooth'
                });
            }
        });
    });
});