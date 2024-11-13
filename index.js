
var jugador1 = prompt("Jugador 1 inserte piedra, papel o tijeras: ");
var jugador2 = prompt("Jugador 2 inserte piedra, papel o tijeras: ");

// Variable que funciona como contenedor para mostrar el resultado en el html
var contenedorResultado = document.getElementById("resultado");

if (jugador1.toLowerCase() == jugador2.toLowerCase()) {
    
    contenedorResultado.innerHTML = "<p>¡Empate!<p>";
} else if (
    (jugador1.toLowerCase() == "papel" && jugador2.toLowerCase() == "piedra") ||
    (jugador1.toLowerCase() == "tijeras" && jugador2.toLowerCase() == "papel") ||
    (jugador1.toLowerCase() == "piedra" && jugador2.toLowerCase() == "tijeras")
) {
    
    contenedorResultado.innerHTML = "<p>¡Jugador 1 ha ganado!<p>";
} else {
    
    contenedorResultado.innerHTML = "<p>¡Jugador 2 ha ganado!<p>";
}


