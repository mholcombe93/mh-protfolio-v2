import './Styles/Nav.css'
import { NavLink } from "react-router-dom"
import { BsGithub } from "react-icons/bs"
import { FaLinkedin } from "react-icons/fa"
import { TfiEmail } from "react-icons/tfi";
import { IoIosPaper } from "react-icons/io"
import ResumePDF from "../PDFS/ResumePDF.pdf"

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
        {/* <NavLink className="navlink" to="/resume">
          Resume
      </NavLink> */}
      <div className='Icon_Container'>
        <p> Connect With Me At:</p>
        <a className='Find_Me_Link'
        href={ResumePDF}
        target="_blank" >
          <IoIosPaper /> Resume
          </a>
        <a className='Find_Me_Link'
          href='https://github.com/mholcombe93/'
          target={'_blank'}
          rel='noreferrer'
        >
          <BsGithub /> Github
        </a>
        <a className='Find_Me_Link'
            href="https://www.linkedin.com/in/matthew-holcombe93/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin /> LinkedIn
        </a>
        <a className='Find_Me_Link'
          href="mailto:mholcombe93@gmail.com">
            <TfiEmail /> e-Mail
        </a>

      </div>
      
    </div>
      
  )
}

export default Nav