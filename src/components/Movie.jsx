import React from 'react';
export default function Movie({ movieObject, onDelete }) {
    // Protegemos si movieObject es undefined o null
    if (!movieObject) return null;

    const { name, year, description } = movieObject;

    return (
        <li>
            <h3>{name} ({year})</h3>
            <p>{description}</p>
            <button onClick={() => onDelete(name)}>Eliminar</button>
        </li>
    );
}