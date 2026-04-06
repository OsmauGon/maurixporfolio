import '../Estilos/proyectos-vista.css'
import { Link, useParams } from "react-router-dom";
import {projects} from '../data/proyectos';

const ProjectViewPage = () => {
  const { slug } = useParams();
  const proyecto = projects.find((p) => p.slug === slug);

  if (!proyecto) return <p>Proyecto no encontrado.</p>;

  return (
    <section id='proyectos-vista' className="container py-4">
      <h3>{proyecto.titulo}</h3>
      <p>{proyecto.descripcion}</p>
      <video src={proyecto.video} controls className="img-fluid" />
      <br />
      <Link to="/proyectos" className="btn btn-outline-secondary mt-1">← Volver Proyectos</Link>
    </section>
  );
};

export default ProjectViewPage;