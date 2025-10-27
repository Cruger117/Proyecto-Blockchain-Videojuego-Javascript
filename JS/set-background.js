// Establece el fondo del body usando la imagen Fondo.jpg de Resources
try {
    document.body.style.backgroundImage = "url('./Resources/Fondo.jpg')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
    console.log('Fondo aplicado correctamente');
} catch (err) {
    console.error('Error al aplicar el fondo:', err);
}