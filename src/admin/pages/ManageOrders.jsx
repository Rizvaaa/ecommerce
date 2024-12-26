import React, { useState, useEffect } from 'react';
import { getAllOrders } from '../../api/adminApi';
import { FiPackage, FiUser, FiCalendar } from 'react-icons/fi';
import { MdCurrencyRupee } from 'react-icons/md';

const ManageOrders = () => {
    const [orders, setOrders] = useState([]);
    const [expandedOrder, setExpandedOrder] = useState(null);

    useEffect(() => {
        getAllOrders().then((res) => setOrders(res.data));
    }, []);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return {
            date: date.toLocaleDateString(),
            time: date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        };
    };

    return (
        <div className="container mx-auto max-w-7xl">
            {/* <header className="bg-gradient-to-r from-orange-500 via-yellow-500 to-blue-500 shadow-lg p-4 rounded-md mb-4">
                <h1 className="text-2xl font-bold text-white text-center">Manage Orders</h1>
            </header> */}

            <div className="grid grid-cols-1 gap-6 p-4">
                {orders.length === 0 ? (
                    <div className="text-center py-12 bg-gray-50 rounded-lg shadow-md">
                        <FiPackage className="mx-auto h-12 w-12 text-gray-400" />
                        <p className="mt-2 text-gray-500">No orders found</p>
                    </div>
                ) : (
                    orders.map((order) => {
                        const { date, time } = formatDate(order.date);
                        const isExpanded = expandedOrder === order.id;

                        return (
                            <div
                                key={order.id}
                                className={`bg-white rounded-lg border shadow-md transition-all duration-200 ${
                                    isExpanded ? 'ring-2 ring-orange-300' : 'hover:shadow-lg'
                                }`}
                            >
                                <div className="p-6">
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                        <div>
                                            <div className="flex items-center space-x-2 mb-2">
                                                <FiPackage className="text-orange-500" />
                                                <span className="font-medium text-gray-800">Order Details</span>
                                            </div>
                                            <p className="text-sm text-gray-600">ID: #{order.id}</p>
                                        </div>

                                        <div>
                                            <div className="flex items-center space-x-2 mb-2">
                                                <FiUser className="text-orange-500" />
                                                <span className="font-medium text-gray-800">Customer</span>
                                            </div>
                                            <p className="text-sm text-gray-600">{order.userName}</p>
                                        </div>

                                        <div>
                                            <div className="flex items-center space-x-2 mb-2">
                                                <FiCalendar className="text-orange-500" />
                                                <span className="font-medium text-gray-800">Order Date</span>
                                            </div>
                                            <p className="text-sm text-gray-600">{date}</p>
                                            <p className="text-sm text-gray-500">{time}</p>
                                        </div>

                                        <div>
                                            <div className="flex items-center space-x-2 mb-2">
                                                <MdCurrencyRupee className="text-orange-500" />
                                                <span className="font-medium text-gray-800">Total Amount</span>
                                            </div>
                                            <p className="text-lg font-semibold text-gray-800">₹{order.total}</p>
                                        </div>
                                    </div>

                                    <div className="flex justify-between items-center mt-6 pt-4 border-t">
                                        <button
                                            onClick={() => setExpandedOrder(isExpanded ? null : order.id)}
                                            className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-orange-500 to-yellow-500 rounded-md shadow-md hover:shadow-lg"
                                        >
                                            {isExpanded ? 'Hide Details' : 'View Details'}
                                        </button>
                                    </div>
                                </div>

                                {isExpanded && (
                                    <div className="border-t border-gray-100 bg-gray-50 p-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <h3 className="text-lg font-bold text-gray-800 mb-4">Order Items</h3>
                                                <div className="space-y-3">
                                                    {order.items.map((item, index) => (
                                                        <div
                                                            key={index}
                                                            className="flex items-center space-x-4 bg-gray-50 p-3 border-b border-gray-200"
                                                        >
                                                            <div className="flex-shrink-0">
                                                                <img
                                                                    src={item.image || 'https://via.placeholder.com/150'}
                                                                    alt={item.name}
                                                                    className="w-16 h-16 object-cover rounded-md"
                                                                />
                                                            </div>
                                                            <div className="flex-1 min-w-0">
                                                                <p className="font-bold text-gray-800">{item.name}</p>
                                                                <p className="text-sm text-gray-500">
                                                                    Quantity: {item.qty} × ₹{item.price}
                                                                </p>
                                                                <p className="text-sm font-medium text-gray-800">
                                                                    Subtotal: ₹{item.qty * item.price}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="space-y-6">
                                                <div>
                                                    <h3 className="text-lg font-bold text-gray-800 mb-2">Shipping Address</h3>
                                                    <div className="bg-white p-2 border rounded-md shadow-sm">
                                                        <p className="font-normal text-gray-600">{order.address?.Address}</p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <h3 className="text-lg font-bold text-gray-800 mb-2">Payment Details</h3>
                                                    <div className="bg-white p-2 border rounded-md shadow-sm">
                                                        <p className="text-gray-600">Payment Method: {order.paymentMethod}</p>
                                                        <p className="font-normal text-gray-800 mt-2">Total Paid: ₹{order.total}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })
                )}
            </div>
        </div>
    );
};

export default ManageOrders;
