/**
 * Component Card debe tener:
 * 1. Imagen en carpeta public
 * 2. Una parte con texto donde irá el Nombre
 * 3. 2 links:
 *    - GitHub
 *   - linkedIn
 * 4. Un objeto por elemento a darle estilo
 */

export default function Card() {
    const cardStyle = {
        border: '3px solid #edc84b',
        borderRadius: '10px',
        padding: '16px',
        margin: '16px',
        textAlign: 'center',
    };

    const imageStyle = {
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        marginBottom: '16px',
        objectFit: 'cover',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    };

    const titleStyle = {
        fontSize: '1.5em',
        margin: '8px 0',
        color: '#333',
        backgroundColor: '#edc84b',
        padding: '8px',
        borderRadius: '25px',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
    };

    const linkStyle = {
        margin: '0 8px',
        textDecoration: 'none',
        color: '#007bff',
        fontWeight: 'bold',
        border: '1px solid #007bff',
        padding: '1px 16px',
        borderRadius: '25px',
    };

    return (
        <div style={cardStyle}>
            <img src="./public/images/karim.png" alt="Karim" style={imageStyle} />
            <h2 style={titleStyle}>Karim Rangel</h2>
            <div>
                <a style={linkStyle} href="https://github.com/NolimitKarim" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a style={linkStyle} href="https://www.linkedin.com/in/karimrangel/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
        </div>
    );
}
