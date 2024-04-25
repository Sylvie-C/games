import "./Minesweeper.css" ; 
import { useState } from "react" ;  
import Tile from "../Tile/Tile" ; 

function Minesweeper ( {gameOver} ) {

  const [ loose , setLoose ] = useState (false) ; 

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

  const gameBoard = gameBoardGen(5,5,5) ;  

  const clickedTile = (tileId) => {
    if (tileId === "X") { 
      setLoose (true) ; 
    }
  }

  const showAll = false ; 

  return (
    <>
      {
        loose 
        ? 
          <>
            <div className="gameOver">
              YOU LOOSE !
              <button onClick= { () => {setTimeout (gameOver("showlist") , 3000)} } >OK</button>
            </div>  
          </>
        : 
          <div className="mineContainer" >
            {gameBoard.map( (elt , index) => (
              <Tile key={`tile${index}`} imgData={elt} onClick={ (tileId) => clickedTile(tileId) } show={showAll}/>
            ))}
          </div>
      }          
    </>
  )
}
export default Minesweeper; 