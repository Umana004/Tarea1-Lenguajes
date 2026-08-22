const Ronda = require("./ronda")

class Partida {

    constructor(jugador_1, jugador_2){

        this.jugador_1 = jugador_1; 
        this.jugador_2 = jugador_2;
        this.rondas = [];
        this.estado = "en_curso";

    }
}

moodule.exports = Partida;