// Módulo para manejar el cierre de sesión
import { auth } from './firebase_config.js';
import { signOut } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";

/**
 * Función para cerrar sesión del usuario
 */
async function cerrarSesion() {
    try {
        // Cerrar sesión en Firebase
        await signOut(auth);
        console.log('Sesión cerrada exitosamente');
        
        // Redirigir al login
        window.location.href = 'index.html';
        
    } catch (error) {
        console.error('Error al cerrar sesión:', error);
        
        // En caso de error, mostrar mensaje y aún así redirigir
        alert('Hubo un error al cerrar sesión, pero serás redirigido al login.');
        window.location.href = 'index.html';
    }
}

// Exportar la función para poder usarla desde otros archivos
export { cerrarSesion };

// También hacer la función disponible globalmente para onclick
window.cerrarSesion = cerrarSesion;