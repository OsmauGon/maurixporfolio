import '../Estilos/about.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faJsSquare,
  faHtml5,
  faCss3Alt,
  faBootstrap,
  faGitAlt,
  faNodeJs,
} from "@fortawesome/free-brands-svg-icons";

const About = () => {
  return (
    <section className="container py-5">
      {/* Presentación personal */}
      <h3 className="text-center mb-4">Sobre mí</h3>
      <div className="row align-items-center mb-5">
        <div className="col-md-4 text-center mb-3 mb-md-0">
          <img
            src="img/yop.jpg"
            alt="Foto de perfil"
            className="img-fluid rounded-circle"
            style={{ maxWidth: "150px" }}
          />
        </div>
        <div className="col-md-8">
          <p>
            Este portfolio nace como un espacio donde puedo compartir mi crecimiento como desarrollador, 
            mostrar los proyectos que me apasionan y seguir aprendiendo en el camino. Es mi rincón digital, 
            hecho con dedicación y muchas ganas.
          </p>
        </div>
      </div>

      {/* Tecnologías */}
      <h3 className="text-center mb-3">Tecnologías que manejo</h3>
      <div className="d-flex justify-content-center flex-wrap gap-4 mb-5">
        <FontAwesomeIcon icon={faHtml5} size="6x" color="#E44D26" title="HTML5" />
        <FontAwesomeIcon icon={faCss3Alt} size="6x" color="#1572B6" title="CSS3" />
        <FontAwesomeIcon icon={faJsSquare} size="6x" color="#F7DF1E" title="JavaScript" />
        <img src="img/icons8-typescript-96.png" alt="" title='TypeScript'/>
        <FontAwesomeIcon icon={faReact} size="6x" color="#61DAFB" title="React" />
        <FontAwesomeIcon icon={faBootstrap} size="6x" color="#7952B3" title="Bootstrap" />
        <FontAwesomeIcon icon={faGitAlt} size="6x" color="#F1502F" title="Git" />
        <FontAwesomeIcon icon={faNodeJs} size="6x" color="#68A063" title="Node.js" />
        <img src="img/icons8-sql-96.png" alt="" title='Structure Query Language'/>
        </div>

      {/* Habilidades blandas */}
      <h3 className="text-center mb-3">Valores profesionales</h3>
      <ul className="list-group list-group-flush text-center">
        <li className="list-group-item">💬 Comunicación clara y empática</li>
        <li className="list-group-item">🎯 Orientación a resultados y aprendizaje continuo</li>
        <li className="list-group-item">🤝 Trabajo en equipo y colaboración</li>
        <li className="list-group-item">🔍 Atención al detalle y pensamiento analítico</li>
      </ul>
    </section>
  );
};

export default About;