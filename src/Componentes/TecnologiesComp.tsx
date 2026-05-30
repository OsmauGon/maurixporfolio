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
// 1. Importas los íconos desde el paquete solid
import { faCode, faDatabase } from '@fortawesome/free-solid-svg-icons';


type Props = {}

export const TecnologiesComp = (props: Props) => {
  return (
          <div className="d-flex justify-content-center flex-wrap gap-4 mb-5">
            <div className="fendtecs">
                <h5>Front-end</h5>
                <div>
                    <FontAwesomeIcon icon={faHtml5} size="6x" color="#E44D26" title="HTML5" />
                <FontAwesomeIcon icon={faCss3Alt} size="6x" color="#1572B6" title="CSS3" />
                <FontAwesomeIcon icon={faJsSquare} size="6x" color="#F7DF1E" title="JavaScript" />
                <FontAwesomeIcon icon={faBootstrap} size="6x" color="#7952B3" title="Bootstrap" />
            
                </div>
            </div>
            <div className="bendtecs">
                <h5>Back-end</h5>
                <div>
                    
                <img src="img/icons8-typescript-96.png" alt="" title='TypeScript'/>
                <FontAwesomeIcon icon={faReact} size="6x" color="#61DAFB" title="React" />
                {/* <FontAwesomeIcon icon={faGitAlt} size="6x" color="#F1502F" title="Git" /> */}
                <FontAwesomeIcon icon={faNodeJs} size="6x" color="#68A063" title="Node.js" />
                <img src="img/icons8-sql-96.png" alt="" title='Structure Query Language'/>
                
                </div>
            </div>
            <div className="moretecs">
                <h5>Mas...</h5>
                <div>
                 {/*Git hub, Postman */}   
                <img src="img/icons8-typescript-96.png" alt="" title='TypeScript'/>
                <FontAwesomeIcon icon={faReact} size="6x" color="#61DAFB" title="React" />
                {/* <FontAwesomeIcon icon={faGitAlt} size="6x" color="#F1502F" title="Git" /> */}
                <FontAwesomeIcon icon={faNodeJs} size="6x" color="#68A063" title="Node.js" />
                <img src="img/icons8-sql-96.png" alt="" title='Structure Query Language'/>
                
                </div>
            </div>
            
        </div>
  )
}