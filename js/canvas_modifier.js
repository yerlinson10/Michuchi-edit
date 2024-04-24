        const hiddenCanvas = document.getElementById('hiddenCanvas');
        const hiddenCtx = hiddenCanvas.getContext('2d');
        const visibleCanvas = document.getElementById('visibleCanvas');
        const visibleCtx = visibleCanvas.getContext('2d');

        const topTextElement = document.getElementById('topText');
        const bottomTextElement = document.getElementById('bottomText');
        const topTextColorElement = document.getElementById('topTextColor');
        const bottomTextColorElement = document.getElementById('bottomTextColor');
        const topTextSizeElement = document.getElementById('topTextSize');
        const bottomTextSizeElement = document.getElementById('bottomTextSize');
        const imageWidthElement = document.getElementById('imageWidth');
        const imageHeightElement = document.getElementById('imageHeight');

        // Cargar la imagen una vez
        const image = new Image();
        image.onload = () => {
            updateCanvas(); // Llamar a updateCanvas una vez que la imagen esté cargada
        };
        image.onerror = () => {
            console.error('Error al cargar la imagen.');
        };
        image.src = 'img/michuchi/loco.jpg'; // Cambia 'loco.jpg' por la ruta de tu imagen
        
        // Función para agregar texto al canvas
        function addText(ctx, text, color, yPos, textSize) {
            ctx.font = `${textSize}px Impact`; // Tamaño del texto
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.strokeStyle = 'black'; // Color del delineado
            ctx.lineWidth = 2; // Ancho del delineado
            ctx.strokeText(text, ctx.canvas.width / 2, yPos);
            ctx.fillStyle = color;
            ctx.fillText(text, ctx.canvas.width / 2, yPos);
        }

        // Actualizar canvas cuando se cambian los valores
        function updateCanvas() {
            const canvasWidth = parseInt(imageWidthElement.value);
            const canvasHeight = parseInt(imageHeightElement.value);

            hiddenCanvas.width = canvasWidth;
            hiddenCanvas.height = canvasHeight;
            visibleCanvas.width = canvasWidth;
            visibleCanvas.height = canvasHeight;

            hiddenCtx.clearRect(0, 0, canvasWidth, canvasHeight);

            const topText = topTextElement.value;
            const bottomText = bottomTextElement.value;
            const topTextColor = topTextColorElement.value;
            const bottomTextColor = bottomTextColorElement.value;
            const topTextSize = parseInt(topTextSizeElement.value);
            const bottomTextSize = parseInt(bottomTextSizeElement.value);

            // Dibujar la imagen en el canvas oculto
            hiddenCtx.drawImage(image, 0, 0, canvasWidth, canvasHeight);

            // Agregar texto al canvas oculto
            const topTextPosY = canvasHeight * 0.1;
            const bottomTextPosY = canvasHeight - canvasHeight * 0.1;

            addText(hiddenCtx, topText, topTextColor, topTextPosY, topTextSize);
            addText(hiddenCtx, bottomText, bottomTextColor, bottomTextPosY, bottomTextSize);

            // Copiar contenido del canvas oculto al canvas visible
            visibleCtx.clearRect(0, 0, canvasWidth, canvasHeight);
            visibleCtx.drawImage(hiddenCanvas, 0, 0);
        }

        // Escuchar cambios en los controles
        topTextElement.addEventListener('input', updateCanvas);
        bottomTextElement.addEventListener('input', updateCanvas);
        topTextColorElement.addEventListener('input', updateCanvas);
        bottomTextColorElement.addEventListener('input', updateCanvas);
        topTextSizeElement.addEventListener('input', updateCanvas);
        bottomTextSizeElement.addEventListener('input', updateCanvas);
        imageWidthElement.addEventListener('input', updateCanvas);
        imageHeightElement.addEventListener('input', updateCanvas);