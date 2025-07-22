import { FaCartPlus } from "react-icons/fa";
import useCart from "../Hooks/useCart";
import { useState } from "react";

const Header = () => {
  const { cart, removeCart, clearCart } = useCart();

  const [dropdown, setDropdown] = useState<boolean>(false);

  const handleCartbutton = () => {
    setDropdown((prev) => !prev);
  };

  const itemCount = cart.reduce((acc, item) => acc + item.qty, 0);

  const total = cart
    .reduce((acc, item) => acc + item.price * item.qty, 0)
    .toFixed(2);

  const cartItems = cart.map((item) => {
    return (
      <li key={item.id} className="flex items-center justify-between py-2">
        <div>
          <p className="text-gray-500 font-semibold">{item.name}</p>

          <p className="text-sm text-gray-500 ">
            {item.qty} x ${item.price} - {(item.qty * item.price).toFixed(2)}
          </p>
        </div>
        <button
          onClick={() => removeCart(item.id)}
          className="text-red-400 text-sm hover:underline cursor-pointer"
        >
          Remove
        </button>
      </li>
    );
  });

  return (
    <div>
      <header className="flex justify-between items-center bg-white p-6">
        <p className="text-2xl font-bold text-blue-500">ShoppingCart</p>
        <div className="relative">
          <button className="cursor-pointer" onClick={handleCartbutton}>
            <FaCartPlus className="text-2xl text-gray-700 " />

            {itemCount > 0 && (
              <span className="flex justify-center items-center absolute w-5 h-5 rounded-full bg-red-500 text-white text-xs -top-3.5 -right-3 ">
                {itemCount}
              </span>
            )}
          </button>
          {dropdown && (
            <div className="bg-white right-0 absolute border rounded shadow-lg mt-2 w-80 z-50">
              <div className="p-4">
                <h2 className="font-semibold text-lg mb-2">Cart Items</h2>
                {cart.length === 0 ? (
                  <p className="text-gray-500 text-sm ">The Cart is empty</p>
                ) : (
                  <>
                    <ul className="max-h-60 overflow-y-auto divide-y divide-gray-200 ">
                      {cartItems}
                    </ul>

                    <div className="mt-3 font-semibold flex justify-between">
                      <span>Total :</span>
                      <span>{total}</span>
                    </div>
                    <button
                      onClick={clearCart}
                      className=" cursor-pointer w-full rounded transition  hover:bg-red-800 mt-4 text-xl font-semibold bg-red-400 text-white py-1 "
                    >
                      Clear Cart
                    </button>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;
