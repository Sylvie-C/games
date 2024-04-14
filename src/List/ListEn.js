import { useState } from "react" ; 
import "./List.css" ; 

import FortunetellerFr from "../Fortuneteller/FortunetellerFr" ; 
import Minesweeper from "../Minesweeper/Minesweeper";

function ListEn () {
  const [ display , setDisplay ] = useState("showlist") ; 
  const [ gameIdent , setGameid ] = useState("") ; 

  let background = "" ; 
  let gameComponent = null ; 

  const toggleDisplay = (gameId) => {
      setDisplay ("showgame") ; 
      setGameid (gameId) ; 

      console.log ("gameId ? : " , gameId) ; 
  } ; 

  const closeGame = () => {
    setDisplay ("showlist") ; 
  }

  console.log ("gameIdent ? : " , gameIdent) ; 

  return(
    <>
      {
        display === `showlist` ?
        <div 
          className="gamesCardsblock" 
          onClick= { 
            (event) => {
              let gameId = event.target.dataset.gameid ; 
              toggleDisplay (gameId)
            } 
          }
        >
          <section className="fortuneteller">
            <button data-gameid="ft">
              <h2>The Fortuneteller</h2>
              <p> 
                Do you have something to ask the Fortune teller ? 
                This way please ...
              </p>
            </button>
          </section>

          <section className="minesweeper">
            <button data-gameid="mine">
              <h2>Minesweeper</h2>
              <p> 
                Discover all the boxes without clicking on one of the 5 bombs !
              </p>
            </button>
          </section>
        </div>
        :
        <div className="modal">
          <div className={`modalContainer ${background}`}>
            <p className="modalClose" onClick = { closeGame }>X</p>
            <div className="modalContent">
              {gameComponent}
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default ListEn; 