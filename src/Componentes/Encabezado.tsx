import '../Estilos/encabezado.css'
import { NavLink } from 'react-router-dom'
import { ThemeToggleButton } from './ThemeToggleSwitch'
import { useThemeContext } from '../Contextos/ThemeContext'



const enlaces = [
    {id: 1,label_e: "Home",label_s: "Inicio",link:"/"},
    {id: 2,label_e: "About Me",label_s: "Sobre Mi",link:"/sobre-mi"},
    {id: 3,label_e: "Projects",label_s: "Proyectos",link:"/proyectos"},
    //{id: 4,label_e: "Galery",label_s: "Galeria",link:"/galery"},
    {id: 5,label_e: "Contact",label_s: "Contacto",link:"/contacto"},
]
export const Encabezado = () => {
  const {mode} = useThemeContext()
  return (
    <header className={`porfolio-header ${
        mode === 'light' ? "light-header" : "dark-header"}`}>
        <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid">
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" ></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    {enlaces.map(i=>(
                        <li key={i.id} className="nav-item">
                            <NavLink className={({ isActive }) =>
                                                isActive
                                                ? "nav-link nice-link-active"
                                                : "nav-link nice-link"
                                            } to={i.link}>{i.label_s}</NavLink>
                        </li>
                    ))}
                </ul>
                <ThemeToggleButton />
                </div>
            </div>
        </nav>
    </header> 
  )
}
