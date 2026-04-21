{/**
    Toma el rol de un desarrollador front-end. Debes crear un componente para React hecho con typescript que se llame ProjectCard
    ProjectCard es un componente reutilizable que renderiza esteticamente con Bootstrap un proyecto de para mostrar en un profolio
    El componente padre mapea el array de objetos e invoca a ProjectCard pasandole el objeto proyecto actual.
    un objeto proyecto tiene los siguientes atributos
    *titulo(obligatorio): nombre del proyecto que debe ser mas grade qe el texto normal
    *descripcion(obligatorio): breve resumen de maximo 100 caracteres 
    *tecnologias(obligatorio): pequeños iconos de las tecnologias usadas
    *repo(obligatorio): url de github al repositorio
    *demo(opsional): url del proyecto desplegado
    *video(opsional): url interno de video explicativo
    *imagen(obligatorio): url insterna de imagen de muestra
    *documento(obligatorio): url interno de documento txt con toda la info del proyecto
    */}



    
import React, { useState } from 'react';
import { ProjectCardProps} from '../Tipados/projects-types'
//import 'bootstrap/dist/css/bootstrap.min.css';

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [showModal, setShowModal] = useState(false);
  const [documentContent, setDocumentContent] = useState<string>('');
  const [loading, setLoading] = useState(false);

  // Truncar descripción si es necesario
  const truncatedDescription = project.descripcion.length > 100 
    ? `${project.descripcion.substring(0, 100)}...` 
    : project.descripcion;

  // Cargar documento
  const loadDocument = async () => {
    setLoading(true);
    try {
      const response = await fetch(project.documento);
      const text = await response.text();
      setDocumentContent(text);
      setShowModal(true);
    } catch (error) {
      console.error('Error loading document:', error);
      setDocumentContent('Error al cargar el documento');
      setShowModal(true);
    } finally {
      setLoading(false);
    }
  };

  // Iconos de tecnologías (puedes personalizar según tus necesidades)
  /*const getTechIcon = (tech: string) => {
    const icons: { [key: string]: string } = {
      react: '⚛️',
      vue: '💚',
      angular: '🅰️',
      node: '💚',
      python: '🐍',
      java: '☕',
      typescript: '📘',
      javascript: '💛',
      html5: '🌐',
      css3: '🎨',
      bootstrap: '🅱️',
      tailwind: '🎯',
      mongodb: '🍃',
      postgresql: '🐘',
      mysql: '🗄️',
      docker: '🐳',
      git: '📦',
      github: '🐙',
      default: '💻'
    };
    
    return icons[tech.toLowerCase()] || icons.default;
  };*/
  const getTechIcon2 = (tech: string) => {
    const icons: { [key: string]: string } = {
      react: "⚛️-www.netflix.com",
      vue: "💚-www.netflix.com",
      angular: "🅰️-www.netflix.com",
      node: "💚-www.netflix.com",
      typescript: "📘-www.netflix.com",
      javascript: "💛-www.netflix.com",
      html5: "🌐-www.netflix.com",
      css3: "🎨-www.netflix.com",
      bootstrap: "🅱️-www.netflix.com",
      mongodb: "🍃-www.netflix.com",
      postgresql: "🐘-www.netflix.com",
      mysql: "🗄️-www.netflix.com",
      docker: "🐳-www.netflix.com",
      git: "📦-www.netflix.com",
      github: "🐙-www.netflix.com",
      default: "💻-www.netflix.com"
    };
    
    return icons[tech.toLowerCase()] || icons.default;
  };

  return (
    <>
      <div className=" col-md-6 col-lg-4 mb-4">
        <div className="project-card card h-100 shadow-sm border-0 rounded-3 overflow-hidden">
          {/* Imagen del proyecto */}
          <div className="position-relative" style={{ height: '200px', overflow: 'hidden' }}>
            <img 
              src={project.imagen} 
              className="card-img-top w-100 h-100" 
              alt={project.titulo}
              style={{ objectFit: 'cover' }}
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://via.placeholder.com/300x200?text=Imagen+no+disponible';
              }}
            />
            {project.video && project.video.length > 1 && (
              <div className="position-absolute top-0 end-0 m-2">
                <button 
                  className="btn btn-sm btn-danger rounded-circle"
                  onClick={() => window.open(project.video, '_blank')}
                  title="Ver video explicativo"
                >
                  ▶️
                </button>
              </div>
            )}
          </div>

          <div className="card-body">
            {/* Título */}
            <h4 className="card-title h4 mb-2 fw-bold">{project.titulo}</h4>
            
            {/* Descripción */}
            <p className="card-text text-muted mb-3" style={{ fontSize: '0.95rem' }}>
              {truncatedDescription}
            </p>

            {/* Tecnologías base*/}
            <div className="mb-1">
              <small className="text-muted d-block mb-2">Tecnologías base:</small>
              <div className="d-flex flex-wrap gap-2">
                {project.tecnobase.map((tech, index) => (
                  <span 
                    key={index} 
                    className="badge bg-light text-dark border px-3 py-2 rounded-pill"
                    style={{ fontSize: '0.6rem' }}
                  >
                    {/* <span className="me-1">{getTechIcon(tech)}</span> */}
                    <a href={getTechIcon2(tech).split("-")[1]} className="me-1" target='blank'>{getTechIcon2(tech).split("-")[0]}</a>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            {/* Tecnologías extras*/}
            {project.tecnoextra && <div className="mb-3">
              <small className="text-muted d-block mb-2">Tecnologías extra:</small>
              <div className="d-flex flex-wrap gap-2">
                {project.tecnoextra.map((tech, index) => (
                  <span 
                    key={index} 
                    className="badge bg-light text-dark border px-3 py-2 rounded-pill"
                    style={{ fontSize: '0.75rem' }}
                  >
                    <a href={getTechIcon2(tech).split("-")[1]} className="me-1" target='blank'>{getTechIcon2(tech).split("-")[0]}</a>
                    {tech}
                  </span>
                ))}
              </div>
            </div>}
          </div>

          <div className="card-footer bg-transparent border-top-0 pt-0 pb-3">
            <div className="d-flex gap-2 flex-wrap">
              {/* Botón GitHub */}
              <a 
                href={project.repo} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-dark btn-sm"
              >
                <span className="me-1">🐙</span> GitHub
              </a>

              {/* Botón Demo (si existe) */}
              {project.demo && (
                <a 
                  href={project.demo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-sm"
                >
                  <span className="me-1">🚀</span> Demo
                </a>
              )}

              {/* Botón Documento */}
              <button 
                onClick={loadDocument}
                className="btn btn-outline-secondary btn-sm"
                disabled={loading}
              >
                <span className="me-1">📄</span> 
                {loading ? 'Cargando...' : 'Doc'}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal para mostrar el documento */}
      {showModal && (
        <div 
          className="modal show d-block" 
          tabIndex={-1} 
          style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
          onClick={() => setShowModal(false)}
        >
          <div className="modal-dialog modal-lg" onClick={(e) => e.stopPropagation()}>
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Documentación - {project.titulo}</h5>
                <button 
                  type="button" 
                  className="btn-close" 
                  onClick={() => setShowModal(false)}
                ></button>
              </div>
              <div className="modal-body" style={{ maxHeight: '60vh', overflowY: 'auto' }}>
                <pre className="white-space-pre-wrap" style={{ fontFamily: 'monospace' }}>
                  {documentContent}
                </pre>
              </div>
              <div className="modal-footer">
                <button 
                  type="button" 
                  className="btn btn-secondary" 
                  onClick={() => setShowModal(false)}
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;