import React from 'react'
import Dashboard from '../pages/Dashboard'
import ManageOrders from '../pages/ManageOrders';
import ManageUsers from '../pages/ManageUser';
import ManageProducts from '../pages/ManageProduct';
import Reports from '../pages/Reports';


const AdminRouter = [
    {path:'/admin', element:<Dashboard/>},
    {path:'/admin/manageproducts', element:<ManageProducts/>},
    {path:'/admin/manageorders', element:<ManageOrders/>},
    {path:'/admin/manageusers', element:<ManageUsers/>},
    {path:'/admin/reports', element:<Reports/>}
  ]

export default AdminRouter;