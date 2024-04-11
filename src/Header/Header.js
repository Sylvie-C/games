import { NavLink } from "react-router-dom" ; 

import "./Header.css" ; 

import englishflag from "../assets/images/englishflag.jpg" ; 
import frenchflag from "../assets/images/frenchflag.jpg" ; 

function Header () {
  return (
    <>
      <h1>Games</h1>
      
      <div className="languagesBtnsContainer">
        <NavLink to="/">&#x1F3E0;</NavLink>
        <NavLink to="/"><img src= {frenchflag} alt="link to games in french" /></NavLink>
        <NavLink to="/listen"><img src= {englishflag} alt="link to games in english" /></NavLink>
      </div>
    </>
  ) ; 
}

export default Header; 