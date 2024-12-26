import React, { useState } from 'react';
import { Link } from 'react-router';
import { useUser } from '../../contexts/UserContext';

function Sidebar() {
  const { handleLogout } = useUser();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleOutsideClick = (e) => {
    if (e.target.id === 'menu-overlay') {
      setMenuOpen(false);
    }
  }

  return (
    <div className="w-screen h-[80px] bg-gradient-to-r from-orange-500 via-yellow-500 to-blue-500 shadow-lg flex items-center px-6">
      <div className="flex justify-between space-x-4 w-full">
        <div className="flex items-center space-x-3">
          <img
            src="https://cdn.dribbble.com/userupload/17039932/file/original-983633d1f6de58f5d871f174ff34f057.jpg?format=webp&resize=320x240&vertical=center"
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
        </div>

        <div>
          <ul className="space-y-2">
            <li>
              <button
                className={`px-5 py-2 rounded-full text-white font-medium shadow-lg bg-orange-500 hover:bg-orange-600`}
                onClick={handleLogout}
              >
                Logout
              </button>
            </li>
          </ul>
        </div>

        {/* Hamburger Icon */}
        <button
          className="block md:hidden p-2 focus:outline-none z-50"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/15178/15178747.png"
            alt="menu-icon"
            className="w-8 h-8"
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
            id="menu-overlay"
            className="fixed inset-0 z-40 top-[71px]"
            onClick={handleOutsideClick}
          >
            <div className="fixed right-0 w-full bg-gray-900 text-center space-y-4 p-4 md:hidden z-50">
              <Link
                to="/admin"
                className="block px-4 py-2 rounded-md hover:bg-gray-500 transition duration-300 font-medium"
                onClick={() => setMenuOpen(false)}
              >
                Dashboard
              </Link>
              <Link
                to="/admin/manage-products"
                className="block px-4 py-2 rounded-md hover:bg-gray-500 transition duration-300 font-medium"
                onClick={() => setMenuOpen(false)}
              >
                Manage Products
              </Link>
              <Link
                to="/admin/manage-users"
                className="block px-4 py-2 rounded-md hover:bg-gray-500 transition duration-300 font-medium"
                onClick={() => setMenuOpen(false)}
              >
                Manage Users
              </Link>
              <Link
                to="/admin/manage-orders"
                className="block px-4 py-2 rounded-md hover:bg-gray-500 transition duration-300 font-medium"
                onClick={() => setMenuOpen(false)}
              >
                Manage Orders
              </Link>
              <button
                className="px-4 py-2 rounded-md hover:bg-gray-500 transition duration-300 font-medium bg-gray-400"
                onClick={() => {
                  handleLogout();
                  setMenuOpen(false);
                }}
              >
                Logout
              </button>
            </div>
        </div>
      )}
    </div>
  );
}

export default Sidebar;
