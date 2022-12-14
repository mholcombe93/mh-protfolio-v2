// import { Profiler } from 'react';
import { NavLink } from 'react-router-dom';
import ProfilePic from "../Images/ProfilePic.jpeg"
import "./Styles/Pic.css"
import '../App.css'

function Pic() {

  return (
    <div className='Profile_Pic_Container'>
      <NavLink to="/"><img src={ProfilePic} alt="Profile Pic" className='Profile_Pic' /> </NavLink>
    </div>
);
}

export default Pic;