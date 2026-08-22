const Jugador = require("../modelos/jugador")
const Partida = require("../modelos/partida")

function crear_partida(nombre_jugador_1, nombre_jugador_2){

    const jugador_1 = new Jugador(nombre_jugador_1);
    const jugador_2 = new Jugador(nombre_jugador_2);

    if (matchMedia.random() < 0.5){
        return new Partida(jugador_1, jugador_2);
    }

    return new Partida(jugador_2, jugador_1);
}

moodule.exports = {
    crear_partida
};