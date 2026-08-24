const servicio_partida = require("../servicios/servicio_partida");

function crear_partida(req, res) {
    const { nombre_jugador_1, nombre_jugador_2 } = req.body;

    const partida = servicio_partida.crear_partida(
        nombre_jugador_1,
        nombre_jugador_2
    );

    res.status(201).json(partida);
}

function crear_ronda(req, res) {
    const id_partida = Number(req.params.id);

    const partida = servicio_partida.obtener_partida(id_partida);

    if (partida === null) {
        return res.status(404).json({
            mensaje: "La partida no existe"
        });
    }

    const jugador_adivinador = partida.jugador_1;

    const ronda = servicio_partida.iniciar_ronda(
        partida,
        jugador_adivinador
    );

    res.status(201).json({
        id_partida: partida.id,
        ronda_actual: partida.ronda_actual,
        jugador_adivinador: jugador_adivinador.nombre,
        longitud_palabra: ronda.palabra_secreta.length
    });
}

function procesar_intento(req, res) {
    const id_partida = Number(req.params.id);
    const { intento } = req.body;

    const partida = servicio_partida.obtener_partida(id_partida);

    if (partida === null) {
        return res.status(404).json({
            mensaje: "La partida no existe"
        });
    }

    if (partida.rondas.length === 0) {
        return res.status(400).json({
            mensaje: "La partida todavía no tiene una ronda"
        });
    }

    const ronda = partida.rondas[partida.ronda_actual];

    const resultado = servicio_partida.procesar_intento(
        ronda,
        intento
    );

    res.status(200).json(resultado);
}

function obtener_partida(req, res) {
    const id_partida = Number(req.params.id);

    const partida = servicio_partida.obtener_partida(id_partida);

    if (partida === null) {
        return res.status(404).json({
            mensaje: "La partida no existe"
        });
    }

    const ronda_actual = partida.rondas[partida.ronda_actual];

    const respuesta = {
        id: partida.id,
        jugador_1: partida.jugador_1,
        jugador_2: partida.jugador_2,
        rondas: partida.rondas.length,
        ronda_actual: partida.ronda_actual,
        estado: partida.estado
    };

    if (ronda_actual) {
        respuesta.longitud_palabra = ronda_actual.palabra_secreta.length;
        respuesta.intentos = ronda_actual.intentos;
    }

    res.status(200).json(respuesta);
}

module.exports = {
    crear_partida,
    crear_ronda,
    procesar_intento,
    obtener_partida
};