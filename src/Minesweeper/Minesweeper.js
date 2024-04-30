import "./Minesweeper.css" ; 
import { useState , useEffect } from "react" ;  
import Tile from "../Tile/Tile" ; 



function Minesweeper ( {gameOver , rows, cols, bombs} ) {
  const [ loose , setLoose ] = useState(false) ; 
  const [ win , setWin ] = useState(false) ; 
  const [ count , setCount ] = useState(1) ; 

  useEffect (
    () => {
      const gameOver = document.querySelector(".gameOver") ; 
      const gameOverText = document.querySelector(".gameOver--text") ; 

      if (loose) {
        gameOverText.textContent = "You loose ! " ; 
        gameOver.classList.remove("hide") ; 
      } else if (win) {
        gameOverText.textContent = "You win ! " ; 
        gameOver.classList.remove("hide") ; 
      }
    } , [ loose , win ]
  ) ; 

  // Generate array of 5 random numbers for bombs
  const bombsArrIndexGen = (bombsNb , tilesNb) => {
    let bombIndex = 0 ; 
    let bombIndexArr = [] ;

    for (let i=0; i<bombsNb; i++) {
      // choose random number from 0 to 24 included
      bombIndex = Math.floor ( Math.random() * tilesNb ) ; 

      // if random index already chosen, add another one to array
      if (bombIndexArr.includes(bombIndex)) {
        bombIndex = Math.floor ( Math.random() * tilesNb ) ; 
      }
      bombIndexArr.push(bombIndex) ; 
    } 

    return bombIndexArr ; 
  }

  // Function to add bombs on game board
  const addBombs = (board , bombsArray) => {
    const arrayOut = board.map (
      (elt , index) => {
        if (elt === null) { 
          if ( bombsArray.includes(index) ) {
            return "X" ; 
          } 
        }
        return "null" ; 
      }
    ) ;  
    return arrayOut ; 
  }

  // detect if a tile is at left of game board
  const left = (tileIndex , columnsNb) => { 
    const modulo = tileIndex % columnsNb ; 
    if (tileIndex === 0 || modulo === 0) {
      return true ; 
    } else {
      return false ; 
    }
  }

  // detect if a tile is at right of game board (use of modulo in calculations)
  const right = (tileIndex , columnsNb) => {
    const modulo = tileIndex % columnsNb ; 
    if (tileIndex === (columnsNb-1) || modulo === (columnsNb-1) ) {
      return true ; 
    } else {
      return false; 
    }
  }

  const center = (tileIndex , columnsNb) => {
    if ( !(right(tileIndex , columnsNb)) && !(left(tileIndex , columnsNb)) ) {
      return true ; 
    }
  }

  // count bombs around a tile (return number of bombs around). 
  const bombsCounter = (currentTileIndex , gameBoard , colNb) => {
    let counter = 0 ; 
    let tileAroundIndex ; 

    const centerBombOffset = [ -(colNb+1), -colNb, -(colNb-1), -1 , 1 , colNb+1 , colNb, colNb-1 ] ; 
    const leftBombOffset = [ -colNb , -(colNb-1) , +1 , +colNb , +(colNb+1) ] ; 
    const rightBombOffset = [ -(colNb+1) , -colNb , -1 , +(colNb-1) , +colNb ] ;

    // if tile is on left of game board
    if (left(currentTileIndex , colNb)) {

      // parse corresponding offset of tiles around
      for (let i=0; i<leftBombOffset.length; i++) {
        tileAroundIndex = currentTileIndex + leftBombOffset[i] ; 

        if (tileAroundIndex >= 0 && tileAroundIndex < gameBoard.length) 
        {
          // count number of bombs around the tile
          if (gameBoard[tileAroundIndex] === "X") {
            counter += 1 ; 
          }
        }
      }
    }

    // if tile is on right of game board
    if (right(currentTileIndex , colNb)) {
      for (let i=0; i<rightBombOffset.length; i++) {
        tileAroundIndex = currentTileIndex + rightBombOffset[i] ; 

        if (tileAroundIndex >= 0 && tileAroundIndex < gameBoard.length)
        {if (gameBoard[tileAroundIndex] === "X") {
          counter += 1 ; 
        }}
      }
    }

    // if tile is in center of game board
    if (center(currentTileIndex , colNb)) {
      for (let i=0; i<centerBombOffset.length; i++) {
        tileAroundIndex = currentTileIndex + centerBombOffset[i] ; 

        if (tileAroundIndex >= 0 && tileAroundIndex < gameBoard.length)
        {
          if (gameBoard[tileAroundIndex] === "X") {
            counter += 1 ; 
          }
        }
      }
    }

    return counter ; 
  }

  // game board initialization function
  const gameBoardGen = (rowsNb , colNb , bombsNb) => { 
    const tilesNb = rowsNb * colNb ; 
    let gameBoard = new Array (tilesNb).fill(null) ; // empty game board initialization
    const bombsArr = bombsArrIndexGen (bombsNb , tilesNb) ; // generate array of bombs index

    // update gameBoard with bombs
    gameBoard = addBombs(gameBoard , bombsArr) ; 

    // add numbers from initial game board (gameBoard variable)
    let bombsAroundTile = 0 ; 
    let finalGameBoard = [] ; 
    
    for (let i=0; i<gameBoard.length; i++) {
      bombsAroundTile = bombsCounter ( i , gameBoard , colNb) ; 
      if (gameBoard[i] === "X") {
        finalGameBoard.push("X") ; 
      } else {
        finalGameBoard.push(bombsAroundTile) ;
      } 
    }

    return finalGameBoard ; 
  }

  // Initialize tiles data in board, based on rows, columns and bombs number
  const gameBoardData = gameBoardGen(rows,cols,bombs) ; 

  // initialize game board data in state
  // eslint-disable-next-line
  const [ gameBoard , setGameBoard ] = useState(gameBoardData) ; 

  const clickedTile = (tileId) => {
    setCount(count+1) ; 
    if (tileId === "X") { 
      setLoose (true) ; 
    } else {
      if (count === ((rows*cols)-bombs) ) {
        setWin(true) ; 
      }
    }
  }



  console.log ("count in state ? : " , count) ; 




  return (
    <>
      <div className="gameOver hide">
        <p className="gameOver--text"></p>
        <button onClick= { () => { gameOver("showlist") } } >OK</button>
      </div>  

      <div className="mineContainer" >
        {
          gameBoard?.map( (elt , index) => (
            <Tile key={`tile${index}`} imgData={elt} onClick={ (tileId) => clickedTile(tileId) } />
          ))
        }
      </div>
    </>
  )
}
export default Minesweeper; 