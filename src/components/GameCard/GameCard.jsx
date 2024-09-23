import { useState , useEffect , useContext } from "react"

import "./GameCard.css"
import { ThemeContext } from "../../utils/ThemeContext"
import { ModalContext } from "../../utils/ModalContext"

export default function GameCard ( { title , text , link } ) {

  const themeContext = useContext(ThemeContext)
  const { theme } = themeContext

  const modalContext = useContext(ModalContext)
  const { setModalVisible } = modalContext

  const handleClick = () => { 
    setModalVisible(true)
  }

  return (
    <div className={`card-container ${theme}-card`}>
      <h2>{title}</h2>
      {text} 
      <div className="card-btnsContainer">
        <button className="card-details" onClick={ handleClick }>Program development details</button>
        <a href={link} target="_blank" className="card-play">Play</a>
      </div>
    </div>
  )
}