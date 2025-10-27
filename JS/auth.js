
// Importar las funciones necesarias de firebase_config.js
import { registerUser, loginUser } from './firebase_config.js';

document.addEventListener("DOMContentLoaded", () => {
    // REGISTRO DE USUARIO
    const btnReg = document.getElementById("btnReg");
    btnReg.addEventListener("click", async () => {
        const email = document.getElementById("emailReg").value;
        const password = document.getElementById("passReg").value;
        const mensaje = document.getElementById("mensaje");

        try {
            await registerUser(email, password); // Esta función ya guarda en Firestore
            mensaje.style.color = "green";
            mensaje.textContent = "Usuario registrado correctamente";
            setTimeout(() => {
                window.location.href = 'juego.html';
            }, 1500);
        } catch (error) {
            mensaje.style.color = "red";
            if (error.code === "auth/email-already-in-use") {
                mensaje.textContent = "El correo ya está registrado";
            } else if (error.code === "auth/invalid-email") {
                mensaje.textContent = "Correo inválido";
            } else if (error.code === "auth/weak-password") {
                mensaje.textContent = "La contraseña es muy débil";
            } else {
                mensaje.textContent = "Error al registrar: " + error.message;
            }
        }
    });

    // INICIO DE SESIÓN
    let intentosFallidos = 0;
    const maxIntentos = 2;

    const mensajeIntentos = document.getElementById('mensaje-intentos');
    const botonSubmit = document.getElementById('btn');
    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", async (event) => {
        event.preventDefault();
        const email = document.getElementById("usernameInput").value;
        const password = document.getElementById("passwordInput").value;
        const mensaje = document.getElementById("mensaje");

        // VALIDAR reCAPTCHA ANTES DE AUTENTICAR (comentado por ahora)
        // const recaptchaResponse = grecaptcha.getResponse();
        // if (!recaptchaResponse) {
        //     mensaje.style.color = "red";
        //     mensaje.textContent = "Por favor, verifica el reCAPTCHA antes de continuar.";
        //     return;
        // }

        try {
            await loginUser(email, password); // Usar nueva función que actualiza último login
            mensaje.style.color = "green";
            mensaje.textContent = "Inicio de sesión exitoso";
            window.location.href = "juego.html";
        } catch (error) {
            mensaje.style.color = "red";
            intentosFallidos++;
            if (error.code === "auth/invalid-email") {
                mensaje.textContent = "Correo inválido";
            } else if (error.code === "auth/wrong-password") {
                mensaje.textContent = "Contraseña incorrecta";
            } else if (error.code === "auth/user-not-found") {
                mensaje.textContent = "Usuario no registrado";
            } else if (error.code === "auth/invalid-credential") {
                mensaje.textContent = "Usuario no registrado";
            } else {
                mensaje.textContent = "Error: " + error.message;
            }
            mostrarIntentos();
        }
    });

    // Función para mostrar el contador de intentos fallidos
    function mostrarIntentos() {
        if (mensajeIntentos) {
            const intentosRestantes = maxIntentos - intentosFallidos;
            if (intentosRestantes > 0) {
                mensajeIntentos.textContent = `Intentos restantes: ${intentosRestantes}`;
                mensajeIntentos.style.color = "orange";
            } else {
                mensajeIntentos.textContent = "Demasiados intentos fallidos. Recarga la página.";
                mensajeIntentos.style.color = "red";
                // Deshabilitar el formulario
                loginForm.style.pointerEvents = "none";
                loginForm.style.opacity = "0.5";
            }
        }
    }

    
});