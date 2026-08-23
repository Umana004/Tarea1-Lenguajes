const servicio_partida = require("../servicios/servicio_partida");

function crear_partida(req, res) {
    const { nombre_jugador_1, nombre_jugador_2 } = req.body;

    const partida = servicio_partida.crear_partida(
        nombre_jugador_1,
        nombre_jugador_2
    );

    res.status(201).json(partida);
}

module.exports = {
    crear_partida
};