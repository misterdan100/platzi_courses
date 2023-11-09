import { XCircleIcon } from '@heroicons/react/24/outline'
import { useContext, useEffect, useState } from 'react';
import { ShoppingCartContext } from '../../Context';

const CheckoutSideMenu = () => {
    const { isCheckoutSideMenuOpen, closeCheckoutSideMenu, productToShow } = useContext(ShoppingCartContext)

    return (
        <aside
            className={`${isCheckoutSideMenuOpen ? 'opacity-100 right-2' : 'opacity-0 right-[-380px]'} flex flex-col fixed  top-[80px] p-6 border bg-white/60 backdrop-blur-3xl border-gray-400 rounded-lg w-[360px] h-[calc(100vh-90px)] transition-all duration-[3000] overflow-y-auto`}
        >
            <div className="flex justify-between items-center pb-6 px-2">
                <h2 className="font-medium text-xl">My Order</h2>
                <XCircleIcon
                    className="h-6 w-6 text-gray-500 cursor-pointer hover:text-red-600 transition-all"
                    onClick={() => closeCheckoutSideMenu()}
                />
            </div>


        </aside>
    )
};

export { CheckoutSideMenu };