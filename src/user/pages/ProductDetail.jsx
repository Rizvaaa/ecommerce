import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllProducts } from "../../api/productApi";

function ProductDetail() {
  
  const [product, setProduct] = useState([]);
  const navigate=useNavigate()

  useEffect(() => {
      getAllProducts()
        .then((res) => {
          setProduct(res.data);
        })
        .catch((err) => console.log(err));
    }, []);

  

  return (
    <div className="container mx-auto p-8 flex justify-center items-center min-h-screen">
      <div className="max-w-lg border border-gray-200 rounded-lg shadow-lg p-6 text-center">
        <img
          src={product.image}
          alt={product.name}
          className="mb-4 rounded-lg w-full h-64 object-cover"
        />
        <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
        <p className="text-gray-700 mb-4">{product.description}</p>
        <p className="text-gray-900 font-bold text-xl mb-4">${product.price}</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
             onClick={() => navigate("/cart")}
        >
            Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetail;
