const imagenes = [  // Replace with your image data
    { src: 'img/michuchi/Michuchi preocupado 2.jpg', alt: 'Michuchi preocupado 2' },
    { src: 'img/michuchi/Michuchi preocupado 6.jpg', alt: 'Michuchi preocupado 6' },
    { src: 'img/michuchi/Michuchi preocupado.jpg', alt: 'Michuchi preocupado' },
    { src: 'img/michuchi/loco.jpg', alt: 'loco' },
    { src: 'img/michuchi/loco2.jpg', alt: 'loco2' },
    { src: 'img/michuchi/michuchi aesthetic.jpg', alt: 'michuchi aesthetic' },
    { src: 'img/michuchi/michuchi aesthetic2.jpg', alt: 'michuchi aesthetic2' },
    { src: 'img/michuchi/michuchi agresivo 2.jpg', alt: 'michuchi agresivo 2' },
    { src: 'img/michuchi/michuchi agresivo 3.jpg', alt: 'michuchi agresivo 3' },
    { src: 'img/michuchi/michuchi ahi voy.jpg', alt: 'michuchi ahi voy' },
    { src: 'img/michuchi/michuchi brillito .jpg', alt: 'michuchi brillito ' },
    { src: 'img/michuchi/michuchi calmado.jpg', alt: 'michuchi calmado' },
    { src: 'img/michuchi/michuchi cansado 2.jpg', alt: 'michuchi cansado 2' },
    { src: 'img/michuchi/michuchi cansado 3.jpg', alt: 'michuchi cansado 3' },
    { src: 'img/michuchi/michuchi cansado 4.jpg', alt: 'michuchi cansado 4' },
    { src: 'img/michuchi/michuchi cansado 5.jpg', alt: 'michuchi cansado 5' },
    { src: 'img/michuchi/michuchi cansado 6.jpg', alt: 'michuchi cansado 6' },
    { src: 'img/michuchi/michuchi cansado.jpg', alt: 'michuchi cansado' },
    { src: 'img/michuchi/michuchi chad.jpg', alt: 'michuchi chad' },
    { src: 'img/michuchi/michuchi chismoso agrecivo.jpg', alt: 'michuchi chismoso agrecivo' },
    { src: 'img/michuchi/michuchi chismoso.jpg', alt: 'michuchi chismoso' },
    { src: 'img/michuchi/michuchi con resaca.jpg', alt: 'michuchi con resaca' },
    { src: 'img/michuchi/michuchi en el dentista.jpg', alt: 'michuchi en el dentista' },
    { src: 'img/michuchi/michuchi galan.jpg', alt: 'michuchi galan' },
    { src: 'img/michuchi/michuchi gutanini 2.jpg', alt: 'michuchi gutanini 2' },
    { src: 'img/michuchi/michuchi gutanini 3.jpg', alt: 'michuchi gutanini 3' },
    { src: 'img/michuchi/michuchi gutanini.jpg', alt: 'michuchi gutanini' },
    { src: 'img/michuchi/michuchi harto.jpg', alt: 'michuchi harto' },
    { src: 'img/michuchi/michuchi harto2.jpg', alt: 'michuchi harto2' },
    { src: 'img/michuchi/michuchi ignora.jpg', alt: 'michuchi ignora' },
    { src: 'img/michuchi/michuchi juzgon.jpg', alt: 'michuchi juzgon' },
    { src: 'img/michuchi/michuchi meditando.jpg', alt: 'michuchi meditando' },
    { src: 'img/michuchi/michuchi nervioso 2.jpg', alt: 'michuchi nervioso 2' },
    { src: 'img/michuchi/michuchi nervioso.jpg', alt: 'michuchi nervioso' },
    { src: 'img/michuchi/michuchi pensando 2.jpg', alt: 'michuchi pensando 2' },
    { src: 'img/michuchi/michuchi pensando.jpg', alt: 'michuchi pensando' },
    { src: 'img/michuchi/michuchi posando.jpg', alt: 'michuchi posando' },
    { src: 'img/michuchi/michuchi preño a al avecina.jpg', alt: 'michuchi preño a al avecina' },
    { src: 'img/michuchi/michuchi se duerme meditando.jpg', alt: 'michuchi se duerme meditando' },
    { src: 'img/michuchi/michuchi selfie 2.jpg', alt: 'michuchi selfie 2' },
    { src: 'img/michuchi/michuchi selfie agresivo .jpg', alt: 'michuchi selfie agresivo ' },
    { src: 'img/michuchi/michuchi selfie.jpg', alt: 'michuchi selfie' },
    { src: 'img/michuchi/michuchi sopero.jpg', alt: 'michuchi sopero' },
    { src: 'img/michuchi/michuchi su ojo.jpg', alt: 'michuchi su ojo' },
    { src: 'img/michuchi/michuchi te mira.jpg', alt: 'michuchi te mira' },
    { src: 'img/michuchi/michuchi vago.jpg', alt: 'michuchi vago' },
    { src: 'img/michuchi/michuchi xd 2.jpg', alt: 'michuchi xd 2' },
    { src: 'img/michuchi/michuchi xd 3.jpg', alt: 'michuchi xd 3' },
    { src: 'img/michuchi/michuchi xd.jpg', alt: 'michuchi xd' },
    { src: 'img/michuchi/michuchi y su flor amarilla 2.jpg', alt: 'michuchi y su flor amarilla 2' },
    { src: 'img/michuchi/michuchi y su flor amarilla.jpg', alt: 'michuchi y su flor amarilla' },

    // Add more image objects here
];

const listaopciones = document.getElementById('listaOpciones');

if (imagenes.length > 0) { // Check if image data is provided
    imagenes.forEach(imagenData => {
        const listItem = document.createElement('li');
        listItem.dataset.valor = imagenData.src;  // Set data-valor to image source
        listItem.innerHTML = `
                    <img src="${imagenData.src}" alt="${imagenData.alt}"> 
                    <span>${imagenData.alt}</span>
                `;
        listaopciones.appendChild(listItem);
    });
} else {
    // Handle the case where no image data is provided (optional)
    listaopciones.innerHTML = '<p>No hay imágenes disponibles.</p>';
}