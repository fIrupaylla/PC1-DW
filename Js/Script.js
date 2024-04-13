$(document).ready(function() {
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