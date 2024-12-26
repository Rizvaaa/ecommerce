import React, { useState, useEffect } from 'react';
import { getAllUsers, updateUser } from '../../api/adminApi';

const ManageUsers = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getAllUsers().then((res) => setUsers(res.data));
    }, []);

    const handleonClick = (id, status) => {
        if (window.confirm(`Are you sure you want to ${status ? "unblock" : "block"} this user?`)) {
            updateUser(id, { blocked: !status }).then((res) => {
                if (res) alert(`User ${status ? "unblocked" : "blocked"} successfully!`);
                else alert(`Failed to ${status ? "unblock" : "block"} user!`);
                getAllUsers().then((res) => setUsers(res.data));
            });
        }
    };

    return (
        <div className="container mx-auto">
            {/* <header className="bg-gradient-to-r from-orange-500 via-yellow-500 to-blue-500 shadow-lg p-6 rounded-md mb-6">
                <h1 className="text-2xl font-bold text-white text-center">Manage Users</h1>
            </header> */}

            {/* User List */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
                {users.filter(user => user.role !== 'admin').map((user) => (
                    <div
                        key={user.id}
                        className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300"
                    >
                        <div className="flex items-center space-x-4 mb-4">
                            <div className="flex-shrink-0">
                                <img
                                    src={user.avatar || 'https://via.placeholder.com/150'}
                                    alt={user.name}
                                    className="w-16 h-16 rounded-full border-2 border-gray-300 object-cover"
                                />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800">{user.name}</h3>
                                <p className="text-sm text-gray-600">{user.email}</p>
                            </div>
                        </div>
                        <div className="flex justify-between items-center mt-4">
                            <span className="text-sm font-medium text-gray-500">Role: {user.role}</span>
                            <button
                                onClick={() => handleonClick(user.id, user.blocked)}
                                className={`px-4 py-2 text-sm font-bold rounded-md transition duration-200 ${
                                  user.blocked
                                    ? 'bg-red-500 text-white hover:bg-red-600'
                                    : 'bg-orange-400 text-white hover:bg-orange-400-600'
                                }`}
                            >
                                {user.blocked ? 'Unblock' : 'Block'}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ManageUsers;
