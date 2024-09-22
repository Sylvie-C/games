
import "./Modal.css"

export default function Modal ( { visible , text } ) {

  return (
    <>
      {
        visible && <p>{text}</p>
      }
    </>
  )
}