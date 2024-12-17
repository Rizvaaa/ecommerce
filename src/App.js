import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserRouter from "./user/UserRouter";
import AdminRouter from "./admin/AdminRouter";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
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
    </Router>
  );
}

export default App;
