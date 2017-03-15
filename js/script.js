
//  Archivo: script.js
//  Autor: Nelson Andrés Sora Mora
//  Ingeniería de Sistemas y Computación
//  Universidad Nacional de Colombia
//  Gráfica Interactiva

// =============================================================================
// Código para el funcionamiento de la presentación de imágenes de la portada
// =============================================================================
var slideIndex = 1;     //Variable indicadora de la imagen actual
carousel();             //Llamado a la función carousel

// Función encargada de pasar a la imagen anterior/siguiente
function plusDivs(n) {
    showDivs(slideIndex += n);
}

// Función encargada de mostrar la imagen
function currentDiv(n) {
    showDivs(slideIndex = n);
}

// Función encargada de activar los indicadores de imagen e imagen correspondientes
function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");    //Imágenes
    var dots = document.getElementsByClassName("demo");     //Indicadores

    // Si se llegó a la última imagen, vuelva a comenzar
    if (n > x.length) {slideIndex = 1}

    // Si se va en sentido contrario y se llegó a la primera imagen, se pase a la última
    if (n < 1) {slideIndex = x.length}
    
    // Inicialmente, esconder todas las imágenes
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
    }

    // Quita la clase w3-white de todos los indicadores, para mostrarlos todos inactivos
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" w3-white", "");
    }
    x[slideIndex-1].style.display = "block";        //Muestra la imagen activa correspondiente
    dots[slideIndex-1].className += " w3-white";    //Muestra el indicador correspondiente a la imagen activa
}

// Función que recorre imagen por imagen mostrando la transición
// y mostrando los indicadores e imagen correspondientes
function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");    //Imágenes

    // Inicialmente, esconder todas las imágenes
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
    }
    slideIndex++;       //Aumenta el indice de imagen

    // Si se llegó a la última imagen, vuelva a comenzar
    if (slideIndex > x.length) {slideIndex = 1}

    x[slideIndex-1].style.display = "block";        //Muestra la imagen activa correspondiente 
    showDivs(slideIndex);                           //"Anima" los indicadores e imagen correspondientes
    setTimeout(carousel, 3500);                     //Contabiliza 3500 milisegundos para la transición
}

// =============================================================================
// Código para el funcionamiento del botón de manú que se activa
// para un tamaño de pantalla menor a 480px
// =============================================================================

// Función que se ejecuta al hacer clic en el botón
function menu() {
    var menu = document.getElementsByClassName("menu");     //Botón
    menu[0].classList.toggle("active");                     //Cambia el botón entre activo/inactivo
    var nav = menu[0].nextElementSibling;                   //Hermano: Barra de navegación

    // Si el menú está desplegado (block), lo esconde, y viceversa
    if (nav.style.display == "block") {
        nav.style.display = "none";             //Esconde el menú
    } else {
        nav.style.display = "block";            //Muestra el menú
    }
}

// =============================================================================
// Código para el funcionamiento del mapa de Google Maps
// =============================================================================
function myMap() {
    var mapCanvas = document.getElementById("map");                 //Utiliza como canvas el div con el id="map"
    var myCenter = new google.maps.LatLng(4.5823288,-74.1080842);   //Se indican las coordenadas de latitud y longitud
    var mapOptions = {center: myCenter, zoom: 19};                  //Se ubican las coordenadas como centro para hacer el zoom
    var map = new google.maps.Map(mapCanvas,mapOptions);            //Se declara el mapa con las opciones anteriores
    var marker = new google.maps.Marker({                           //Se declara un marcador saltante en las coordenadas
        position: myCenter,
        animation: google.maps.Animation.BOUNCE
    });
    marker.setMap(map);                                             //Se agrega el marcador al mapa
}