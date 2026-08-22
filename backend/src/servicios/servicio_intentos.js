function validar_intento(intento, palabra_secreta){

    return intento.length === palabra_secreta.length;

}

function generar_pistas(intento, palabra_secreta){
    const pistas = [];

    for (let posicion = 0; posicion < palabra_secreta.length; posicion++){

        if (intento[posicion] === palabra_secreta[posicion]){
            pistas.push(
                'El caracter de la posición ${posicion + 1} es correcto'
            );
        }
    }
    
    return pistas;
}

function procesar_intento(ronda, intento){

    if (!validar_intento(intento, ronda.palabra_secreta)) {
        return {
            acierto: false,
            valido: false,
            mensaje: "El intento debe tener la misma longitud que la palabra secreta",
            pistas: [],
            intentos: ronda.intentos
        };
    }

    ronda.intentos++;

    const pistas = generar_pistas(intento, ronda.palabra_secreta);

    const acierto = intento === ronda.palabra_secreta;

    if (acierto){
        ronda.completada = true;
    }

    return {acierto, pistas, intentos: ronda.intentos};
}

module.exports = {

    validar_intento,
    generar_pistas,
    procesar_intento
};
