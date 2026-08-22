const Jugador = require("../modelos/jugador");
const Partida = require("../modelos/partida");
const Ronda = require("../modelos/ronda");
const servicio_palabras = require("./servicio_palabras");
const servicio_intentos = require("./servicio_intentos");

function crear_partida(nombre_jugador_1, nombre_jugador_2) {
    const jugador_1 = new Jugador(nombre_jugador_1);
    const jugador_2 = new Jugador(nombre_jugador_2);

    if (Math.random() < 0.5) {
        return new Partida(jugador_1, jugador_2);
    }

    return new Partida(jugador_2, jugador_1);
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