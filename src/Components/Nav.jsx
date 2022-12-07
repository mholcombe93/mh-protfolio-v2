import './Styles/Nav.css'
import { NavLink } from "react-router-dom"

function Nav() {
  return (
    <>
      <div className="Nav_Contatiner">
      <div className="nav-desktop">
        <NavLink className="navlink" to="/">
          Home
        </NavLink>
        <NavLink className="navlink" to="/about">
          About Me
        </NavLink>
        <NavLink className="navlink" to="/projects">
          Projects
        </NavLink>
        <NavLink className="navlink" to="/resume">
          Resume
        </NavLink>
      </div>
    </div>
      
      
    </>
  )
}

export default Nav