
//import { Link } from 'react-router-dom';
import { projects } from '../data/proyectos';
import '../Estilos/proyectos.css'
import ProjectCard from '../Componentes/ProjectCard';
import { useState } from 'react';

const explicaciones :string[] = [
  "Acontinuacion muestro mis proyectos Full-Stack aplicando mi formacion en Node.js. Fueron planetados en base a resolver o cubrir una necesidad real",
  "Estos proyectos fuero desarrollados a la par del instructor mientras aprendia a usar React y Typescript. Su valor es prepararme para desaios reales",
  "Aqui muestro mis primeros proyectos durante mi formacion en HTML 5, CSS 3 y Javascritp donde mi objetivo fue usar las habilidades optenidas aplicadas a proyectos muy personales",
]

const Projects = () => {
  const [page,setPage] = useState<number >(0)
  
  return (
    <section id='proyectos' className="container py-5">
      <h3 className="text-center mb-4">Mis Proyectos</h3>
      <div className="selectp">
        <select name="" id="sel" onChange={(e)=>{setPage(Number(e.target.value))}}>
          <option value={0}>Profesionales</option>
          <option value={3}>Practicas</option>
          <option value={6}>Hobbies</option>
        </select>
        <p className="explicacion">{explicaciones[page / 3]}</p>
      </div>
      {/* <div id="carouselProyectos" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {projects.slice(2,5).map((proy, idx) => (//con esto mostramos inmocasa, tiendashop y pokedecks
            <div className={`carousel-item ${idx === 0 ? "active" : ""}`} key={idx}>
              <div className="card mx-auto shadow" style={{ maxWidth: "800px" }}>
                <img src={proy.imagen} className="card-img-top" alt={`Preview de ${proy.titulo}`} />
                <div className="card-body text-center">
                  <h4 className="card-title">{proy.titulo}</h4>
                  <p className="card-text">{proy.descripcion}</p>
                  <p className="t">
                    {proy.tecnologias.join(" · ")}
                  </p>
                  <div> {(proy.demo.length == 0) ? <Link to={`/proyecto/${proy.slug}`} className="btn btn-primary btn-sm me-2" title='Prototipo'>Ver demo</Link>
                                              : <a href={proy.demo}
                                                  onClick={(e) => {
                                                    e.preventDefault();
                                                    window.open(proy.demo, "_blank", "noopener,noreferrer");
                                                  }} className="btn btn-primary btn-sm me-2" title='Prototipo'>Ver proto</a>
                    }

                     <a
                        href={proy.repo}
                        onClick={(e) => {
                          e.preventDefault();
                          window.open(proy.repo, "_blank", "noopener,noreferrer");
                        }}
                        className="btn btn-outline-primary btn-sm"
                      >
                        Ver código
                      </a>

                  
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        //Flechas 
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselProyectos" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Anterior</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselProyectos" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Siguiente</span>
        </button>
      </div> */}
      <div className="row">
        {projects.slice(page, page + 3).map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;