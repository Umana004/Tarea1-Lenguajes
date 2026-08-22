const Jugador = require("../modelos/jugador")
const Partida = require("../modelos/partida")

function crear_partida(nombre_jugador_1, nombre_jugador_2){

    const jugador_1 = new Jugador(nombre_jugador_1);
    const jugador_2 = new Jugador(nombre_jugador_2);

    const partida = new Partida(jugador_1, jugador_2);

    return partida;
}

moodule.exports = {
    crear_partida
};