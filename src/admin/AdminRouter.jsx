import React from 'react'
import { Routes, Route, Router, BrowserRouter } from "react-router-dom";
import Dashboard from './pages/Dashboard';

import Reports from './pages/Reports';
import ManageUser from './pages/ManageUser';
import Manageorder from './pages/Manageorder';
import ManageProduct from './pages/ManageProduct';

function AdminRouter() {
  return (
    <div>
    
    <Routes>
           <Route path="/" element={<Dashboard />} />
           <Route path="/manageproduct" element={<ManageProduct/>} />
           <Route path="/manageorder" element={<Manageorder/>} />
           <Route path="/reports" element={<Reports/>} />
           <Route path="/manageuser" element={<ManageUser />} />
        </Routes>
        </div>
  )
}

export default AdminRouter
