import { XMarkIcon } from "@heroicons/react/24/outline";

const OrderCard = props => {
    const { id, title, image, price, handleDelete } = props;
    return (
        <div className="flex justify-between item-center mb-4">
            <div className="flex items-center gap-2">
                <figure className="w-20 h-20">
                    <img src={image} alt="" className="w-full h-full rounded-lg object-cover" />
                </figure>

                <p className="text-sm font-light ">{title.slice(0, 20)}</p>
            </div>

            <div className="flex items-center gap-2">
                <p className="font-medium text-lg">{price.toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'USD'
                })}</p>
                <XMarkIcon className="h-6 w-6 text-black cursor-pointer hover:text-red-500" onClick={() => handleDelete(id)}/>
            </div>

        </div>
    )
}

export { OrderCard };