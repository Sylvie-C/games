import { useContext , useState , useEffect } from "react"

import './App.css'
import { ThemeContext } from "./utils/ThemeContext"

import ToggleDayNight from "./components/ToggleDayNight/ToggleDayNight"
import GameCard from "./components/GameCard/GameCard"


export default function App() {
  const [ btnPosition , setBtnPos ] = useState ("left")

  const context = useContext (ThemeContext)
  const { theme , setTheme } = context

  useEffect(() => {
    const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    console.log ("userPrefersDark ? : " , userPrefersDark) ; 

    setTheme(userPrefersDark ? 'dark' : 'light');

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => {
      setTheme(e.matches ? 'dark' : 'light');
    };

    mediaQuery.addEventListener('change', handleChange);

    return () => { mediaQuery.removeEventListener('change', handleChange); };

  }, [setTheme]);

  useEffect(() => {
    document.body.className = theme; 

    if (theme === "light") { 
      setBtnPos("left") 
    }
    if (theme === "dark") { 
      setBtnPos("right") 
    }

  }, [theme]);

  return (
    <div>
      <ToggleDayNight btnPosition = { btnPosition } />
      <h1>Games</h1>
      <div className="cards-container">
        <GameCard 
          title="Fortuneteller" 
          text="Do you have a question for the fortuneteller ? This way please ..." 
        /> 
        <GameCard
          title="Try to guess" 
          text="Guess the hidden word in a maximum of 20 tries." 
        />
        <GameCard
          title="Minesweeper" 
          text="Discover all the boxes without clicking on a bomb !" 
        />
      </div>
    </div>
  );
} 
