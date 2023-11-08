import { XCircleIcon } from '@heroicons/react/24/outline'
import { useContext, useEffect, useState } from 'react';
import { ShoppingCartContext } from '../../Context';

const ProductDetail = () => {
    const { isProductDetailOpen, closeProductDetail, productToShow } = useContext(ShoppingCartContext)
    const [ precioPesos, setPrecioPesos ] = useState(String)
    const [ dollarPriceAPI, setDollarPriceAPI ] = useState(Number)

    fetch('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=USD&tsyms=COP')
            .then(respuesta => respuesta.json())
            .then(datos => convertToCOP(datos.RAW.USD.COP.PRICE, productToShow.price))

    const convertToCOP = async (dollarPrice, dolares) => {
        let copPrice = parseInt((dolares * dollarPrice));
        setPrecioPesos(copPrice.toLocaleString('es-CO'))
        setDollarPriceAPI( Math.floor(dollarPrice).toLocaleString('es-CO') );
    }

    return (
        <aside
            className={`${isProductDetailOpen ? 'opacity-100 right-2' : 'opacity-0 right-[-380px]'} flex flex-col fixed  top-[80px] p-6 border bg-white/60 backdrop-blur-3xl border-gray-400 rounded-lg w-[360px] h-[calc(100vh-90px)] transition-all duration-[3000] overflow-y-auto`}
        >
            <div className="flex justify-between items-center pb-6 px-2">
                <h2 className="font-medium text-xl">Detail</h2>
                <XCircleIcon
                    className="h-6 w-6 text-gray-500 cursor-pointer hover:text-red-600 transition-all"
                    onClick={() => closeProductDetail()}
                />
            </div>

            <figure className=''>
                <img
                    src={productToShow.image}
                    className='w-full h-full rounded-lg'
                    alt={productToShow.title} />
            </figure>

            <p className='flex flex-col py-6 px-2'>
                <span className='font-bold text-2xl '>$ {productToShow.price} <span className='font-light text-base italic'>($ {precioPesos} )</span></span>
                <span className='font-light italic text-sm mb-4'>Precio del dolar: $ {dollarPriceAPI}</span>
                <span className='font-medium text-md mb-2'>{productToShow.title}</span>
                <span className='font-light text-sm'>{productToShow.description}</span>
            </p>
        </aside>
    )
};

export { ProductDetail };