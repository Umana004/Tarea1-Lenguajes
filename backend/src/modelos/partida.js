class Partida {
    constructor(id, jugador_1, jugador_2) {
        this.id = id;
        this.jugador_1 = jugador_1;
        this.jugador_2 = jugador_2;
        this.rondas = [];
        this.ronda_actual = 0;
        this.estado = "en_curso";
    }
}

module.exports = Partida;