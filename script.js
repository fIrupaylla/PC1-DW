$(document).ready(function() {
    // Función para ajustar la posición de los elementos cuando se desplaza la página
    function adjustContentPosition() {
        // Obtiene la altura del header
        var headerHeight = 220;
        // Obtiene la posición actual de la ventana
        var scrollTop = $(window).scrollTop();
        // Ajusta la posición de los elementos según sea necesario
        $('.content-section').css('padding-top', headerHeight + 'px');
        // Asegura que el contenido no se oculte detrás del encabezado
        if (scrollTop < headerHeight) {
            $('.content-section').css('margin-top', '0');
        } else {
            $('.content-section').css('margin-top', headerHeight + 'px');
        }
    }
    
    // Llama a la función de ajuste cuando se carga la página y se desplaza
    $(window).on('load scroll', adjustContentPosition);

    // Selecciona todos los enlaces dentro del menú de navegación
    $('a[href^="#"]').on('click', function(event) {
        // Evita el comportamiento predeterminado del enlace
        event.preventDefault();
        // Obtiene el destino del enlace (el elemento con el ID correspondiente)
        var target = $(this.getAttribute('href'));
        // Verifica si el destino existe
        if (target.length) {
            // Realiza el desplazamiento suave hasta el destino
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000); // Duración del desplazamiento en milisegundos
        }
    });
});