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

const presentaciones = [
  {
    id: 1,
    primero: "Soy Desarrollador web enfocado en crear aplicaciones modernar, funcionales y escalables. Trabajo principalmente con ReactJS y tecnologías de ecosistema JavaScript, integrando front-end y back-end para desarrollar soluciones completas",
    segundo: "Durante los últimos años me formé de manera autodidacta, y en los ultimos dos me profundicé con práctica constante y proyectos reales donde incorporé herramientas como Node.js, PostgresSQL, Docker, Next.js y despliegue en producción",
    tercero: "Me caracterizo por la constancia, la adptacion rápida a nuevas tecnologias y una mentalidad orientada a resolver problemas y seguir creciendo profesionalmente"
  },
  {
    id: 2,
    primero: "Desarrollador web apasionado por construir productos digitales útiles y bien diseñados. Trabajo con React, Node.js y tecnologías modernas para desarrollar experiencias web completas",
    segundo: "Soy autididacta y disciplinado: considero el aprendizaje continuo parte escencial del trabajo. En cada proyecto fui sumando nuevas herramientas como Docker, autenticacion con JWT, base de datos relacionales y despliegue de serviocios reales",
    tercero: "Busco seguir creciendo en equipos donde pueda aportar, aprender rapido y enfrentar desafíos récnologicos cada vez mayores"
  },
  {
    id: 3,
    primero: "Hace varios años elegi el desarrollo web como camino profesional y desde entonces no dejé de aprender. Empecé formándome por mi cuenta y en los últimos años llevé ese aprendizaje a proyectos concretos, evolucionando desde sitios front-end hasta aplicaciones más completas con back-end e infraestructura",
    segundo: "Trabajo de React, Node.js, PostgresSQL y otras tecnologías actuales. Me definen la constancia, la curiosidad técnica y la capacidad de adaptarme rápido a nuevas herramientas",
    tercero: "Hoy busco una oportunidad donde transormar esa dedicación en valor real dentro de un equipo de trabajo"
  },
]

const About = () => {
  console.log(presentaciones)
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