import '../Estilos/footer.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faCodepen
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-3 fixed-bottom">
      <div className="container text-center d-flex gap-4 justify-content-center">
        <p className="mb-2">Visitame en</p>
        <div className="d-flex justify-content-center gap-4">
          <a href="https://github.com/OsmauGon" target="_blank" rel="noopener noreferrer" className="text-light">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a href="https://www.linkedin.com/in/oscar-mauricio-gonzalez" target="_blank" rel="noopener noreferrer" className="text-light">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a href="https://codepen.io/MauriXx" target="_blank" rel="noopener noreferrer" className="text-light">
            <FontAwesomeIcon icon={faCodepen} size="2x" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;