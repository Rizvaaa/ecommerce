// import React from "react";
// import { useNavigate } from "react-router";
// import { useState,useEffect } from "react";
// import { getAllProduct } from "../../api/productApi";
// import { deleteProduct } from "../../api/adminApi";
// function ManageProducts  ()  {
//   const navigate=useNavigate()
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     getAllProduct().then((res) => setProducts(res.data));
// }, []);

// const handleDeleteProduct = (id) => {
//     if (window.confirm("Are you sure you want to delete this product?"))
//     {
//         deleteProduct(id).then((res) => {
//             if (res) alert("Product deleted successfully!");
//             else alert("Failed to delete product!");
//             setProducts(products.filter(product => product.id !== id));
//         });
//     }
// }
//   return (
//     <div className="container mx-auto p-6">
//       <h1 className="text-2xl font-bold mb-6 text-center">Manage Products</h1>

//       <div className="mb-4">
//         <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
//           Add New Product
//         </button>
//       </div>

//       <div className="overflow-x-auto">
//         <table className="table-auto w-full border-collapse border border-gray-200">
//           <thead>
//             <tr className="bg-gray-100">
//               <th className="border border-gray-200 px-4 py-2">Image</th>
//               <th className="border border-gray-200 px-4 py-2">Product Name</th>
//               <th className="border border-gray-200 px-4 py-2">Price</th>
//               <th className="border border-gray-200 px-4 py-2">Description</th>
//               <th className="border border-gray-200 px-4 py-2">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//           {products.map(product => (
//             <tr key={product.id}>
//               <td className="border border-gray-200 px-4 py-2"><img src={product.image} alt="img" className="w-16 h-16 object-cover rounded-md" /></td>
//               <td className="border border-gray-200 px-4 py-2">{product.name}</td>
//               <td className="border border-gray-200 px-4 py-2">₹{product.price}</td>
//               <td className="border border-gray-200 px-4 py-2 text-center">
//                 {product.description.length > 50? product.description.substring(0, 50) + "...": product.description}
//               </td>
//               <td className="border border-gray-200 px-4 py-2 flex justify-center gap-2">
//                 <button 
//                     onClick={navigate(`/admin/editproduct/${product.id}`)}
//                     className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600">
//                   Edit
//                 </button>
//                 <button 
//                     onClick={navigate(`/admin/addproduct/${product.id}`)}
//                     className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//       {/* Mobile-Friendly Product Cards */}
//       <div className="md:hidden">
//         {products.map((product) => (
//             <div
//                 key={product.id}
//                 className="border rounded-lg p-4 mb-4 bg-gray-50 shadow-sm"
//             >
//                 <div className="flex items-center space-x-4 mb-4">
//                     <img
//                         src={product.image}
//                         alt="Product"
//                         className="w-16  object-cover rounded-md"
//                     />
//                     <div>
//                         <h3 className="font-semibold text-gray-800">
//                             {product.name}
//                         </h3>
//                         <p className="text-sm text-gray-600">₹{product.price}</p>
//                     </div>
//                 </div>
//                 <p className="text-gray-700 text-sm mb-4 truncate">
//                     {product.description}
//                 </p>
//                 <div className="flex justify-between">
//                         <button 
//                           onClick={navigate(`/admin/editproduct/${product.id}`)}
//                           className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 px-3 rounded transition duration-200">
//                             Edit
//                         </button>
//                     <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-3 rounded transition duration-200" 
//                        onClick={() => handleDeleteProduct(product.id)}>
//                         Delete
//                     </button>
//                 </div>
//             </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ManageProducts;
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { getAllProduct } from "../../api/productApi";
import { deleteProduct } from "../../api/adminApi";

function ManageProducts() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProduct().then((res) => setProducts(res.data));
  }, []);

  const handleDeleteProduct = (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      deleteProduct(id).then((res) => {
        if (res) alert("Product deleted successfully!");
        else alert("Failed to delete product!");
        setProducts(products.filter((product) => product.id !== id));
      });
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">Manage Products</h1>

      <div className="mb-4">
        <button
          onClick={() => navigate("/admin/addproduct")}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Add New Product
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-200 px-4 py-2">Image</th>
              <th className="border border-gray-200 px-4 py-2">Product Name</th>
              <th className="border border-gray-200 px-4 py-2">Price</th>
              <th className="border border-gray-200 px-4 py-2">Description</th>
              <th className="border border-gray-200 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td className="border border-gray-200 px-4 py-2">
                  <img
                    src={product.image}
                    alt="img"
                    className="w-16 h-16 object-cover rounded-md"
                  />
                </td>
                <td className="border border-gray-200 px-4 py-2">{product.name}</td>
                <td className="border border-gray-200 px-4 py-2">₹{product.price}</td>
                <td className="border border-gray-200 px-4 py-2 text-center">
                  {product.description.length > 50
                    ? product.description.substring(0, 50) + "..."
                    : product.description}
                </td>
                <td className="border border-gray-200 px-4 py-2 flex justify-center gap-2">
                  <button
                    onClick={() => navigate(`/admin/editproduct/${product.id}`)}
                    className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteProduct(product.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile-Friendly Product Cards */}
      <div className="md:hidden">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg p-4 mb-4 bg-gray-50 shadow-sm"
          >
            <div className="flex items-center space-x-4 mb-4">
              <img
                src={product.image}
                alt="Product"
                className="w-16 object-cover rounded-md"
              />
              <div>
                <h3 className="font-semibold text-gray-800">{product.name}</h3>
                <p className="text-sm text-gray-600">₹{product.price}</p>
              </div>
            </div>
            <p className="text-gray-700 text-sm mb-4 truncate">
              {product.description}
            </p>
            <div className="flex justify-between">
              <button
                onClick={() => navigate(`/admin/editproduct/${product.id}`)}
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 px-3 rounded transition duration-200"
              >
                Edit
              </button>
              <button
                className="bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-3 rounded transition duration-200"
                onClick={() => handleDeleteProduct(product.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ManageProducts;
