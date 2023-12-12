import { createContext } from 'react'

const ShoopingCartContext = createContext()

export const ShoopingCartProvider = ({children}) => {
    return (
        <ShoopingCartContext.Provider>
            { children }
        </ShoopingCartContext.Provider>  
    )
}