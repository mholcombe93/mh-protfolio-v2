import "./Styles/Home.css";
import { Link } from "react-router-dom";

function Shills() {
  return (
    <div className="Bio_content">
      <p className="Home_text"> shill info </p>
      <break></break>
      <p className="Home_text"> other stuff </p>
      <button className="button1">
        {" "}
        <Link className="project-link" to="/projects">
          Back to Projects
        </Link>
      </button>
    </div>
  );
}

export default Shills;
