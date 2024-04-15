import "./Fortuneteller.css" ; 
import { useState , useEffect } from "react" ; 

const replies = [ 
  "My sources say Yes" , "My sources say No" ,  
  "You need to wait a little longer" , "It’s not the most important thing right now" , 
  "The future is uncertain here; anything is still possible" , 
  "Return to the essentials: your happiness" , "Better days await you" , 
  "A happy outcome awaits you soon" , "Difficulties are to be expected" , 
  "Be on your guard, don’t lose courage" , "Relax, friendly forces are with you"
] ; 

function FortunetellerFr () {
  const [ result , setResult ] = useState(false) ; 

  const answer = () => {
    setResult(true) ; 
  }

  useEffect (
    () => { 
      const resultBtn = document.querySelector(".ftResultBtn") ; 
      const textContainer = document.querySelector(".ftTextContainer") ; 
      const ftTextContent = document.querySelector(".ftTextContent") ; 
      
      if (result === true) { 
        textContainer.style.width = "200px" ; 
        textContainer.style.height = "200px" ; 
        textContainer.style.borderRadius = "50%" ; 

        resultBtn.style.opacity = "0" ; 

        ftTextContent.style.transform = "scale(0)" ; 
        ftTextContent.style.opacity = "0" ; 

        setTimeout ( () => {
          textContainer.style.boxShadow = "white 0 0 50px" ; 

          const number = Math.floor(Math.random() * replies.length) ; 
          const resultText = replies[number] ; 
          ftTextContent.textContent = resultText ; 

          ftTextContent.style.opacity = "1" ; 
          ftTextContent.style.transform = "scale(1)" ; 
        } , 3000) ; 

      } 
    } , [result]
  ) ; 
 
  return (
      <div className="ftContainer">
      <div className="ftTextContainer">
        <p className="ftTextContent">
          Concentrate and ask your question. <br/>
          Click on the "Answer" button.
        </p>
      </div>
        <button className="ftResultBtn" onClick={answer}>Answer</button>
      </div>
  )
}
export default FortunetellerFr ; 