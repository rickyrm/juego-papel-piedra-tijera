
var jugador1 = prompt ("Jugador 1, inserte piedra, papel o tijeras: ");
var jugador2 = prompt ("Jugador 2, inserte piedra, papel o tijeras: ");


if (jugador1.toLowerCase() == jugador2.toLowerCase() )
{
alert ("Empate");
}

else if ((jugador1.toLowerCase() == "papel" && jugador2.toLowerCase() =="piedra") ||
    (jugador1.toLowerCase() == "tijeras" && jugador2.toLowerCase() == "papel")||
    (jugador1.toLowerCase() == "piedra" && jugador2.toLowerCase() == "tijeras"))
{
    alert("Jugador 1 es el ganador");
} else  {
    alert("Jugador 2 es el ganador");
}


