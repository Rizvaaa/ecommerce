import React from "react";

const Dashboard = () => {
  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white">
        <div className="p-6 text-center font-bold text-xl border-b border-gray-600">
          Admin Dashboard
        </div>
        <nav className="mt-4">
          <ul>
            <li className="px-6 py-3 hover:bg-gray-600">
              <a href="#products">Manage Products</a>
            </li>
            <li className="px-6 py-3 hover:bg-gray-600">
              <a href="#orders">View Orders</a>
            </li>
            <li className="px-6 py-3 hover:bg-gray-600">
              <a href="#users">User Management</a>
            </li>
            <li className="px-6 py-3 hover:bg-gray-600">
              <a href="#settings">Settings</a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-6">
        <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          <div className="bg-white p-4 shadow rounded">
            <h2 className="text-lg font-semibold">Total Products</h2>
            <p className="text-3xl font-bold mt-2">120</p>
          </div>
          <div className="bg-white p-4 shadow rounded">
            <h2 className="text-lg font-semibold">Total Orders</h2>
            <p className="text-3xl font-bold mt-2">450</p>
          </div>
          <div className="bg-white p-4 shadow rounded">
            <h2 className="text-lg font-semibold">Total Users</h2>
            <p className="text-3xl font-bold mt-2">85</p>
          </div>
        </div>

        {/* Sections */}
        <div id="products" className="bg-white p-6 shadow rounded mb-6">
          <h2 className="text-xl font-bold mb-4">Manage Products</h2>
          <p>View, edit, or add new products here.</p>
        </div>

        <div id="orders" className="bg-white p-6 shadow rounded mb-6">
          <h2 className="text-xl font-bold mb-4">View Orders</h2>
          <p>Track and manage customer orders.</p>
        </div>

        <div id="users" className="bg-white p-6 shadow rounded mb-6">
          <h2 className="text-xl font-bold mb-4">User Management</h2>
          <p>Manage user accounts and permissions.</p>
        </div>

        <div id="settings" className="bg-white p-6 shadow rounded">
          <h2 className="text-xl font-bold mb-4">Settings</h2>
          <p>Update admin preferences and configurations.</p>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
