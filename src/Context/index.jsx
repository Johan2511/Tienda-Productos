import { createContext, useState } from 'react'

export const ShoopingCartContext = createContext()

export const ShoopingCartProvider = ({children}) => {
    const [count, setCount] = useState(0)
    console.log('COUNT: ', count);

    return (
        <ShoopingCartContext.Provider value={{
            count,
            setCount
        }}>
            { children }
        </ShoopingCartContext.Provider>  
    )
}