import { createContext, useState, useEffect } from 'react'

export const ShoopingCartContext = createContext()

export const ShoopingCartProvider = ({children}) => {
    // Shopping Cart - Increment quantity
    const [count, setCount] = useState(0)

    // Product Detail - Open/Close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    console.log('COUNT: ', count);
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)

    //  Checkout Side Menu- Open/Close
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
    console.log('COUNT: ', count);
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)

    // Product Detail - ShowProduct
    const [productToShow, setProductToShow] = useState({})

    // Shoopping cart - Add products to cart
    const [cartProducts, setCartProducts] = useState([])

    // Shoopping cart - Order
    const [order, setOrder] = useState([])

    // Get product
    const [items, setItems] = useState(null)

    // Get products by title
    const [searchByTitle, setSearchByTitle] = useState(null)
    console.log('searchByTitle', searchByTitle);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            setItems(data);
          } catch (error) {
            console.error('Error al obtener los datos:', error);
          }
        };
      
        fetchData();
      }, []);

    return (
        <ShoopingCartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts,
            isCheckoutSideMenuOpen,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
            order,
            setOrder,
            items,
            setItems,
            searchByTitle,
            setSearchByTitle
        }}>
            { children }
        </ShoopingCartContext.Provider>  
    )
}