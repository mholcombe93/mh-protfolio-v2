import "./Styles/Home.css";
import { BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";
import { GiQueenCrown } from "react-icons/gi";
import dragBoard from "./Images/dragBoard.jpeg";
import DragOpen from "./Images/DragOpen.jpeg";
import DragWin from "./Images/DragWin.png";

function DragRace() {
  return (
    <div className="Bio_content">
      <h1 className="Home_text"> RuPaul's DragRace Jeopardy Game </h1>
      <break></break>
      <p className="Home_text"> Built with Javascript, Html, and CSS </p>
      <p>
        {" "}
        This highly stylized game uses Javascript classes to create the tiles of
        Jeopardy then maps with the information stored in the JS file. Features
        include: Score keeping, inability to click off a question until
        answered, and inability to reselect a question once answered.
      </p>
      <div className="Pics_Container">
        <img src={dragBoard} alt="Drag Race Board" className="DR_Project_Pic" />
        <img src={DragOpen} alt="Drag Race Board" className="DR_Project_Pic" />
        <img src={DragWin} alt="Drag Race Board" className="DR_Project_Pic" />
      </div>

      <a
        className="Find_Me_Link"
        href="https://github.com/mholcombe93/Drag-Race-Jeoprady-Trivia"
        target={"_blank"}
        rel="noreferrer"
      >
        <BsGithub /> Github
      </a>
      <a
        className="Find_Me_Link"
        href="https://drag-race-jeopardy.netlify.app/"
        target={"_blank"}
        rel="noreferrer"
      >
        <GiQueenCrown /> Game
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

export default DragRace;
