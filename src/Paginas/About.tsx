import '../Estilos/about.css'
import { TecnologiesComp } from '../Componentes/TecnologiesComp';

/* const presentaciones = [
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
] */
const  softskills :string[] = [
  "💬 Comunicación clara y empática",
  "🎯 Orientación a resultados y aprendizaje continuo",
  "🤝 Trabajo en equipo y colaboración",
  "🔍 Atención al detalle y pensamiento analítico",
]

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
            style={{ maxWidth: "220px" }}
          />
        </div>
        <div className="col-md-8">
          <p>
            Me considero un desarrollador que planifica, investiga y prueba en cada componente de sus proyectos. Comence usando HTML, CSS y Javascript y con practicas de cursos aplique React, Typescript y Node para dar un paso hacia adelante en mi especializacion. Hoy en dia trabajo en proyectos de identidad profesional para seguir aprendiendo.
          </p>
          <p>Gracias a mis proyectos personales he desarrollado experiencia en:</p>
          <ul>
            <li>Optimazacion de UX/UI</li>
            <li>Modularizacion y escalabilidad</li>
            <li>Manejo de versiones</li>
            <li>Despliegues</li>
            <li>Arquitectura de paneles administrativos</li>
            <li>Trabajo con clientes</li>
            <li>Diseño de MVPs</li>
          </ul>
        </div>
      </div>

      {/* Tecnologías */}
      <h3 className="text-center mb-3">Tecnologías que manejo</h3>
      <TecnologiesComp />

      {/* Habilidades blandas */}
      <h3 className="text-center mb-3">Valores profesionales</h3>
      <ul className="list-group list-group-flush text-center soft-skills">
        {softskills.map((item, index) => (
          <li key={index} className="list-group-item bg-transparent">
            <p>{item}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default About;