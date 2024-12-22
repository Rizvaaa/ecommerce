import React, { useEffect, useState } from "react";
import { getAllProducts } from "../../api/productApi";
import { useNavigate } from "react-router";
// import { useCart } from "../../context/CartContext";

function Home() {
  // const { addToCart } = useCart();
  const [products, setProducts] = useState([]);
  const navigate=useNavigate()

  useEffect(() => {
    getAllProducts()
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container mx-auto p-8">
      {/* <h1 className="text-2xl font-bold mb-6 text-center">Product List</h1> */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border border-gray-200 rounded-lg shadow-lg p-4 hover:shadow-2xl transition duration-300"
          >
            <div
              className="w-full h-40 flex justify-center cursor-pointer"
              onClick={() => navigate(`/product/${product.id}`)}
            >
              <img src={product.image} alt={product.name} />
            </div>
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-900 font-bold">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;

