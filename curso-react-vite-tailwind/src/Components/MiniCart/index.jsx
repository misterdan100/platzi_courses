function MiniCart({ item }) {
    return (
        <div className="flex justify-between items-center w-full h-12 mb-4">
            <div className="flex items-center">
            <figure className="h-full w-12"> 
                <img src={item.image} alt="" className="h-full w-full object-cover"/>
            </figure>
            <p>{item.title}</p>

            </div>
            <p className="font-bold w-36 border-red-400 border-2">$ {item.price}</p>
        </div>
    )
}

export { MiniCart };