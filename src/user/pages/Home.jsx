import React, { useEffect, useState } from "react";
import { getAllProduct } from "../../api/productApi";
import { useNavigate } from "react-router";
import { useCart } from "../../contexts/CartContext";

function Home() {
  const {addToCart}=useCart()
  const [products, setProducts] = useState([]);
  const[error,setError]=useState("")
  const navigate=useNavigate()

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getAllProduct(); // Use the function from ProductApi.js
        setProducts(response.data); // Response contains the products
      } catch (error) {
        console.error("Failed to fetch products: ", error);
        setError("Error fetching product details");
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto p-8">
      {error && <p className="text-red-500 mb-4">{error}</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          
          <div
          onClick={() => navigate(`/productdetail/${product.id}`)} key={product.id}
            className="border border-gray-200 rounded-lg shadow-lg p-4 hover:shadow-2xl transition duration-300"
          >
            <div
              className="w-full h-40 flex justify-center cursor-pointer"
              // onClick={() => navigate(`/product/${product.id}`)}
            >
              <img src={product.image} alt={product.name} />
            </div>
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-900 font-bold">{product.price}</p>
            <button
                  onClick={(e) => {e.preventDefault()
                    addToCart(product)
                    alert(`Added ${product.name} to the cart`)}}
                   className="mt-2 bg-orange-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-orange-600 transition"
            >
             Add to Cart
            </button>

          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;

