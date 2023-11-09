import { useState, createContext } from "react";

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
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}

export { ShoppingCartContext, ShoppingCartProvider }