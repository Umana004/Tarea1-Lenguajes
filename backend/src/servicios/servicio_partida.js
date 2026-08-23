const Jugador = require("../modelos/jugador");
const Partida = require("../modelos/partida");
const Ronda = require("../modelos/ronda");
const servicio_palabras = require("./servicio_palabras");
const servicio_intentos = require("./servicio_intentos");
const partidas = require("../datos/partidas");

let siguiente_id_partida = 1;

function crear_partida(nombre_jugador_1, nombre_jugador_2) {
    const jugador_1 = new Jugador(nombre_jugador_1);
    const jugador_2 = new Jugador(nombre_jugador_2);

    let partida;

    if (Math.random() < 0.5) {
        partida = new Partida(
            siguiente_id_partida,
            jugador_1,
            jugador_2
        );
    } else {
        partida = new Partida(
            siguiente_id_partida,
            jugador_2,
            jugador_1
        );
    }

    siguiente_id_partida++;

    partidas.push(partida);

    return partida;
}

function crear_ronda(jugador_adivinador) {
    const palabra_secreta = servicio_palabras.obtener_palabra_aleatoria();

    const ronda = new Ronda(
        jugador_adivinador,
        palabra_secreta
    );

    return ronda;
}

function iniciar_ronda(partida, jugador_adivinador) {
    const ronda = crear_ronda(jugador_adivinador);

    partida.rondas.push(ronda);

    partida.ronda_actual = partida.rondas.length - 1;

    return ronda;
}

function procesar_intento(ronda, intento) {
    return servicio_intentos.procesar_intento(
        ronda,
        intento
    );
}

module.exports = {
    crear_partida,
    crear_ronda,
    iniciar_ronda,
    procesar_intento
};