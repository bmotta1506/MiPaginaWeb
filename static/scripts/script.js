const btnHamburguesa = document.getElementById('hamburger');
    const menuNavegacion = document.getElementById('navOficial');

    btnHamburguesa.addEventListener('click', () => {
        menuNavegacion.classList.toggle('active');
    });