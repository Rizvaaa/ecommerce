import React from "react";
import { useNavigate } from "react-router";

function Checkout  () {
  const navigate=useNavigate()
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-md p-6 rounded shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Checkout</h2>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border p-2 rounded"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border p-2 rounded"
          />
          <input
            type="text"
            placeholder="Address"
            className="w-full border p-2 rounded"
          />
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="City"
              className="w-1/2 border p-2 rounded"
            />
            <input
              type="text"
              placeholder="ZIP Code"
              className="w-1/2 border p-2 rounded"
            />
          </div>
        </form>

        <div className="mt-6 flex justify-between">
          <button
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700 transition duration-300"
            onClick={()=>{navigate("/cart")}}
          >
            Cancel
          </button>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
            onClick={()=>{navigate("/order")}}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
