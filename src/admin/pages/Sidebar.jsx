import React, { useState } from 'react';
import { Link } from 'react-router';

function Sidebar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div className="w-screen h-[80px] bg-gradient-to-r from-orange-500 via-yellow-500 to-blue-500 shadow-lg flex items-center px-6">
      <div className="flex justify-between space-x-4 w-full">
        <div className="flex items-center space-x-3">
          <img
            src="assets/ecomm.jpg"
            alt="logo"
            className="w-14 h-14 rounded-full shadow-md"
          />
          <div className="text-2xl font-bold flex items-center space-x-1">
            <span className="text-white">Shop</span>
            <span className="text-black">Cart</span>
          </div>
        </div>

        <div className="flex space-x-4">
          <Link
            to="/admin"
            className="bg-white text-blue-500 px-5 py-2 rounded-full shadow-lg font-medium hover:bg-blue-100 flex justify-center items-center">
            Dashboard
          </Link>
          <Link 
            to="/admin/manageorders"
            className="bg-white text-blue-500 px-5 py-2 rounded-full shadow-lg font-medium hover:bg-blue-100 flex justify-center items-center">
            Manage Orders
          </Link>
          <Link 
            to="/admin/manageproducts"
            className="bg-white text-blue-500 px-5 py-2 rounded-full shadow-lg font-medium hover:bg-blue-100 flex justify-center items-center">
            Manage Products
          </Link>
          <Link 
            to="/admin/manageusers"
            className="bg-white text-blue-500 px-5 py-2 rounded-full shadow-lg font-medium hover:bg-blue-100 flex justify-center items-center">
            Manage Users
          </Link>
          <Link 
            to="/admin/reports"
            className="bg-white text-blue-500 px-5 py-2 rounded-full shadow-lg font-medium hover:bg-blue-100 flex justify-center items-center">
            Reports
          </Link>
        </div>

        <div>
          <ul className="space-y-2">
            <li>
              <button
                className={`px-5 py-2 rounded-full text-white font-medium shadow-lg ${isLoggedIn ? 'bg-red-500 hover:bg-red-600' : 'bg-orange-500 hover:bg-orange-600'}`}
                onClick={toggleLogin}
              >
                {isLoggedIn ? 'Logout' : 'Login'}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
