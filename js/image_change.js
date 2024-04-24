const listaOpciones = document.getElementById('listaOpciones');
        
// Función para actualizar la imagen y el canvas
function actualizarImagenYCanvas(valorOpcion) {
    // Asignar el valor seleccionado al elemento select

    // Crear una nueva instancia de Image
    var nuevaImagen = new Image();

    // Asignar el manejador de carga de la nueva imagen
    nuevaImagen.onload = function() {
        // Actualizar la imagen
        image.src = nuevaImagen.src;

        // Llamar a la función para actualizar el canvas una vez que la imagen se haya cargado
        nuevaImagen.onload = () => {
            updateCanvas();
        };
    };

    // Asignar el manejador de errores de la nueva imagen
    nuevaImagen.onerror = function() {
        console.error('Error al cargar la nueva imagen.');
    };

    // Asignar la nueva fuente de la imagen
    nuevaImagen.src = valorOpcion ;
}

// Escuchar clics en la lista de opciones
listaOpciones.addEventListener('click', function(evento) {
    const opcionSeleccionada = evento.target.closest('li');
    if (opcionSeleccionada) {
        const valorOpcion = opcionSeleccionada.dataset.valor;
        actualizarImagenYCanvas(valorOpcion);
    }
});

