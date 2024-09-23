import { useContext } from "react"

import "./Modal.css"
import { ModalContext } from "../../utils/ModalContext"


export default function Modal ( { text } ) {
  
  const modalContext = useContext(ModalContext)
  const { modalVisible , setModalVisible } = modalContext

  const handleClick = () => {
    setModalVisible(false)
  }

  return (
    <>
      {
        modalVisible && 
        <div className="modal-container" >
          <div className="modal-content" >
            TEST POUR VOIR
            <p>{text}</p>
            <button onClick={ handleClick }>FERMER</button>
          </div>
        </div>
      }
    </>
  )
}