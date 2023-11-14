import { XMarkIcon } from "@heroicons/react/24/outline";
import { formatCurrency, formatDate } from "../../Utils";

const OrdersCard = (props) => {
  const { totalPrice, totalProducts } = props;

  return (
    <div className="flex justify-between item-center mb-4 border border-balck">
      <p>
        <span>{formatDate(new Date())}</span>
        <span>{totalProducts}</span>
        <span>{totalPrice}</span>
      </p>
    </div>
  );
};

export { OrdersCard };
