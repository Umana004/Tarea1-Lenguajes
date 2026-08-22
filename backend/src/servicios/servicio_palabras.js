const palabras = require("../datos/palabras");

function obtener_palabra_aleatoria(){

    const indice = Math.floor(Math.random() * palabras.length);

    return palabras[indice];
}

module.exports = {
    obtener_palabra_aleatoria
};
