import { createContext, useState } from 'react'

// Context exports
export const ModalContext = createContext()

export const ModalProvider = ( { children } ) => { 
	const [ modalVisible , setModalVisible ] = useState(false) 

	return (
		< ModalContext.Provider value={ { modalVisible , setModalVisible } } > 
			{ children }
		</ ModalContext.Provider >
	)
}