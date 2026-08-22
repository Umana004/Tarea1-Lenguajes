class Ronda {

    constructor(jugador_adivinador, palabra_secreta){
        
        this.jugador_adivinador = jugador_adivinador;
        this.palabra_secreta = palabra_secreta;
        this.intentos = 0;
        this.tiempo = 0;
        this.completada = false;

    }

}

module.exports = Ronda;