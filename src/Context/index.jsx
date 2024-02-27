import { createContext, useState } from 'react'

export const ShoopingCartContext = createContext()

export const ShoopingCartProvider = ({children}) => {
    // Shopping Cart - Increment quantity
    const [count, setCount] = useState(0)

    // Product Detail - Open/Close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    console.log('COUNT: ', count);
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)

    // Product Detail - ShowProduct
    const [productToShow, setProductToShow] = useState({})

    return (
        <ShoopingCartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow
        }}>
            { children }
        </ShoopingCartContext.Provider>  
    )
}