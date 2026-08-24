const express = require("express");
const controlador_partida = require("../controladores/controlador_partida");

const router = express.Router();

router.post(
    "/partidas",
    controlador_partida.crear_partida
);

router.post(
    "/partidas/:id/rondas",
    controlador_partida.crear_ronda
);

router.post(
    "/partidas/:id/intentos",
    controlador_partida.procesar_intento
);

router.get(
    "/partidas/:id",
    controlador_partida.obtener_partida
);

module.exports = router;