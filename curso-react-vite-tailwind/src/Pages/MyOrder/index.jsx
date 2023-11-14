import { useContext } from "react";
import { Link } from "react-router-dom";
import { Layout } from "../../Components/Layout";
import { ShoppingCartContext } from "../../Context";
import { OrderCard } from "../../Components/OrderCard";
import { formatCurrency } from "../../Utils";
import { ChevronDoubleLeftIcon } from "@heroicons/react/24/outline";

function MyOrder() {
  const { order } = useContext(ShoppingCartContext);

  //* Catching url ID
  const currentPath = window.location.pathname; //* get current url
  const urlArray = currentPath.split("/"); //* create array from url separated each /
  const idPath = urlArray[urlArray.length - 1]; //* select the last element from Array
  console.log("idpath", idPath);

  //* Evaluate if there are orders in the object order, if do, take the las order
  // const lastOrder = order.length ? order[order.length - 1].products : [];

  const selectLast = (array) => {
    const selected = array.length ? array[array.length - 1] : [];
    return selected;
  };

  const selectById = (array, id) => {
    const selected = array.filter((item) => item.id === id);
    return selected[0];
  };

  const orderToShow =
    idPath === "last" ? selectLast(order) : selectById(order, idPath);

  return (
    <Layout>
      <div className="flex items-center w-80 relative justify-center mb-6">
        <Link to="/my-orders" className="absolute left-0">
          <ChevronDoubleLeftIcon className="h-6 w-6 text-black cursor-pointer hover:text-gray-400" />
        </Link>
        <div className="flex flex-col justify-center items-center">
          <h1>My Order</h1>
          <p className="text-sm text-gray-400">{`( ID: ${orderToShow.id} )`}</p>
        </div>
      </div>

      <div
        className="overflow-y-auto scroll-smooth flex flex-col w-80
                    [&::-webkit-scrollbar]:w-2
                    [&::-webkit-scrollbar-track]:rounded-full
                    [&::-webkit-scrollbar-track]:bg-gray-100
                    [&::-webkit-scrollbar-thumb]:rounded-full
                    [&::-webkit-scrollbar-thumb]:bg-gray-300"
      >
        {orderToShow.products?.map((product) => (
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
          <span>Total Price: {formatCurrency(orderToShow.totalPrice)}</span>
          ) : (
          <span>No articulos</span>
        )}
      </h2>
    </Layout>
  );
}

export default MyOrder;
