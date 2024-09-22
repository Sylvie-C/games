import { useState , useEffect , useContext } from "react"

import "./GameCard.css"
import { ThemeContext } from "../../utils/ThemeContext"

export default function GameCard ( { title , text } ) {

  const context = useContext(ThemeContext)
  const { theme } = context

  const [ modalVisible , setModalVisible ] = useState(false)

  const showModal = () => {
    if (modalVisible) { setModalVisible(false) }
    if (!modalVisible) { setModalVisible(true) }
  }

  return (
    <div className={`card-container ${theme}-card`}>
      <h2>{title}</h2>
      {text} 
      <div className="card-btnsContainer">
        <button className="card-details" onClick={ showModal }>Program development details</button>
        <a href="#" className="card-play">Play</a>
      </div>
    </div>
  )
}