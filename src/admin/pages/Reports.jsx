import React from "react";

const Reports = () => {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Reports
      </h1>

      {/* Metrics Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white shadow rounded p-4 text-center">
          <h2 className="text-sm font-semibold text-gray-600">Total Sales</h2>
          <p className="text-xl font-bold text-green-500">$120,456</p>
        </div>
        <div className="bg-white shadow rounded p-4 text-center">
          <h2 className="text-sm font-semibold text-gray-600">Total Orders</h2>
          <p className="text-xl font-bold text-blue-500">1,254</p>
        </div>
        <div className="bg-white shadow rounded p-4 text-center">
          <h2 className="text-sm font-semibold text-gray-600">New Customers</h2>
          <p className="text-xl font-bold text-yellow-500">789</p>
        </div>
        <div className="bg-white shadow rounded p-4 text-center">
          <h2 className="text-sm font-semibold text-gray-600">Revenue</h2>
          <p className="text-xl font-bold text-purple-500">$240,789</p>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white shadow rounded p-6 mt-8">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Recent Activity</h2>
        <ul className="space-y-4">
          <li className="flex justify-between">
            <span className="text-sm text-gray-800">Order #1234</span>
            <span className="text-sm text-green-500">Delivered</span>
          </li>
          <li className="flex justify-between">
            <span className="text-sm text-gray-800">Order #1235</span>
            <span className="text-sm text-yellow-500">Pending</span>
          </li>
          <li className="flex justify-between">
            <span className="text-sm text-gray-800">Order #1236</span>
            <span className="text-sm text-red-500">Cancelled</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Reports;
