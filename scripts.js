document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('reservas-form').addEventListener('submit', function (e) {
        e.preventDefault();

        const nombre = document.getElementById('nombre').value;
        const personas = document.getElementById('personas').value;
        const fecha = document.getElementById('fecha').value;
        const hora = document.getElementById('hora').value;

        const mensaje = `Gracias, ${nombre}. Tu reserva para ${personas} personas el ${fecha} a las ${hora} ha sido recibida.`;
        document.getElementById('reserva-confirmacion').textContent = mensaje;

        document.getElementById('reservas-form').reset();
    });
});

// script.js
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    const navList = document.querySelector('.nav-list');

    if (mobileMenu) { // Check if the element exists
        mobileMenu.addEventListener('click', () => {
            navList.classList.toggle('active');
        });
    }
});