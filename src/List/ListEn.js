import { Link } from "react-router-dom" ; 
import "./List.css" ;  

function ListEn() {

  return (
    <>
      <div className="gamesCardsblock">
        <section className="fortuneteller">
          <Link to="/ften">
            <h2>The Fortuneteller</h2>
            <p> 
              Do you have something to ask the Fortune teller ? 
              This way please ... 
            </p>
          </Link>
        </section>
        <section className="minesweeper">
          <Link to="mineen">
            <h2>Minesweeper</h2>
            <p> 
              Discover all the boxes without clicking on one of the 5 bombs !
            </p>
          </Link>
        </section>
      </div> 

      <div className="gameContainer">
        
      </div>
    </>
  );
}

export default ListEn;
