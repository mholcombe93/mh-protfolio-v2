import './Styles/Nav.css'
import { NavLink } from "react-router-dom"
import { BsGithub } from "react-icons/bs"
import { FaLinkedin } from "react-icons/fa"
import { TfiEmail } from "react-icons/tfi";

function Nav() {
  return (
  
    <div className="Nav_Container">
  
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
      <div className='Icon_Container'>
        <p> Find Me On:</p>
        <a
          href='https://github.com/mholcombe93/'
          target={'_blank'}
          rel='noreferrer'
        >
          <BsGithub /> Github
        </a> {" "}
        <a
            href="https://www.linkedin.com/in/matthew-holcombe93/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin /> LinkedIn
        </a>{" "}
        <a href="mailto:mholcombe93@gmail.com">
            <TfiEmail /> e-mail
          </a>{" "}

      </div>
      
    </div>
      
  )
}

export default Nav