var downloadBtn = document.querySelector('button.outline');

// Agregar un evento de clic al botón de descarga
downloadBtn.addEventListener('click', function () {
    // Seleccionar el canvas visible
    var canvas = document.getElementById('visibleCanvas');

    // Obtener la URL de la imagen del canvas
    var dataURL = canvas.toDataURL('image/png');

    // Crear un elemento de enlace temporal
    var downloadLink = document.createElement('a');
    downloadLink.href = dataURL;
    downloadLink.download = 'Michuchi-edit.png';

    // Simular un clic en el enlace de descarga
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
});