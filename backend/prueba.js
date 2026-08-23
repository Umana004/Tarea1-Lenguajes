const servicio_partida = require("./src/servicios/servicio_partida");
const partidas = require("./src/datos/partidas");

const partida = servicio_partida.crear_partida(
    "Steven",
    "Carlos"
);

console.log("Jugador 1:", partida.jugador_1.nombre);
console.log("Jugador 2:", partida.jugador_2.nombre);
console.log("ID de la partida:", partida.id);

const ronda = servicio_partida.iniciar_ronda(
    partida,
    partida.jugador_1
);

console.log("Ronda actual:", partida.ronda_actual);
console.log("Cantidad de rondas:", partida.rondas.length);
console.log("Palabra secreta:", ronda.palabra_secreta);

const resultado = servicio_partida.procesar_intento(
    ronda,
    "computar"
);

console.log("Resultado del intento:");
console.log(resultado);

console.log("Cantidad de partidas almacenadas:", partidas.length);
console.log("Partida almacenada:", partidas[0].id);