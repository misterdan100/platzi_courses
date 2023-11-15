import { useState, createContext, useEffect } from "react";

const ShoppingCartContext = createContext();

const ShoppingCartProvider = ({ children }) => {
    //* Shopping Cart | Increment quantity
    const [ count, setCount ] = useState(0);
    
    //* Product Detail | Open/Close
    const [ isProductDetailOpen, setIsProductDetailOpen ] = useState(false);
    const openProductDetail = () => setIsProductDetailOpen(true);
    const closeProductDetail = () => setIsProductDetailOpen(false);
    
    //* Checkout Side Menu | Open/Close
    const [ isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen ] = useState(false);
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);
    
    //* Product Detail | Show Product
    const [ productToShow, setProductToShow ] = useState({});

    //* Shopping Cart | Add Products to Cart
    const [ cartProducts, setCartProducts ] = useState([]);

    //* Shopping Cart | My Order
    const [ order, setOrder ] = useState([]);

    //* Get Products
    const [ items, setItems ] = useState([]);
    const [ filtereditems, setFilteredItems ] = useState([]);

    //* Get Products by Title
    const [ searchByTitle , setSearchByTitle ] = useState('');

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
          .then( response => response.json())
          .then( data => setItems(data))
      }, [])


    const filteredItemsByTitle = (items, searchByTitle) => {
        return items.filter( item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }

    useEffect(() => {
        if ( searchByTitle ) setFilteredItems(filteredItemsByTitle(items, searchByTitle));

    }, [items, searchByTitle])
        

    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            isProductDetailOpen,
            openProductDetail,
            closeProductDetail,
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
            filtereditems, 
            setFilteredItems,
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}

export { ShoppingCartContext, ShoppingCartProvider }