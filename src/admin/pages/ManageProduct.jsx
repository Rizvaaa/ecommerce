import React from "react";

function ManageProduct  ()  {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">Manage Products</h1>

      <div className="mb-4">
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
          Add New Product
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-200 px-4 py-2">#</th>
              <th className="border border-gray-200 px-4 py-2">Product Name</th>
              <th className="border border-gray-200 px-4 py-2">Category</th>
              <th className="border border-gray-200 px-4 py-2">Price</th>
              <th className="border border-gray-200 px-4 py-2">Stock</th>
              <th className="border border-gray-200 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-200 px-4 py-2 text-center">1</td>
              <td className="border border-gray-200 px-4 py-2">Product A</td>
              <td className="border border-gray-200 px-4 py-2">Category 1</td>
              <td className="border border-gray-200 px-4 py-2">$20.00</td>
              <td className="border border-gray-200 px-4 py-2 text-center">50</td>
              <td className="border border-gray-200 px-4 py-2 flex justify-center gap-2">
                <button className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600">
                  Edit
                </button>
                <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                  Delete
                </button>
              </td>
            </tr>
            <tr>
              <td className="border border-gray-200 px-4 py-2 text-center">2</td>
              <td className="border border-gray-200 px-4 py-2">Product B</td>
              <td className="border border-gray-200 px-4 py-2">Category 2</td>
              <td className="border border-gray-200 px-4 py-2">$30.00</td>
              <td className="border border-gray-200 px-4 py-2 text-center">100</td>
              <td className="border border-gray-200 px-4 py-2 flex justify-center gap-2">
                <button className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600">
                  Edit
                </button>
                <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageProduct;
