import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";

const Cart = () => {
  // Example cart state (replace this with global state or props as needed)
  const [cartItems, setCartItems] = useState([]);

  const navigate=useNavigate()

  useEffect(() => {
    // Fetch cart items (if stored globally or in local storage)
    // For now, setting some example items
    setCartItems([
      {
        id: 1,
        name: "Product 1",
        description: "Description for Product 1",
        price: 10,
        quantity: 2,
      },
      {
        id: 2,
        name: "Product 2",
        description: "Description for Product 2",
        price: 20,
        quantity: 1,
      },
    ]);
  }, []);

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6 text-center">Your Cart</h1>
      {cartItems.length > 0 ? (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border p-4 rounded shadow"
            >
              <div>
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-gray-600">{item.description}</p>
                <p className="text-gray-900 font-bold">${item.price} x {item.quantity}</p>
              </div>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 transition duration-300"
                onClick={() => {
                  // Remove item from cart
                  setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
                }}
              >
                Remove
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 transition duration-300"
                onClick={()=>navigate("/checkout")}
              >
                  Buy now
              </button>
            </div>
          ))}
          <div className="text-right font-bold text-lg">
            Total: ${totalPrice.toFixed(2)}
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
