import React, { useEffect, useState } from "react";
import { getProductbyId } from "../../api/productApi";
import { useParams } from "react-router-dom";
import { useCart } from "../../contexts/CartContext";

function ProductDetail() {
  const {id}=useParams()
  const [product, setProduct] = useState([]);
  const { addToCart } = useCart();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  // const navigate=useNavigate()

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await getProductbyId(id); // Use the function from ProductApi.js
        setProduct(response.data); // Set the product data
      } catch (err) {
        console.error("Error fetching product details:", err);
        setError("Failed to load product details.");
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);
  
  if (!product) return <div>Loading...</div>;
  if (loading) return <p className="text-center my-10">Loading...</p>;
  if (error) return <p className="text-center my-10 text-red-500">{error}</p>;


  return (
    <div className="container mx-auto p-8 flex justify-center items-center min-h-screen">
      {product && (
        <>
      <div className="max-w-lg border border-gray-200 rounded-lg shadow-lg p-6 text-center">
        <img
          src={product.image}
          alt={product.name}
          className="mb-4 rounded-lg w-64 h-64 object-cover"
        />
        <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
        <p className="text-gray-700 mb-4">{product.description}</p>
        <p className="text-gray-900 font-bold text-xl mb-4">{product.price}</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
            onClick={(e) =>{
              e.preventDefault()
              addToCart(product)
              alert(`Added ${product.name} to the cart`)}}
        >
            Add to Cart
        </button>
      </div>
    </>
    )}
    </div>
  );
}

export default ProductDetail;
