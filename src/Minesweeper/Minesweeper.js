import "./Minesweeper.css" ; 

function MinesweeperFr () {

  const gameBoard = new Array(25).fill(null) ; 

  const hidePending = () => {
    const modalPending = document.querySelector(".pending") ; 
    modalPending.style.display = "none" ; 
  }

  return (
    <>
      <div className="pending">WORK ON PROGRESS ... <br/>
        COMING SOON !!! 
        <button onClick={hidePending}>OK</button>
      </div>
      <div className="mineContainer">
        {
          gameBoard.map( () => (
            <img src={require("../assets/images/minesweeper/empty.png")} alt={"empty icon"}/>
          ) )
        }
      </div>
    </>
  )
}
export default MinesweeperFr; 