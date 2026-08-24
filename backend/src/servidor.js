const express = require("express");
const cors = require("cors");
const rutas_partida = require("./rutas/rutas_partida");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", rutas_partida);

const PUERTO = 3000;

app.listen(PUERTO, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PUERTO}`);
});