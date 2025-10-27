// Importar Firebase y las funciones necesarias
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    fetchSignInMethodsForEmail
} from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";

// importa la instancia inicializada y firestore desde tu archivo de configuración
import { auth, db, doc, setDoc } from "../JS/firebase_config.js";


document.addEventListener('DOMContentLoaded', 
    function() {
    const formulario = document.getElementById('loginForm');
    const campoUsuario = document.getElementById('usernameInput');
    const campoPassword = document.getElementById('passwordInput');
    const mensaje = document.getElementById('mensaje');
    const btnReg = document.getElementById('btnReg');
    const emailReg = document.getElementById('emailReg');
    const passReg = document.getElementById('passReg');

    if (!formulario) return;

    // ============================
    // 🔹 INICIO DE SESIÓN
    // ============================
    formulario.addEventListener('submit',
        async function(evento) {
        evento.preventDefault();

        const usuario = campoUsuario.value.trim();
        const password = campoPassword.value.trim();

        if (usuario === '' || password === '') {
            mensaje.textContent = 'Por favor, completa todos los campos.';
            return;
        }

        // Validar email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(usuario)) {
            mensaje.textContent = 'Por favor, ingresa un correo electrónico válido.';
            return;
        }

        // Validar longitud de contraseña
        if (password.length < 5) {
            mensaje.textContent = 'La contraseña debe tener al menos 5 caracteres.';
            return;
        }

        try {
            // Intentar iniciar sesión
            await signInWithEmailAndPassword(auth, usuario, password);
            mensaje.style.color = 'green';
            mensaje.textContent = 'Inicio de sesión exitoso. Redirigiendo...';

            // Redirigir según tipo de usuario
            setTimeout(() => {
                if (usuario === 'admin01@linux.com') {
                    window.location.href = 'juego.html';
                } else {
                    window.location.href = 'juego.html';
                }
            }, 1500);
        } catch (error) {
            if (error.code === 'auth/user-not-found') {
                mensaje.textContent = 'Usuario no registrado. Por favor regístrate';
            } else if (error.code === 'auth/wrong-password') {
                mensaje.textContent = 'Contraseña incorrecta';
            } else if (error.code === 'auth/invalid-credential') {
                mensaje.textContent = 'Usuario no registrado. Por favor regístrate';
            } else {
                mensaje.textContent = 'Error: ' + error.message;
            }
        }
    });

    // ============================
    // 🔹 REGISTRO DE NUEVO USUARIO
    // ============================
    btnReg.addEventListener('click', async () => {
        const email = emailReg.value.trim();
        const password = passReg.value.trim();

        if (email === '' || password === '') {
            mensaje.textContent = 'Por favor, completa todos los campos para registrarte.';
            return;
        }

        // Validar email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            mensaje.textContent = 'Por favor, ingresa un correo electrónico válido.';
            return;
        }

        // Validar longitud de contraseña
        if (password.length < 5) {
            mensaje.textContent = 'La contraseña debe tener al menos 5 caracteres.';
            return;
        }

        try {
            // Verificar si el correo ya existe
            const methods = await 
            fetchSignInMethodsForEmail(auth, email);
            if (methods.length > 0) {
                mensaje.textContent = 'Este correo ya está registrado. Intenta iniciar sesión';
                return;
            }

            // Registrar nuevo usuario
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

// Guardar información del usuario en Firestore
await setDoc(doc(db, "usuarios", user.uid), {
    correo: user.email,
    puntuacion: 0
});

mensaje.style.color = 'green';
mensaje.textContent = 'Registro exitoso. Ahora puedes iniciar sesión';
} catch (error) {
            mensaje.style.color = 'red';
            mensaje.textContent = 'Error al registrar: ' + error.message;
        }
    });
});
