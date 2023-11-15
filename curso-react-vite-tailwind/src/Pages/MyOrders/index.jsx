import { useContext } from "react";
import { Link } from "react-router-dom";
import { Layout } from "../../Components/Layout";
import { OrdersCard } from "../../Components/OrdersCard";
import { ShoppingCartContext } from "../../Context";
import { ChevronDoubleLeftIcon } from "@heroicons/react/24/outline";


function MyOrders() {
  const { order } = useContext(ShoppingCartContext);

  return (
    <Layout>
      <div className="flex items-center relative w-80 justify-center mb-6">
        <Link to="/my-order" className="absolute left-0">
          <ChevronDoubleLeftIcon className="h-6 w-6 text-black cursor-pointer hover:text-gray-400" />
        </Link>
        <h1 className="font-medium text-xl">My Orders</h1>
      </div>
      {order.map((order, index) => (
        <Link to={`/my-orders/${order.id}`} key={index}>
          <OrdersCard
            totalPrice={order.totalPrice}
            totalProducts={order.totalProducts}
            orderId={order.id}
          />
        </Link>
      ))}
    </Layout>
  );
}

export default MyOrders;
