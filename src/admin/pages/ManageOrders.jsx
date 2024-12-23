import React from "react";

const ManageOrders = () => {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Manage Orders
      </h1>
      <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <table className="table-auto w-full text-left">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-6 py-4 text-sm font-semibold text-gray-600">#</th>
              <th className="px-6 py-4 text-sm font-semibold text-gray-600">Order ID</th>
              <th className="px-6 py-4 text-sm font-semibold text-gray-600">Customer</th>
              <th className="px-6 py-4 text-sm font-semibold text-gray-600">Total</th>
              <th className="px-6 py-4 text-sm font-semibold text-gray-600">Status</th>
              <th className="px-6 py-4 text-sm font-semibold text-gray-600 text-center">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {/* Example Rows */}
            <tr className="hover:bg-gray-50 transition duration-200">
              <td className="px-6 py-4 text-gray-800">1</td>
              <td className="px-6 py-4 text-gray-800">ORD123456</td>
              <td className="px-6 py-4 text-gray-800">John Doe</td>
              <td className="px-6 py-4 text-gray-800">$120.00</td>
              <td className="px-6 py-4">
                <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
                  Delivered
                </span>
              </td>
              <td className="px-6 py-4 text-center space-x-2">
                <button className="bg-blue-500 text-white text-sm px-4 py-2 rounded-md shadow hover:bg-blue-600 transition duration-300">
                  View
                </button>
                <button className="bg-red-500 text-white text-sm px-4 py-2 rounded-md shadow hover:bg-red-600 transition duration-300">
                  Cancel
                </button>
              </td>
            </tr>
            <tr className="hover:bg-gray-50 transition duration-200">
              <td className="px-6 py-4 text-gray-800">2</td>
              <td className="px-6 py-4 text-gray-800">ORD123457</td>
              <td className="px-6 py-4 text-gray-800">Jane Smith</td>
              <td className="px-6 py-4 text-gray-800">$85.00</td>
              <td className="px-6 py-4">
                <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-3 py-1 rounded-full">
                  Pending
                </span>
              </td>
              <td className="px-6 py-4 text-center space-x-2">
                <button className="bg-blue-500 text-white text-sm px-4 py-2 rounded-md shadow hover:bg-blue-600 transition duration-300">
                  View
                </button>
                <button className="bg-red-500 text-white text-sm px-4 py-2 rounded-md shadow hover:bg-red-600 transition duration-300">
                  Cancel
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageOrders;
