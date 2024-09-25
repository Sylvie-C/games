import { useEffect , useContext } from "react"

import "./Modal.css"
import { ModalContext } from "../../utils/ModalContext"


export default function Modal ( { text } ) {
  
  const modalContext = useContext(ModalContext)
  const { modalVisible , setModalVisible } = modalContext

  const handleClick = () => {
    setModalVisible(false)
  }

  useEffect (
    () => {
      if (modalVisible) {
        const modalText = document.querySelector(".modal-description")
        modalText.innerHTML = text
      }
    } , [modalVisible]
  )

  return (
    <>
      {
        modalVisible && 
        <div className="modal-container" >
          <div className="modal-content" >
            <p className="modal-description"></p>
            <button onClick={ handleClick }>Close</button>
          </div>
        </div>
      }
    </>
  )
}