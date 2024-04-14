import "./Fortuneteller.css" ; 
import { useState , useEffect } from "react" ; 

const replies = [ 
  "Mes sources disent Oui" , "Mes sources disent Non" ,  
  "Il faut attendre encore un peu" , "Ce n'est pas le plus important pour l'instant" , 
  "L'avenir est incertain ici : tout est encore possible" , 
  "Revenez à l'essentiel : votre bonheur" , "Des lendemains meilleurs vous attendent" , 
  "Une issue heureuse vous attend bientôt" , "Des difficultés sont à prévoir" , 
  "Soyez sur vos gardes, ne perdez pas courage" , "Détendez-vous, des forces bienveillantes vous accompagnent"
] ; 

function FortunetellerFr () {
  const [ result , setResult ] = useState(false) ; 

  const resultBtn = document.querySelector(".ftResultBtn") ; 
  const textContainer = document.querySelector(".ftTextContainer") ; 
  const ftTextContent = document.querySelector(".ftTextContent") ; 

  const answer = () => {
    setResult(true) ; 
  }

  useEffect (
    () => { 
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
          Concentrez-vous et posez votre question. <br/>
          Cliquez sur le bouton "Réponse".
        </p>
      </div>
        <button className="ftResultBtn" onClick={answer}>Réponse</button>
      </div>
  )
}
export default FortunetellerFr ; 