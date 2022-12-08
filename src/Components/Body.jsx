import AboutMe from "../Screens/AboutMe"
import Projects from "../Screens/Projects"
import Resume from "../Screens/Resume"
import { useLocation } from "react-router-dom"
import Home from "../Screens/Home"

function Body() {
  const location = useLocation()
  console.log(location)

  let BodyContent = <Home />;
  switch (location.pathname) {

    case '/projects': {
      BodyContent = <Projects />
      break;
    }
    case '/about': {
      BodyContent = <AboutMe />
      break;
    }
    case '/resume': {
      BodyContent = <Resume />
      break;
    }
    default: {
      BodyContent = <Home />
      }
  }
  return (
    <div className="Body_Container">
      {BodyContent}
    </div>
  )
}

export default Body