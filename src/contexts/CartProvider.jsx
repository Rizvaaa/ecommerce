// import React from "react"; 
// import { useCart } from "./CartContext";

// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState([]);

//   // Add product to cart
//   const addToCart = (product) => {
//     const existingProduct = cart.find((item) => item.id === product.id);
//     if (existingProduct) {
//       setCart((prevCart) =>
//         prevCart.map((item) =>
//           item.id === product.id
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//         )
//       );
//     } else {
//       setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
//     }
//   };

//   // Remove product from cart
//   const removeFromCart = (productId) => {
//     setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
//   };

//   // Clear cart
//   const clearCart = () => {
//     setCart([]);
//   };

//   return (
//     <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };
