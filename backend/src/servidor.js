const express = require("express");

const aplicacion = express();

const puerto = 3000;

aplicacion.get("/api/prueba", (solicitud, respuesta) => {
    respuesta.json({
        mensaje: "Backend funcionando"
    });
});

aplicacion.listen(puerto, () => {
    console.log(`Servidor ejecutándose en http://localhost:${puerto}`);
});
