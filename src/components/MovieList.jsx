import Movie from "./Movie";
import { useState, useEffect } from "react";

export default function MovieList() {
    const [movies, setMovies] = useState([
        {
            name: "Inception",
            description: "A thief who steals corporate secrets through the use of dream-sharing technology.",
            year: 2010,
        },
        {
            name: "The Matrix",
            description: "A computer hacker learns about the true nature of his reality and his role in the war against its controllers.",
            year: 1999,
        },
        {
            name: "Interstellar",
            description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
            year: 2014,
        }
    ]);

    // Cargar desde localStorage y validar formato
    useEffect(() => {
        try {
            const data = localStorage.getItem("movies");
            if (data) {
                const parsed = JSON.parse(data);
                if (Array.isArray(parsed)) {
                    const validMovies = parsed.filter((m) => {
                        const isValid =
                            m &&
                            typeof m.name === "string" &&
                            typeof m.description === "string" &&
                            typeof m.year === "number";
                        if (!isValid) console.warn("Película inválida encontrada y descartada:", m);
                        return isValid;
                    });
                    setMovies(validMovies.length ? validMovies : []);
                }
            }
        } catch (error) {
            console.error("Error leyendo películas desde localStorage:", error);
        }
    }, []);

    // Guardar en localStorage cada vez que cambien las películas
    useEffect(() => {
        localStorage.setItem("movies", JSON.stringify(movies));
    }, [movies]);

    // Eliminar película por nombre
    const handleDelete = (name) => {
        setMovies(movies.filter((movie) => movie.name !== name));
    };

    return (
        <ul className="movie-list">
            {movies.length === 0 ? (
                <li className="empty">🎬 No hay películas en la lista</li>
            ) : (
                movies.map((movie) => (
                    // Mejor usar index como key solo si no hay id único (aquí name es único, así que está bien usar name)
                    <Movie key={movie.name} movieObject={movie} onDelete={handleDelete} />
                ))
            )}
        </ul>
    );
}