import React from "react";

const ManageUser = () => {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Manage Users
      </h1>
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <table className="table-auto w-full text-left">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-6 py-4 text-sm font-semibold text-gray-600"><b>S.NO</b></th>
              <th className="px-6 py-4 text-sm font-semibold text-gray-600"><b>Name</b></th>
              <th className="px-6 py-4 text-sm font-semibold text-gray-600"><b>Email</b></th>
              <th className="px-6 py-4 text-sm font-semibold text-gray-600"><b>Role</b></th>
              <th className="px-6 py-4 text-sm font-semibold text-gray-600 text-center">
                <b>Actions</b>
              </th>
            </tr>
          </thead>
          <tbody>
            {/* Example Rows */}
            <tr className="hover:bg-gray-50 transition duration-200">
              <td className="px-6 py-4 text-gray-800">1</td>
              <td className="px-6 py-4 text-gray-800">John Doe</td>
              <td className="px-6 py-4 text-gray-600">john.doe@example.com</td>
              <td className="px-6 py-4">
                <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
                  Admin
                </span>
              </td>
              <td className="px-6 py-4 text-center space-x-2">
                <button className="bg-blue-500 text-white text-sm px-4 py-2 rounded-md shadow hover:bg-blue-600 transition duration-300">
                  Edit
                </button>
                <button className="bg-red-500 text-white text-sm px-4 py-2 rounded-md shadow hover:bg-red-600 transition duration-300">
                  Delete
                </button>
              </td>
            </tr>
            <tr className="hover:bg-gray-50 transition duration-200">
              <td className="px-6 py-4 text-gray-800">2</td>
              <td className="px-6 py-4 text-gray-800">Jane Smith</td>
              <td className="px-6 py-4 text-gray-600">jane.smith@example.com</td>
              <td className="px-6 py-4">
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                  User
                </span>
              </td>
              <td className="px-6 py-4 text-center space-x-2">
                <button className="bg-blue-500 text-white text-sm px-4 py-2 rounded-md shadow hover:bg-blue-600 transition duration-300">
                  Edit
                </button>
                <button className="bg-red-500 text-white text-sm px-4 py-2 rounded-md shadow hover:bg-red-600 transition duration-300">
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

export default ManageUser;
