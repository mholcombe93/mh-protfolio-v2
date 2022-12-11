import "./Styles/Projects.css";
import dragBoard from "./Images/dragBoard.jpeg";
import BSide from "./Images/BSide.jpeg";
import ShillsFeed from "./Images/ShillsFeed.jpeg";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <>
      <h1>Projects</h1>
      <div className="Project_Parent">
        <div class="Project_Title"> RuPaul's Drag Race Jeopardy</div>
        <div class="Project_Pic1">
          <Link to="/DragRace">
             {" "}
             <img src={dragBoard} alt="Drag Race Board" className="Project_Pic1" />
         </Link>
      </div>
        <div class="Project_Title">B-Side Music </div>
        <div class="Project_Pic2">
          <Link to="/BSide">
             {" "}
             <img src={BSide} alt="B-Side Music" className="Project_Pic1" />
         </Link></div>
        <div class="Project_Title"> Shills: Twitter Clone </div>
        <div class="Project_Pic3">
          <Link to="/Shills">
             {" "}
             <img src={ShillsFeed} alt="Shills" className="Project_Pic1" />
          </Link></div>
      </div>
    </>
  );
}

export default Projects;
