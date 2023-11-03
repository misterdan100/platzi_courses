const Card = () => {
    return (
        <div className="bg-gray-100 cursor-pointer w-56 h-60 m-4 rounded-lg">
            <figure className="relative mb-2 w-full h-4/5">
                <img src="http://source.unsplash.com/lxvSFw3YXQA" alt="headphones" className="object-cover w-full h-full rounded-lg" />
                <div className="absolute top-0 right-0 flex justify-center items-center rounded-full backdrop-blur-sm bg-white/70 w-6 h-6 m-2 font-medium p-1 hover:scale-110 transition-all">+</div>
                <span className="absolute bottom-0 left-0 backdrop-blur-sm bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">Electronics</span>
            </figure>
            <p className="flex justify-between items-center px-2">
                <span className="text-sm font-light">Headphones</span>
                <span className="text-lg font-medium">$ 300</span>
            </p>
        </div>
    )
}

export { Card };