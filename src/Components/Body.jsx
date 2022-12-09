import AboutMe from "../Screens/AboutMe"
import Projects from "../Screens/Projects"
import Resume from "../Screens/Resume"
import { useLocation } from "react-router-dom"
import Home from "../Screens/Home"
import DragRace from "../Screens/DragRace"
import BSide from "../Screens/BSide"
import Shills from "../Screens/Shills"

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
    case '/DragRace': {
      BodyContent = <DragRace />
      break;
    }
    case '/BSide': {
      BodyContent = <BSide />
      break;
    }
    case '/Shills': {
      BodyContent = <Shills />
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