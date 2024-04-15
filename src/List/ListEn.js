import { useState , useEffect } from "react" ; 
import "./List.css" ; 

import FortunetellerEn from "../Fortuneteller/FortunetellerEn" ; 
import MinesweeperEn from "../Minesweeper/MinesweeperEn";

function ListEn () {
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
        setGame (<FortunetellerEn />) ; 
        break;
      case "mine" : 
        setBackground ("mineBackground") ;
        setCloseBtn ("mineClose") ; 
        setGame (<MinesweeperEn />) ; 
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
              <h2>The Fortuneteller</h2>
              <p> 
                Do you have something to ask the Fortune teller ? <br />
                This way please ...
              </p>
            </button>
          </section>

          <section className="minesweeper">
            <button data-gameid="mine" onClick={ (event) => toggleDisplay(event) } >
              <h2>Minesweeper</h2>
              <p> 
                Discover all the boxes without clicking on one of the 5 bombs !
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

export default ListEn; 