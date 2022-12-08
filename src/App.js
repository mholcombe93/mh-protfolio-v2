import "./App.css";
import Nav from "./Components/Nav.jsx";
import Header from "./Components/Header.jsx";
import Body from "./Components/Body.jsx";
import Footer from "./Components/Footer.jsx";
import { Routes, Route } from "react-router-dom";
import Home from "./Screens/Home";
import AboutMe from "./Screens/AboutMe";
import Pic from "./Components/Pic";
import Projects from "./Screens/Projects";
import Resume from "./Screens/Resume";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
    <div className="parent">
      <Header />
      <Pic />
      <Nav />
      <Body />
      <Footer />
   
      {/* <Routes> */}
        {/* <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} /> */}
      {/* </Routes> */}
      </div>
      </div>
  );
}

export default App;
