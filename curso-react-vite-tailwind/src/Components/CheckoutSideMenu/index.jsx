import { XCircleIcon } from '@heroicons/react/24/outline'
import { useContext, useEffect, useState } from 'react';
import { ShoppingCartContext } from '../../Context';
import { OrderCard } from '../OrderCard';

const CheckoutSideMenu = () => {
    const { isCheckoutSideMenuOpen, closeCheckoutSideMenu, productToShow, cartProducts } = useContext(ShoppingCartContext)

    return (
        <aside
            className={`${isCheckoutSideMenuOpen ? 'opacity-100 right-2' : 'opacity-0 right-[-380px]'} flex flex-col fixed  top-[80px] p-4 border bg-white/60 backdrop-blur-3xl border-gray-400 rounded-lg w-[360px] h-[calc(100vh-90px)] transition-all duration-[3000] overflow-y-auto `}
        >
            <div className="flex justify-between items-center pb-6 px-2">
                <h2 className="font-medium text-xl">My Order</h2>
                <XCircleIcon
                    className="h-6 w-6 text-gray-500 cursor-pointer hover:text-red-600 transition-all"
                    onClick={() => closeCheckoutSideMenu()}
                />
            </div>

            <div className='overflow-y-auto scroll-smooth  [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:rounded-full
  [&::-webkit-scrollbar-track]:bg-gray-100
  [&::-webkit-scrollbar-thumb]:rounded-full
  [&::-webkit-scrollbar-thumb]:bg-gray-300'>
            {
                cartProducts.map( product => (
                    <OrderCard
                        key={product.id}
                        title={product.title}
                        price={product.price}
                        image={product.image}
                    />
                )
                )
            }
            </div>



        </aside>
    )
};

export { CheckoutSideMenu };