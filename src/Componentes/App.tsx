import Encabezado from "./Encabezado"
import Footer from './Footer'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import {Home} from "../Paginas/Home"
import About from "../Paginas/About"
import Proyects from "../Paginas/Proyects"
import {Contact} from "../Paginas/Contact"
import  ProjectViewPage  from "../Paginas/ProjectViewPage"
Contact
export const App = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
    <Router>
        
        <Encabezado></Encabezado>
        <main className="container mt-4 flex-grow-1">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sobre-mi" element={<About />} />
                <Route path="/contacto" element={<Contact />} />
                <Route path="/proyectos" element={<Proyects />} />
                <Route path="/proyecto/:slug" element={<ProjectViewPage />} />
                
            </Routes>

        </main>
        <Footer></Footer>
    </Router>
    </div>
  )
}