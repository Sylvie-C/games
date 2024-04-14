import "./Fortuneteller.css" ; 

function FortunetellerFr () {

  const text = document.getElementById("text") ; 
  
  

  const answer = () => {
    alert("la réponse") ; 

    console.log ("texte : " , text) ; 
  }
 
  return (
    <>
      <p id="text">
        Concentrez-vous et posez votre question. <br/>
        Cliquez sur le bouton "Réponse".
      </p>

      <button onClick={answer}>Réponse</button>
    </>
  )
  
}
export default FortunetellerFr ; 