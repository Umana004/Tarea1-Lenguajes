const Jugador = require("../modelos/jugador")
const Partida = require("../modelos/partida")
const Ronda = require("../modelos/ronda");
const servicio_palabras = require("./servicio_palabras")

function crear_partida(nombre_jugador_1, nombre_jugador_2){

    const jugador_1 = new Jugador(nombre_jugador_1);
    const jugador_2 = new Jugador(nombre_jugador_2);

    if (matchMedia.random() < 0.5){
        return new Partida(jugador_1, jugador_2);
    }

    return new Partida(jugador_2, jugador_1);
}

function crear_ronda(jugador_adivinador){

    const palabra_secreta = servicio_palabras.obtener_palabra_aleatoria();

    const ronda = new Ronda(
        jugador_adivinador,
        palabra_secreta
    );

    return ronda;
}

moodule.exports = {
    crear_partida,
    crear_ronda
};