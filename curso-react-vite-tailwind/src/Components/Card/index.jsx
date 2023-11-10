import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { PlusIcon, CheckIcon } from "@heroicons/react/24/outline";

const Card = (data) => {
  const {
    count,
    setCount,
    openProductDetail,
    setProductToShow,
    cartProducts,
    setCartProducts,
    openCheckoutSideMenu,
    closeProductDetail,
    closeCheckoutSideMenu,
  } = useContext(ShoppingCartContext);

  const showProduct = (productDetail) => {
    closeCheckoutSideMenu();
    openProductDetail();
    setProductToShow(productDetail);
  };

  const addProductToCart = (event, productData) => {
    event.stopPropagation();
    setCount(count + 1);
    setCartProducts([...cartProducts, productData]);
    openCheckoutSideMenu();
    closeProductDetail();
  };

  const renderIcon = ( id ) => {
    const isInCart = cartProducts.filter( product => product.id === id).length > 0

    if( isInCart ) {
        return ( 
            <div
            className="absolute top-0 right-0 flex justify-center items-center rounded-full backdrop-blur-sm bg-lime-500/70 w-6 h-6 m-2 font-medium p-1 hover:scale-110 transition-all"
            
          >
            <CheckIcon className="h-6 w-6 text-gray-100 font-bold" />
          </div>
        )
        
    } else {
        return ( 
            <div
            className="absolute top-0 right-0 flex justify-center items-center rounded-full backdrop-blur-sm bg-white/70 w-6 h-6 m-2 font-medium p-1 hover:scale-110 transition-all"
            onClick={(event) => addProductToCart(event, data.data)}
          >
            <PlusIcon className="h-6 w-6 text-gray-900" />
          </div>
        )

    }
  }

  return (
    <div
      className="bg-gray-100 cursor-pointer w-56 h-60 m-4 rounded-lg"
      onClick={() => showProduct(data.data)}
    >
      <figure className="relative mb-2 w-full h-4/5">
        <img
          src={data.data.image}
          alt={data.data.title.slice(0, 18)}
          className="object-cover w-full h-full rounded-lg"
        />

        {renderIcon(data.data.id)}

        <span className="absolute bottom-0 left-0 backdrop-blur-sm bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
          {data.data.category}
        </span>
      </figure>
      <p className="flex justify-between items-center px-2">
        <span className="text-sm font-light">
          {data.data.title.slice(0, 18)}
        </span>
        <span className="text-lg font-medium">$ {data.data.price}</span>
      </p>
    </div>
  );
};

export { Card };
