import React, { useEffect, useState } from "react";
import { getAllProduct } from "../../api/productApi";
import { getAllOrders,getAllUsers } from "../../api/adminApi";

const Dashboard = () => {
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalOrders, setTotalOrders] = useState(0);
  const [totalRevenue, setTotalRevenue] = useState(0);

  useEffect(() => {
    getAllProduct().then((res) => setTotalProducts(res.data.length));
    getAllOrders().then((res) =>{ 
      setTotalOrders(res.data.length)
      const revenue = res.data.reduce((acc, order) => acc + order.totalAmount, 0);
      setTotalRevenue(revenue);
    });
    getAllUsers().then((res) => setTotalUsers(res.data.length));
    }, []);

  return (
    <main className="flex-grow p-6 bg-gradient-to-br from-gray-100 to-gray-200 min-h-screen">
      {/* <h1 className="text-4xl font-bold text-blue-600 mb-6 text-center shadow-md py-3 bg-white rounded">
        Admin Dashboard
      </h1> */}

      {/* Dashboard Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transform hover:scale-105 transition duration-300">
          <h2 className="text-lg font-semibold text-gray-700">Total Products</h2>
          <p className="text-4xl font-bold text-orange-500 mt-2">{totalProducts}</p>
          <p className="text-sm text-gray-500 mt-1">Updated just now</p>
        </div>
        <div className="bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transform hover:scale-105 transition duration-300">
          <h2 className="text-lg font-semibold text-gray-700">Total Orders</h2>
          <p className="text-4xl font-bold text-green-500 mt-2">{totalOrders}</p>
          <p className="text-sm text-gray-500 mt-1">Updated just now</p>
        </div>
        <div className="bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transform hover:scale-105 transition duration-300">
          <h2 className="text-lg font-semibold text-gray-700">Total Users</h2>
          <p className="text-4xl font-bold text-blue-500 mt-2">{totalUsers}</p>
          <p className="text-sm text-gray-500 mt-1">Updated just now</p>
        </div>
        <div className="bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transform hover:scale-105 transition duration-300">
          <h2 className="text-lg font-semibold text-gray-700">Total Revenue</h2>
          <p className="text-4xl font-bold text-green-500 mt-2">₹{totalRevenue.toLocaleString()}</p>
          <p className="text-sm text-gray-500 mt-1">Updated just now</p>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
