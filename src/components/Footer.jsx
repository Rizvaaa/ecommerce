import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-1 h-25">
      <div className="container mx-auto text-center space-y-1">
        <div>
          <h2 className="text-lg font-semibold">Contact Us</h2>
          <ul className="flex justify-center space-x-6 mt-2">
            <li><a href="#" className="hover:underline">Orders</a></li>
            <li><a href="#" className="hover:underline">FAQs</a></li>
            <li><a href="#" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-semibold">Customer Support</h2>
          <ul className="flex justify-center space-x-6 mt-2">
            <li><a href="#" className="hover:underline">Return & Refund Policy</a></li>
            <li><a href="#" className="hover:underline">Shipping Policy</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
          </ul>
        </div>
        <div className="border-t border-gray-700 pt-4">
          <p className="text-sm">&copy; 2024 Your App Name. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;