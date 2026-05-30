import { motion } from "framer-motion";
import '../Estilos/home.css'
import { Link } from "react-router-dom";
//import { ThemeToggleButton, ThemeToggleSwitch } from "../Componentes/ThemeToggleSwitch";
import { useThemeContext } from "../Contextos/ThemeContext";


 export const Home = () => {
  const {mode} = useThemeContext()
  const descargarCV = () =>{
    console.log("intente descargar el CV")
  }
  console.log(mode)

  return (
    
    <section className="py-5 text-center ">
      <div className="container">
        <motion.h1 
          className="display-4 fw-bold"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          ¡Hola! Soy Mauricio
        </motion.h1>

        <motion.p 
          className="lead mt-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Desarrollador Web enfocado en crear experiencias web únicas con React, TypeScript... y una pizca de creatividad.
        </motion.p>

          <motion.p whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link 
              to="/proyectos"
              className="btn btn-primary btn-lg mt-4"
            >
              Ver proyectos
            </Link>
        </motion.p>
        <motion.a 
          href='CurriculumMauricio.pdf'
          download="CurriculumMauricio.pdf"
          onClick={descargarCV}
          className="btn btn-primary btn-lg mt-4"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Descargar CV
        </motion.a>
      </div>
    </section>
  );
};