import { useContext } from "react";
import { Layout } from "../../Components/Layout";
import { ShoppingCartContext } from "../../Context";
import { OrderCard } from "../../Components/OrderCard";
import { formatCurrency } from '../../Utils'

function MyOrder() {
  const { order } = useContext(ShoppingCartContext);

  //* Evaluate if there are orders in the object order, if do, take the las order
  const lastOrder = order.length ? order[order.length - 1].products : [];

  return (
    <Layout>
      <h1>My Order</h1>

      <div
        className="overflow-y-auto scroll-smooth flex flex-col w-80
                    [&::-webkit-scrollbar]:w-2
                    [&::-webkit-scrollbar-track]:rounded-full
                    [&::-webkit-scrollbar-track]:bg-gray-100
                    [&::-webkit-scrollbar-thumb]:rounded-full
                    [&::-webkit-scrollbar-thumb]:bg-gray-300"
      >
        {lastOrder.map((product) => (
          <OrderCard
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>

      <h2 className="flex justify-between my-2 font-medium text-xl">
        { order.length ? (
          <span>Total Price: {formatCurrency(order[order.length - 1].totalPrice)}</span>
          ) : (
          <span>No articulos</span>
        )}
      </h2>
    </Layout>
  );
}

export default MyOrder;
