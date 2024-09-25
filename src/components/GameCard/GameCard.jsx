import { useState , useEffect , useContext } from "react"

import "./GameCard.css"
import { ThemeContext } from "../../utils/ThemeContext"
import { ModalContext } from "../../utils/ModalContext"

export default function GameCard ( { title , text , link , onClick , cardId } ) {

  const themeContext = useContext(ThemeContext)
  const { theme } = themeContext

  const modalContext = useContext(ModalContext)
  const { setModalVisible } = modalContext

  const clickedCardId = (id) => { onClick (id) }

  const handleClick = (e) => { 
    setModalVisible(true)
    clickedCardId(e.currentTarget.dataset.cardid)
  }

  return (
    <div className={`card-container ${theme}-card`}>
      <h2>{title}</h2>
      {text} 
      <div className="card-btnsContainer">
        <button className="card-details" data-cardid={cardId} onClick={ (e) => handleClick(e) }>Program development details</button>
        <a className="card-play" href={link} target="_blank" >Play</a>
      </div>
    </div>
  )
}