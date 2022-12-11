import "./Styles/Home.css";
import { BsGithub } from "react-icons/bs";
import { BsCoin } from "react-icons/bs";
import ShillsFeed from "./Images/ShillsFeed.jpeg";
import ShillsCrypto from "./Images/ShillsCrypto.png";
import ShillsProfile from "./Images/ShillsProfile.png";
import { Link } from "react-router-dom";

function Shills() {
  return (
    <div className="Bio_content">
    <h1 className="Home_text"> Shills Twitter Clone Project </h1>
    <break></break>
    <p className="Home_text"> Built with React, CSS , Tailwinds, Python, Django Rest, SQL </p>
    <p>
      {" "}
        A mock of Twitter based on the finance industry, a place to share all your financial secrets. Backend built with Django Rest using user authentication stored in cookies.
        Frontend boasts live feed updates, full CRUD functional profile pages and a live crypto currency tracker.
    </p>
    <div className="Pics_Container">
      <img src={ShillsFeed} alt="Drag Race Board" className="DR_Project_Pic" />
      <img src={ShillsCrypto} alt="Drag Race Board" className="DR_Project_Pic" />
      <img src={ShillsProfile} alt="Drag Race Board" className="DR_Project_Pic" />
    </div>

    <a
      className="Find_Me_Link"
      href="https://github.com/SEI-Buffleheads/twitter-clone-frontend"
      target={"_blank"}
      rel="noreferrer"
    >
      <BsGithub /> Github
    </a>
    <a
      className="Find_Me_Link"
      href="https://shill-social.netlify.app/"
      target={"_blank"}
      rel="noreferrer"
    >
      <BsCoin /> Come Tweed!
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

export default Shills;
