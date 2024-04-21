
import "./Tile.css" ; 
import { useState } from "react" ; 

function Tile ( {imgData} ) {
  const [ showTile , setShowtile ] = useState(false) ; 

  // tile initialization
  let imgElt ; 

  switch (imgData) {
    case ("X") :
      imgElt = <img src={require("../assets/images/minesweeper/bomb.png")} alt="bomb image"/> 
    break; 
    case 0 : 
      imgElt = <img src={require("../assets/images/minesweeper/0.png")} alt="0 number image"/>
    break; 
    case 1 : 
      imgElt = <img src={require("../assets/images/minesweeper/1.png")} alt="1 number image"/>
    break; 
    case 2 : 
      imgElt = <img src={require("../assets/images/minesweeper/2.png")} alt="2 number image"/>
    break; 
    case 3 : 
      imgElt = <img src={require("../assets/images/minesweeper/3.png")} alt="3 number image"/>
    break; 
    case 4 :
      imgElt = <img src={require("../assets/images/minesweeper/4.png")} alt="4 number image"/>
    break; 
    case 5 : 
      imgElt = <img src={require("../assets/images/minesweeper/5.png")} alt="5 number image"/>
    break; 
    case 6 : 
      imgElt = <img src={require("../assets/images/minesweeper/6.png")} alt="6 number image"/>
    break; 
    case 7 : 
      imgElt = <img src={require("../assets/images/minesweeper/7.png")} alt="7 number image"/>
    break; 
    case 8 : 
      imgElt = <img src={require("../assets/images/minesweeper/8.png")} alt="8 number image"/>
    break; 
    default : 
      imgElt = <img src={require("../assets/images/minesweeper/empty.png")} alt="empty image"/>
  }

  return (
    <div className="tileContainer" onClick={ () => { setShowtile(true) } } >
      <img className="defaultTile" src={require("../assets/images/minesweeper/empty.png")} alt="empty image"/> 
      {
        showTile ? imgElt : null
      }
    </div>
  )
}
export default Tile ; 