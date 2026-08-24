import { useState } from "react";
import { crear_partida } from "./servicios/api";

function App() {
    const [nombre_jugador_1, setNombreJugador1] = useState("");
    const [nombre_jugador_2, setNombreJugador2] = useState("");
    const [partida, setPartida] = useState(null);

    async function manejar_crear_partida() {
        if (
            nombre_jugador_1.trim() === "" ||
            nombre_jugador_2.trim() === ""
        ) {
            return;
        }

        const nueva_partida = await crear_partida(
            nombre_jugador_1,
            nombre_jugador_2
        );

        setPartida(nueva_partida);
    }

    return (
        <main>
            <h1>Batalla de Palabras</h1>

            {!partida ? (
                <section>
                    <h2>Nueva partida</h2>

                    <input
                        type="text"
                        placeholder="Jugador 1"
                        value={nombre_jugador_1}
                        onChange={(evento) =>
                            setNombreJugador1(evento.target.value)
                        }
                    />

                    <input
                        type="text"
                        placeholder="Jugador 2"
                        value={nombre_jugador_2}
                        onChange={(evento) =>
                            setNombreJugador2(evento.target.value)
                        }
                    />

                    <button onClick={manejar_crear_partida}>
                        Crear partida
                    </button>
                </section>
            ) : (
                <section>
                    <h2>Partida creada</h2>

                    <p>Partida: {partida.id}</p>
                    <p>
                        {partida.jugador_1.nombre} vs{" "}
                        {partida.jugador_2.nombre}
                    </p>

                    <p>Estado: {partida.estado}</p>
                </section>
            )}
        </main>
    );
}

export default App;