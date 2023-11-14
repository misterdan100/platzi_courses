import { XCircleIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ShoppingCartContext } from "../../Context";
import { OrderCard } from "../OrderCard";
import { totalPrince, formatDate, formatCurrency, idGenerator } from "../../Utils";

const CheckoutSideMenu = () => {
  const {
    isCheckoutSideMenuOpen,
    closeCheckoutSideMenu,
    productToShow,
    cartProducts,
    setCartProducts,
    order,
    setOrder,
  } = useContext(ShoppingCartContext);

  const handleDelete = (id) => {
    const filteredProducts = cartProducts.filter((product) => product.id != id);
    setCartProducts(filteredProducts);
  };

  const handleCheckout = () => {
    //* Object with order summary
    const orderToAdd = {
      date: formatDate(new Date()),
      products: cartProducts,
      totalProducts: cartProducts.length,
      totalPrice: totalPrince(cartProducts),
      id: idGenerator(),
    };
    setOrder([...order, orderToAdd]);
    setCartProducts([]);
    closeCheckoutSideMenu();
  };

  return (
    <aside
      className={`${
        isCheckoutSideMenuOpen
          ? "opacity-100 right-2"
          : "opacity-0 right-[-380px]"
      } flex flex-col fixed  top-[80px] p-4 border bg-white/60 backdrop-blur-3xl border-gray-400 rounded-lg w-[360px] max-h-[calc(100vh-90px)] transition-all duration-[3000] overflow-y-auto`}
    >
      <div className="flex justify-between items-center pb-6 px-2">
        <h2 className="font-medium text-xl">
          My Order{" "}
          <span className="font-normal text-base">
            ({cartProducts.length}{" "}
            {cartProducts.length != 1 ? "products" : "product"})
          </span>
        </h2>
        <XCircleIcon
          className="h-6 w-6 text-gray-500 cursor-pointer hover:text-red-600 transition-all"
          onClick={() => closeCheckoutSideMenu()}
        />
      </div>

      <div
        className="overflow-y-auto scroll-smooth  [&::-webkit-scrollbar]:w-2
                    [&::-webkit-scrollbar-track]:rounded-full
                    [&::-webkit-scrollbar-track]:bg-gray-100
                    [&::-webkit-scrollbar-thumb]:rounded-full
                    [&::-webkit-scrollbar-thumb]:bg-gray-300"
      >
        {cartProducts.map((product) => (
          <OrderCard
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
            handleDelete={handleDelete}
          />
        ))}
      </div>

      {/* Total Price section */}
      <h2 className="flex justify-between my-2 font-medium text-xl">
        <span>Total Price: </span>
        <span className="mr-8">{formatCurrency(totalPrince(cartProducts))}</span>
      </h2>

      <Link to={`${cartProducts.length != 0 ? '/my-orders/last' : ''}`}>
        <button
          className={`w-full bg-black py-3 text-white rounded-lg ${cartProducts.length == 0 && 'opacity-70'}`}
          onClick={() => cartProducts.length && handleCheckout()}
        >
          Checkout
        </button>
      </Link>
    </aside>
  );
};

export { CheckoutSideMenu };
