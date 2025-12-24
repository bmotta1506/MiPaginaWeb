const loginForm = document.querySelector('.login-form');

if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Detiene el envío real para mostrar la alerta primero

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Validación básica
        if (email === "" || password === "") {
            alert("Por favor, complete todos los campos.");
        } else {
            // 1. Mostrar la alerta de éxito
            alert("¡Inicio de sesión exitoso! Bienvenido a MT Motors.");

            // 2. Redirigir al index
            // Usamos window.location.href para cambiar de página
            window.location.href = "/";
        }
    });
}
// Añade esto al final de tu script.js existente
const registroForm = document.querySelector('.registro-form');

if (registroForm) {
    registroForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const pass = document.getElementById('reg-password').value;
        const confirmPass = document.getElementById('confirm-password').value;

        if (pass !== confirmPass) {
            alert("Las contraseñas no coinciden. Por favor, verifíquelas.");
        } else {
            alert("Cuenta creada con éxito. ¡Bienvenido a MT Motors!");
            window.location.href = "/";
        }
    });
}