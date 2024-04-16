import "./Minesweeper.css" ; 
import { useState , useEffect } from "react" ; 

function MinesweeperFr () {

  const hidePending = () => {
    const modalPending = document.querySelector(".pending") ; 
    const mineContainer = document.querySelector(".mineContainer") ; 
    modalPending.style.display = "none" ; 
    mineContainer.style.display = "none" ; 
  }

  // game board initialization function
  const gameBoardInit = (rowsNb , colNb , bombsNb) => { 
    const tilesNb = rowsNb * colNb ; 
    let gameBoard = new Array (tilesNb).fill(null) ;
    let bombIndex = 0 ; 
    let bombIndexArr = [] ; 

    // Array of 5 random numbers for bombs
    for (let i=0; i<bombsNb; i++) {
      // choose random number from 0 to 24 included
      bombIndex = Math.floor ( Math.random() * tilesNb ) ; 

      // if random index not already chosen, add it to array
      if ( ! (bombIndexArr.includes(bombIndex))) {
        bombIndexArr.push(bombIndex) ; 
      } else {
        // if random index already chosen, add another one to array
        bombIndex = Math.floor ( Math.random() * tilesNb +1 ) ; 
        bombIndexArr.push(bombIndex) ; 
      }
    }

    for (let i=0; i<gameBoard.length; i++) {
      if (bombIndexArr.includes(i)) {
        gameBoard[i] = <img key={`tile${i}`} src={require("../assets/images/minesweeper/bomb.png")} alt="bomb tile"/>
      } else {
        gameBoard[i] = <img key={`tile${i}`} src={require("../assets/images/minesweeper/empty.png")} alt="empty tile"/>
      }
    }

    return gameBoard ; 
  }

  const initialGameboard = gameBoardInit(5,5,5) ; 

  // add game board to Component State
  const [ gameBoard , setGameboard ] = useState(initialGameboard) ; 

  useEffect (
    () => {
      
    } 
  ) ; 

  return (
    <>
      <div className="pending">WORK ON PROGRESS ... <br/>
        COMING SOON !!! 
        <button onClick= { hidePending } >OK</button>
      </div>

      <div className="mineContainer">
        {gameBoard}
      </div>
    </>
  )
}
export default MinesweeperFr; 