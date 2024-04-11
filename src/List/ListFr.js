import { Link } from "react-router-dom" ; 
import "./List.css" ; 

function ListFr () {
  return(
    <>
      <div className="gamesCardsblock">
        <section className="fortuneteller">
          <Link to="ftfr">
            <h2>Bonne Aventure</h2>
            <p> 
              Avez-vous une question à poser à la diseuse de bonne aventure ? 
              Par ici s'il vous plaît ... 
            </p>
          </Link>
        </section>

        <section className="minesweeper">
          <Link to="minefr">
            <h2>Minesweeper</h2>
            <p> 
              Découvrez toutes les cases sans cliquer sur une des 5 bombes !
            </p>
          </Link>
        </section>
      </div>
    </>
  )
}

export default ListFr; 