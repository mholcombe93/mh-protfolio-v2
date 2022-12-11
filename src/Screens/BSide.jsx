import './Styles/Home.css'
import { BsGithub } from "react-icons/bs";
import { GiAudioCassette } from "react-icons/gi"
import BSideGenre from "./Images/BSide.jpeg";
import BSideHome from "./Images/BSideHome.png";
import BSideAlbums from "./Images/BSideAlbums.png";
import { Link } from "react-router-dom";

function BSide() {

  return (
    <div className="Bio_content">
      <h1 className='Home_text'>  B-Side Music Fan Site </h1>
      <break></break>
       <p className="Home_text"> Built with React, CSS, MongoDB, Node </p>
      <p>
        {" "}
        A full CRUD fan site to showcase artists with a lesser fanbase. API built in Mongo to host Artists, Albums, Songs, Years, Genres and more.
        Front end allows for adding in artist and albums. Acted as project manager of a group of 5 to create and host site.
      </p>
      <div className="Pics_Container">
        <img src={BSideGenre} alt="Drag Race Board" className="DR_Project_Pic" />
        <img src={BSideHome} alt="Drag Race Board" className="DR_Project_Pic" />
        <img src={BSideAlbums} alt="Drag Race Board" className="DR_Project_Pic" />
      </div>

      <a
        className="Find_Me_Link"
        href="https://github.com/mholcombe93/maltm-records-front-end"
        target={"_blank"}
        rel="noreferrer"
      >
        <BsGithub /> Github
      </a>
      <a
        className="Find_Me_Link"
        href="https://b-side-music-ga.netlify.app/"
        target={"_blank"}
        rel="noreferrer"
      >
        <GiAudioCassette/> Tune In!
      </a>

      {/* 
      <button className="button1">
        {" "}
        <Link className="project-link" to="/projects">
          Back to Projects
        </Link>
      </button> */}
    </div>



);
}

export default BSide;