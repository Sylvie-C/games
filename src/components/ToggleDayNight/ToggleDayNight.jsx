import { useState, useEffect , useContext } from "react"

import "./ToggleDayNight.css"
import { ThemeContext } from "../../utils/ThemeContext"

export default function ToggleDayNight ( { btnPosition } ) {

  const [ circlePosition , moveCircle ] = useState("circleLeft")
  const [ sunClasses , setSun ] = useState ("sun")
  const [ moonClasses , setMoon ] = useState ("moon fade")

  const context = useContext(ThemeContext)
  const { theme, toggleTheme } = context

  const btnLight = () => {
    moveCircle ("circleLeft") 
    setSun("sun")
    setMoon ("moon fade")
  }

  const btnDark = () => {
    moveCircle("circleRight") 
    setSun ("sun fade")
    setMoon ("moon")
  }

  // manual theme selection
  const handleClick = () => {
    toggleTheme()
    if (circlePosition === "circleLeft") { btnDark() }
    if (circlePosition === "circleRight") { btnLight() }
  }

  console.log ("Theme from 'ToggleComponent' : " , theme)

  // OS or browser theme selection
  useEffect (
    () => {
      if ( btnPosition === "left" ) { btnLight() }
      if ( btnPosition === "right" ) { btnDark() }
    }, [btnPosition]
  )

  return (
    <>
      <button className="themeBtn" onClick = { handleClick } >
        <div className="circleContainer">
          <div className= { ` circle ${ circlePosition } ` } ></div>
        </div>
        <div className="iconsContainer">
          <span className = { sunClasses } >&#x1F31E;</span>
          <span className= { moonClasses } >&#x1F319;</span>
        </div>
      </button>
    </>
  )
}