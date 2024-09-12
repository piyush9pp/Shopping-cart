import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="min-h-screen p-4 flex flex-col">
      {cart.length > 0 ? (
        <div className="flex flex-col md:flex-row flex-grow gap-6">
          {/* Cart Items Section */}
          <div className="flex-1 overflow-auto max-h-[80vh]">
            {cart.map((item, index) => (
              <div
                key={item.id}
                className="p-2 border border-gray-300 shadow-sm rounded-md bg-white mb-2"
              >
                <CartItem item={item} itemIndex={index} />
              </div>
            ))}
          </div>

          {/* Summary Section */}
          <div className="w-full md:w-1/3 flex-shrink-0 p-4 shadow-lg rounded-lg border border-gray-300">
            <div>
              <h2 className="text-[18px] text-green-500 font-bold text-center">Your Cart</h2>
              <h1 className="text-[22px] text-green-500 font-extrabold mt-[-6px] text-center">Summary</h1>
              <p className="text-base text-gray-700 font-bold text-center">
                Total Items: {cart.length}
              </p>
            </div>

            <div className="mt-4">
              <p className="text-base text-gray-800 font-bold text-center">
                Total Amount:{" "}
                <span className="text-green-500">${totalAmount.toFixed(2)}</span>
              </p>
              <button className="w-full h-10 mt-2 flex justify-center items-center font-bold text-white bg-green-600 hover:bg-green-700 transition-all duration-200 rounded-md">
                CheckOut Now
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center flex-grow">
          <h1 className="text-lg font-semibold text-gray-800 italic mb-2">Cart Empty</h1>
          <Link to="/">
            <button className="text-white bg-blue-600 rounded-full font-semibold text-xs p-2 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;