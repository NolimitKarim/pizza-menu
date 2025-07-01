import Card from "../components/Card"
import Movie from "../components/Movie"
import Footer from "../components/Footer"

export default function Owner() {
    return (
        <div className='container'>
            <h1>Owner Page</h1>
            <p>Soy Desarrollador FullStack java con formación en Ciencias de la Computación y experiencia en desarrollo de software
                orientado a objetos. Apasionado por crear soluciones robustas tanto en frontend como backend, utilizando tecnologías
                como Java, Spring Boot, MySQL, HTML, Bootstrap, CSS y JavaScript. Poseo habilidades sólidas en análisis de
                requerimientos, diseño de sistemas, pruebas y despliegue. Excelente capacidad para trabajar en equipo, resolver
                problemas y adaptarse a entornos ágiles.</p>
            <Card />
            <Movie />
            <Footer />
        </div>
    )
}
