import { createContext, useState, useEffect } from 'react'

export const ShoopingCartContext = createContext()

export const initializeLocalStorage = () => {
  const accountInLocalStorage = localStorage.getItem('account')
  const signOutInLocalStorage = localStorage.getItem('sign-out')
  let parsedAccount
  let parsedSignOut

  if (!accountInLocalStorage) {
    localStorage.setItem('account', JSON.stringify({}))
    parsedAccount = {}
  } else {
    parsedAccount = JSON.parse(accountInLocalStorage)
  }

  if (!accountInLocalStorage) {
    localStorage.setItem('sign-out', JSON.stringify(false))
    parsedSignOut = false
  } else {
    parsedSignOut = JSON.parse(signOutInLocalStorage)
  }
}

export const ShoopingCartProvider = ({children}) => {

  // My account
  const [account, setAccount] = useState({})

  //Sign out
  const [signOut, setSignOut] = useState(false)


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
    const [filteredItems, setFilteredItems] = useState(null)

    // Get products by category
    const [selectedCategory, setSelectedCategory] = useState(null);
    

    // Get products by title
    const [searchByTitle, setSearchByTitle] = useState(null)
    // console.log('searchByTitle', searchByTitle);

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
      }, [])

      const filteredItemsByTitle = (items, searchByTitle) => {
        return items?.filter((item) => item.title.toLowerCase().includes(searchByTitle.toLowerCase())
        )
      }

      const filteredItemsByCategory = (items, searchByCategory) => {
        return items?.filter((item) => item.category.toLowerCase().includes(searchByCategory.toLowerCase())
        )
      }

      const filterBy = (searchType, items, searchByTitle, selectedCategory) => {
        if (searchType === 'BY_TITLE') {
          return filteredItemsByTitle(items, searchByTitle)
        }
        if (searchType === 'BY_CATEGORY') {
          return filteredItemsByCategory(items, selectedCategory)
        }
        if (searchType === 'BY_TITLE_AND_CATEGORY') {
          return filteredItemsByCategory(items, selectedCategory).filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
        }
        if (!searchType) {
          return items
        }
      }

      useEffect(() => { 
        if (searchByTitle && selectedCategory) setFilteredItems(filterBy('BY_TITLE_AND_CATEGORY',items, searchByTitle, selectedCategory)) 
        if (searchByTitle && !selectedCategory) setFilteredItems(filterBy('BY_TITLE',items, searchByTitle, selectedCategory)) 
        if (!searchByTitle && selectedCategory) setFilteredItems(filterBy('BY_CATEGORY' ,items, selectedCategory, selectedCategory)) 
        if (!searchByTitle && !selectedCategory) setFilteredItems(filterBy(null ,items, selectedCategory, selectedCategory)) 
        
      }, [items, searchByTitle, selectedCategory])
      // console.log('filteredItems', filteredItems);

      console.log('filteredItems', filteredItems);

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
            setSearchByTitle,
            filteredItems,
            selectedCategory,
            setSelectedCategory,
            account,
            setAccount,
            signOut,
            setSignOut
        }}>
            { children }
        </ShoopingCartContext.Provider>  
    )
}