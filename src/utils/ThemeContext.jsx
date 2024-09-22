import { createContext, useState } from 'react'

// Context exports
export const ThemeContext = createContext()

export const ThemeProvider = ( { children } ) => { 
	const [ theme , setTheme ] = useState('light') 

	const toggleTheme = () => { setTheme ( theme === 'light' ? 'dark' : 'light' ) }

	return (
		< ThemeContext.Provider value={ { theme, toggleTheme , setTheme } } > 
			{ children }
		</ ThemeContext.Provider >
	)
}

