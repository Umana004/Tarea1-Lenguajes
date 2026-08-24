const URL_API = "http://localhost:3000/api";

export async function crear_partida(nombre_jugador_1, nombre_jugador_2) {
    const respuesta = await fetch(`${URL_API}/partidas`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nombre_jugador_1,
            nombre_jugador_2
        })
    });

    return await respuesta.json();
}

export async function crear_ronda(id_partida) {
    const respuesta = await fetch(
        `${URL_API}/partidas/${id_partida}/rondas`,
        {
            method: "POST"
        }
    );

    return await respuesta.json();
}

export async function enviar_intento(id_partida, intento) {
    const respuesta = await fetch(
        `${URL_API}/partidas/${id_partida}/intentos`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                intento
            })
        }
    );

    return await respuesta.json();
}

export async function obtener_partida(id_partida) {
    const respuesta = await fetch(
        `${URL_API}/partidas/${id_partida}`
    );

    return await respuesta.json();
}