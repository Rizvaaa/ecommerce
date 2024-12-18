
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserRouter from "./user/UserRouter";
import AdminRouter from "./admin/AdminRouter";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import { CartContext } from "./context/CartContext";

function App() {
  return (
    <Router>
      {/* <CartContext> */}
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow container mx-auto p-4">
            <Routes>
              <Route path="/*" element={<UserRouter />} />
              <Route path="/admin/*" element={<AdminRouter />} />
            </Routes>
          </main>
          <Footer />
        </div>
      {/* </CartContext> */}
    </Router>
  );
}

export default App;
