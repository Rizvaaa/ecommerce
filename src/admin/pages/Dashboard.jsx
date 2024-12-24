import React from "react";

const Dashboard = () => {
  return (
    <main className="flex-grow p-6 bg-gradient-to-br from-gray-100 to-gray-200 min-h-screen">
      {/* <h1 className="text-4xl font-bold text-blue-600 mb-6 text-center shadow-md py-3 bg-white rounded">
        Admin Dashboard
      </h1> */}

      {/* Dashboard Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transform hover:scale-105 transition duration-300">
          <h2 className="text-lg font-semibold text-gray-700">Total Products</h2>
          <p className="text-4xl font-bold text-orange-500 mt-2">120</p>
          <p className="text-sm text-gray-500 mt-1">Updated just now</p>
        </div>
        <div className="bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transform hover:scale-105 transition duration-300">
          <h2 className="text-lg font-semibold text-gray-700">Total Orders</h2>
          <p className="text-4xl font-bold text-green-500 mt-2">450</p>
          <p className="text-sm text-gray-500 mt-1">Updated just now</p>
        </div>
        <div className="bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transform hover:scale-105 transition duration-300">
          <h2 className="text-lg font-semibold text-gray-700">Total Users</h2>
          <p className="text-4xl font-bold text-blue-500 mt-2">85</p>
          <p className="text-sm text-gray-500 mt-1">Updated just now</p>
        </div>
      </div>

      {/* Additional Sections */}
      {/* <div className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Recent Activity</h2>
        <div className="bg-white p-4 shadow-lg rounded-lg">
          <p className="text-gray-600">No recent activity to display.</p>
        </div>
      </div> */}
    </main>
  );
};

export default Dashboard;
