import {
  ChevronRightIcon,
  ShoppingCartIcon,
  CalendarIcon,
} from "@heroicons/react/24/outline";
import { formatCurrency, formatDate } from "../../Utils";

const OrdersCard = (props) => {
  const { totalPrice, totalProducts, orderId } = props;

  return (
    <div className="flex justify-between item-center mb-4 border border-black w-96 h- px-4 py-2 rounded-lg">
      <div className="flex justify-between items-center w-full">

        <div className="flex flex-col">
          <span className="font-bold">{`Order ID: ${orderId}`}</span>
          <div className="font-light flex">
            <CalendarIcon className="h-5 w-5 mr-2 text-black" />
            {formatDate(new Date())}
          </div>
          
          <div className="font-light flex">
            <ShoppingCartIcon className="h-5 w-5 mr-2 text-black" />
            <p>
              {totalProducts} {totalProducts === 1 ? "Article" : "Articles"}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-2xl font-medium">
            {formatCurrency(totalPrice)}
          </span>

          <ChevronRightIcon className="h-6 w-6 text-black cursor-pointer hover:text-gray-400" />
        </div>
      </div>
    </div>
  );
};

export { OrdersCard };
