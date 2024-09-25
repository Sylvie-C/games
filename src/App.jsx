import { useContext , useState , useEffect } from "react"

import './App.css'
import { ThemeContext } from "./utils/ThemeContext"

import ToggleDayNight from "./components/ToggleDayNight/ToggleDayNight"
import GameCard from "./components/GameCard/GameCard"
import Modal from "./components/Modal/Modal"

export default function App() {
  const [ btnPosition , setBtnPos ] = useState ("left")

  // theme context
  const themeContext = useContext (ThemeContext)
  const { theme, setTheme } = themeContext

  // watch OS or browser theme
  useEffect(() => {
    const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(userPrefersDark ? 'dark' : 'light');

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => {
      setTheme(e.matches ? 'dark' : 'light');
    };

    mediaQuery.addEventListener('change', handleChange);

    return () => { mediaQuery.removeEventListener('change', handleChange); };

  }, [setTheme]);

  // watch local theme
  useEffect(() => {
    document.body.className = theme; 

    if (theme === "light") { setBtnPos("left") }
    if (theme === "dark") { setBtnPos("right") }

  }, [theme]);

  return (
    <div>
      <ToggleDayNight btnPosition = { btnPosition } />
      <h1>Games</h1>
      <div className="cards-container">
        <GameCard 
          key="card01"
          title="Fortuneteller" 
          text="Do you have a question for the fortuneteller ? This way please ..." 
          link="https://sylvie-c.github.io/fortuneteller/"
        /> 
        <GameCard
          key="card03"
          title="Minesweeper" 
          text="Discover all the boxes without clicking on a bomb !" 
          link="https://swc-minesweeper-2024.netlify.app/"
        />
      </div>
      <Modal text="Hello World !" />
    </div>
  );
} 
