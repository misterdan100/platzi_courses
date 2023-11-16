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
    const [ items, setItems ] = useState(null);
    const [ filtereditems, setFilteredItems ] = useState(null);

    //* Get Products by Title
    const [ searchByTitle , setSearchByTitle ] = useState(null);

    //* Get Products by Category
    const [ searchByCategory, setSearchByCategory ] = useState(null)

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
          .then( response => response.json())
          .then( data => setItems(data))
      }, [])

    const filteredItemsByTitle = (items, searchByTitle) => {
        return items.filter( item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }
    
    const filteredItemsByCategory = (items, searchByCategory) => {
        return items.filter( item => item.category.toLowerCase().includes(searchByCategory.toLowerCase()))
    }

    const filterBy = ( searchType, items, searchByTitle, searchByCategory ) => {
        console.log('searchType', searchType);
        if(searchType === 'BY_TITLE') {
            return filteredItemsByTitle(items, searchByTitle)
        }
        if(searchType === 'BY_CATEGORY') {
            console.log(searchByCategory);
            return filteredItemsByCategory(items, searchByCategory)
        }
        if(searchType === 'BY_TITLE_AND_CATEGORY') {
            console.log('ambos');
            return filteredItemsByCategory(items, searchByTitle).filter( item => item.category.toLowerCase().includes(searchByCategory.toLowerCase()))
        }
        if(!searchType) {
            return items
        }
    };

    useEffect(() => {
        if ( searchByTitle && searchByCategory ) setFilteredItems(filterBy('BY_TITLE_AND_CATEGORY', items, searchByTitle, searchByCategory));
        if ( searchByTitle && !searchByCategory ) setFilteredItems(filterBy('BY_TITLE', items, searchByTitle, searchByCategory));
        if ( searchByCategory && !searchByTitle ) setFilteredItems(filterBy('BY_CATEGORY', items, searchByTitle, searchByCategory));
        if ( !searchByCategory && !searchByTitle ) setFilteredItems(filterBy(null, items, searchByTitle, searchByCategory));

    }, [items, searchByTitle, searchByCategory])

        

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
            searchByCategory,
            setSearchByCategory,
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}

export { ShoppingCartContext, ShoppingCartProvider }