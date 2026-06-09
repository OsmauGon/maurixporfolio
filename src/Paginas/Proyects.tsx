
//import { Link } from 'react-router-dom';
import { projects } from '../data/proyectos';
import '../Estilos/proyectos.css'
import ProjectCard from '../Componentes/ProjectCard';
import { useState } from 'react';
import {ProjectSelect} from '../Componentes/SelectComps'

const explicaciones :string[] = [
  "Acontinuacion muestro mis proyectos Full-Stack aplicando mi formacion en Node.js. Fueron planetados en base a resolver o cubrir una necesidad real",
  "Estos proyectos fuero desarrollados a la par del instructor mientras aprendia a usar React y Typescript. Su valor es prepararme para desaios reales",
  "Aqui muestro mis primeros proyectos durante mi formacion en HTML 5, CSS 3 y Javascritp donde mi objetivo fue usar las habilidades optenidas aplicadas a proyectos muy personales",
]

const Projects = () => {
  const [page,setPage] = useState<number >(0)
  
  return (
    <section id='proyectos' className="container pb-5">
      <h3 className="text-center mb-4">Mis Proyectos</h3>
      <ProjectSelect setPage={setPage} explicacion={explicaciones[page / 3]}/>
      <div className="row">
        {projects.slice(page, page + 3).map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;