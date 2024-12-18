import React from 'react'
import { Routes, Route } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import ManageProduct from './pages/ManageProduct';
import Reports from './pages/Reports';
import ManageUser from './pages/ManageUser';
function AdminRouter() {
  return (
    <Routes>
       <Route path="/" element={<Dashboard />} />
       <Route path="/manageproduct" element={<ManageProduct />} />
       <Route path="/reports" element={<Reports/>} />
       <Route path="/manageuser" element={<ManageUser />} />
    </Routes>
  )
}

export default AdminRouter
