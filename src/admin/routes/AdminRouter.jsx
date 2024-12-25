import React from 'react'
import Dashboard from '../pages/Dashboard'
import ManageOrders from '../pages/ManageOrders';
import ManageUsers from '../pages/ManageUsers';
import ManageProducts from '../pages/ManageProduct';
import { AddProducts } from '../pages/AddProducts';
import { EditProduct } from '../pages/EditProduct';


const AdminRouter = [
    {path:'/admin', element:<Dashboard/>},
    {path:'/admin/manageproducts', element:<ManageProducts/>},
    {path:'/admin/addproduct', element:<AddProducts/>},
    {path:'/admin/manageorders', element:<ManageOrders/>},
    {path:'/admin/manageusers', element:<ManageUsers/>},
    {path:'/admin/editproduct/:id', element:<EditProduct/>}
  ]

export default AdminRouter;