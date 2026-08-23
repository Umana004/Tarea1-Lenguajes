const express = require("express");
const controlador_partida = require("../controladores/controlador_partida");

const router = express.Router();

router.post(
    "/partidas",
    controlador_partida.crear_partida
);

module.exports = router;