document.addEventListener('DOMContentLoaded', function () {
    const multipleCardCarousel = document.querySelector("#carouselExampleControls");

    if (window.matchMedia("(min-width: 768px)").matches) {
        // Inicializar el carousel de Bootstrap
        const carousel = new bootstrap.Carousel(multipleCardCarousel, {
            interval: 3000,
            wrap: false,
        });

        // Configurar variables y funciones para el desplazamiento automático
        let cardWidth = document.querySelector(".carousel-item").offsetWidth;
        let totalCards = document.querySelectorAll(".carousel-item").length;
        let scrollPosition = 0;

        function autoScroll() {
            scrollPosition += cardWidth;

            if (scrollPosition >= cardWidth * totalCards) {
                // Si llegamos al final, reiniciar
                scrollPosition = 0;
            }

            multipleCardCarousel.querySelector(".carousel-inner").scroll({
                left: scrollPosition,
                behavior: 'smooth'
            });
        }

        // Configurar intervalo para el desplazamiento automático
        const autoScrollInterval = setInterval(autoScroll, 3000);

        // Manejar eventos de clic para botones previo y siguiente
        const prevButton = multipleCardCarousel.querySelector(".carousel-control-prev");
        const nextButton = multipleCardCarousel.querySelector(".carousel-control-next");

        prevButton.addEventListener("click", function () {
            clearInterval(autoScrollInterval); // Detener el desplazamiento automático al hacer clic
            if (scrollPosition > 0) {
                scrollPosition -= cardWidth;
            } else {
                scrollPosition = cardWidth * (totalCards - 1);
            }
            multipleCardCarousel.querySelector(".carousel-inner").scroll({
                left: scrollPosition,
                behavior: 'smooth'
            });
        });

        nextButton.addEventListener("click", function () {
            clearInterval(autoScrollInterval); // Detener el desplazamiento automático al hacer clic
            autoScroll(); // Simular el desplazamiento automático
        });

        // Restaurar el intervalo después de un tiempo
        setTimeout(() => {
            setInterval(autoScroll, 3000);
        }, 5000); // Ajusta este tiempo según tus necesidades
    } else {
        // Agregar clase 'slide' para dispositivos con pantalla pequeña
        multipleCardCarousel.classList.add("slide");
    }
});






function mostrar1(){
    document.getElementById('conocemeKyne').style.display = 'block';
}
function mostrar2(){
    document.getElementById('conocemeRh').style.display = 'block';
}
function mostrar3(){
    document.getElementById('conocemePF').style.display = 'block';
}
function mostrar4(){
    document.getElementById('conocemeMac').style.display = 'block';
}
function mostrar5(){
    document.getElementById('conocemeDB').style.display = 'block';
}

