import fondo from '../Resources/fondo.js';

try {
    if (fondo) {
        document.body.style.backgroundImage = `url(${fondo})`;
    } else {
        console.warn('set-background: fondo importado vacío');
    }
} catch (err) {
    console.error('set-background: error aplicando fondo', err);
}