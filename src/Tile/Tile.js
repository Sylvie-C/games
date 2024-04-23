
import "./Tile.css" ; 
import { useState } from "react" ; 

function Tile ( { imgData , onClick } ) {
  const [ showTile , setShowtile ] = useState(false) ; 
  
  // send clicked tile id via "onClick" prop
  const clickedTileId = (tileId) => { onClick (tileId) } ; 

  // tile initialization
  let imgElt ; 

  switch (imgData) {
    case ("X") :
      imgElt = <img src={require("../assets/images/minesweeper/bomb.png")} alt="bomb ! you loose !"/> 
    break; 
    case 0 : 
      imgElt = <img src={require("../assets/images/minesweeper/0.png")} alt="0 bombs around"/>
    break; 
    case 1 : 
      imgElt = <img src={require("../assets/images/minesweeper/1.png")} alt="1 bomb around"/>
    break; 
    case 2 : 
      imgElt = <img src={require("../assets/images/minesweeper/2.png")} alt="2 bombs around"/>
    break; 
    case 3 : 
      imgElt = <img src={require("../assets/images/minesweeper/3.png")} alt="3 bombs around"/>
    break; 
    case 4 :
      imgElt = <img src={require("../assets/images/minesweeper/4.png")} alt="4 bombs around"/>
    break; 
    case 5 : 
      imgElt = <img src={require("../assets/images/minesweeper/5.png")} alt="5 bombs around"/>
    break; 
    case 6 : 
      imgElt = <img src={require("../assets/images/minesweeper/6.png")} alt="6 bombs around"/>
    break; 
    case 7 : 
      imgElt = <img src={require("../assets/images/minesweeper/7.png")} alt="7 bombs around"/>
    break; 
    case 8 : 
      imgElt = <img src={require("../assets/images/minesweeper/8.png")} alt="8 bombs around"/>
    break; 
    default : 
      imgElt = <img src={require("../assets/images/minesweeper/empty.png")} alt="empty tile"/>
  }

  const handleClick = (event) => {
    setShowtile(true) ; // set state for tile display / show
    clickedTileId(event.currentTarget.dataset.tileid) ; // catch clicked tile id (= imgData value)
  }

  return (
    <div className="tileContainer" data-tileid={imgData} onClick={ (evt) => handleClick (evt) } > 
      {
        showTile ? imgElt : <img className="emptyTile" src={require("../assets/images/minesweeper/empty.png")} alt="empty tile"/>
      }
    </div>
  )
}
export default Tile ; 