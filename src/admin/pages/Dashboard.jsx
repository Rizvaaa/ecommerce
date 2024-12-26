import React, { useEffect, useState } from "react";
import { getAllProduct } from "../../api/productApi";
import { getAllOrders, getAllUsers } from "../../api/adminApi";
import { FaUsers, FaShoppingCart, FaBoxes, FaDollarSign } from "react-icons/fa";

const Dashboard = () => {
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalOrders, setTotalOrders] = useState(0);
  const [totalRevenue, setTotalRevenue] = useState(0);

  useEffect(() => {
    getAllProduct().then((res) => setTotalProducts(res.data.length));
    getAllOrders().then((res) => {
      setTotalOrders(res.data.length);
      const revenue = res.data.reduce((acc, order) => acc + order.total, 0);
      setTotalRevenue(revenue);
    });
    getAllUsers().then((res) => setTotalUsers(res.data.length));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-6">

      {/* Dashboard Content */}
      <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6 flex items-center space-x-4">
          <FaUsers className="text-blue-500 text-4xl" />
          <div>
            <h2 className="text-lg font-semibold text-gray-600">Total Users</h2>
            <p className="text-3xl font-bold text-gray-900">{totalUsers}</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 flex items-center space-x-4">
          <FaBoxes className="text-orange-500 text-4xl" />
          <div>
            <h2 className="text-lg font-semibold text-gray-600">Total Products</h2>
            <p className="text-3xl font-bold text-gray-900">{totalProducts}</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 flex items-center space-x-4">
          <FaShoppingCart className="text-green-500 text-4xl" />
          <div>
            <h2 className="text-lg font-semibold text-gray-600">Total Orders</h2>
            <p className="text-3xl font-bold text-gray-900">{totalOrders}</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 flex items-center space-x-4">
          <FaDollarSign className="text-green-600 text-4xl" />
          <div>
            <h2 className="text-lg font-semibold text-gray-600">Total Revenue</h2>
            <p className="text-3xl font-bold text-gray-900">₹{totalRevenue.toLocaleString()}</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
