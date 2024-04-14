import { useState , useEffect } from "react" ; 
import "./List.css" ; 

import FortunetellerFr from "../Fortuneteller/FortunetellerFr" ; 
import Minesweeper from "../Minesweeper/Minesweeper";

function ListFr () {
  const [ display , setDisplay ] = useState("showlist") ; 
  const [ gameIdent , setGameid ] = useState("") ;
  const [ backgroundStyle , setBackground ] = useState("") ; 
  const [ closeBtnStyle , setCloseBtn ] = useState("") ; 
  const [ gameContent , setGame ] = useState(null) ; 

  const toggleDisplay = (event) => {
    setDisplay ("showgame") ; 
    setGameid (event.currentTarget.dataset.gameid) ; 
  }

  const closeGame = () => {
    setDisplay ("showlist") ; 
  }

  useEffect ( () => {
    switch (gameIdent) {
      case "ft" : 
        setBackground ("ftBackground") ; 
        setCloseBtn ("ftClose") ; 
        setGame (<FortunetellerFr />) ; 
        break;
      case "mine" : 
        setBackground ("mineBackground") ;
        setCloseBtn ("mineClose") ; 
        setGame (<Minesweeper />) ; 
        break; 
      default : 
        setBackground ("") ; 
    }
  } , [gameIdent] ) ; 


  return(
    <>
      {
        display === `showlist` ?
        <div className="gamesCardsblock" >
          <section className="fortuneteller">
            <button data-gameid="ft" onClick={ (event) => toggleDisplay(event) } >
              <h2>Bonne Aventure</h2>
              <p> 
                Avez-vous une question à poser à la diseuse de bonne aventure ? <br/>
                Par ici s'il vous plaît ... 
              </p>
            </button>
          </section>

          <section className="minesweeper">
            <button data-gameid="mine" onClick={ (event) => toggleDisplay(event) } >
              <h2>Minesweeper</h2>
              <p> 
                Découvrez toutes les cases sans cliquer sur une des 5 bombes !
              </p>
            </button>
          </section>
        </div>
        :
        <div className="modal">
          <div className={`modalContainer ${backgroundStyle}`}>
            <p className={`modalClose ${closeBtnStyle}`} onClick={closeGame}>X</p>
            <div className="modalContent">
              {gameContent}
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default ListFr; 