import React from 'react'
import { Link } from 'react-router'

function Navbar() {
  return (
  // <div className='w-screen h-screen bg-gray-50'>
  <div className=" w-screen h-[80px] bg shadow-lg flex items-center px-4">
    <div className="flex justify-between space-x-4 w-full">
      <div className='flex'>
        <img src='assets/ecomm.jpg' alt='logo' className='w-25 h-10 margin-40px'/>
        <b className='text-orange-700'>Shop</b><b className='text-blue-600'>Cart</b>
      </div>
      <div className='flex space-x-4'>
        
        <li className='list-none'><Link to="/"><b>Home</b></Link></li>
        <li className='list-none'><Link to="/cart"><b>Cart</b></Link></li>
        <li className='list-none'><Link to="/order"><b>Order</b></Link></li>
      </div>
      <div>
        <input type="text" placeholder='search'className='border-b-2 border-gray-300' />
      </div>
      <div>
        {/* <li className='list-none'><Link to="/admin"><b>Admin</b></Link></li> */}
        <li className='list-none'><Link to="/login"><b>Login</b></Link></li>
        {/* <li className='list-none'><Link to="/signup">signup</Link></li> */}
      </div>
    </div>
  </div>

  )
}

export default Navbar
