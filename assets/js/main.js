var cargarPagina = function() {
    cargarPersonajes();
    $(document).on("click", ".personaje", mostrarDetallePersonaje)
};

var cargarPersonajes = function() {
    var url ='http://swapi.co/api/people';
    $.getJSON(url, function(response){
        var personajes = response.results;
        var total = response.count;
        mostrarTotalPersonajes(total);
        mostrarPersonajes(personajes);
    });
};

var mostrarTotalPersonajes = function(total) {
    $('#total').text(total);
};

var mostrarPersonajes = function(personajes) {
    
     personajes.forEach(function(personaje) {
              var $li = $("<li />");
              var $ul = $('#personajes');
              
          $ul.append($li);
         $li.attr("data-url", personaje.homeworld);
         $li.addClass("personaje");
          $li.text(personaje.name);
              console.log(personaje.name);
          }); 
    
};

var plantilla = '<h2>Planeta</h2>' +
      '<p><strong>Nombre: </strong>__nombre__</p>' +
      '<p><strong>Clima: </strong>__clima__</p>';


var mostrarDetallePersonaje = function(total) {
    var url = $(this).data('url');
    var $planetaContenedor = $('#DetallePlaneta');
    $.getJSON(url, function(response) {
        $planetaContenedor.html(
        plantilla.replace('__nombre__', response.name)
                .replace('__clima__', response.climate)
            );
    });
};


$(document).ready(cargarPagina);

