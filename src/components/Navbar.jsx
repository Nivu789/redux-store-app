import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'



function Navbar() {

  const cartItems = useSelector(state=>state.cart)
  return (
    <div className='w-full h-16 bg-slate-500 shadow-xl p-5'>
      <ul className='flex justify-between'>
        <Link to={`/`}><li>Home</li></Link>
        <li>About</li>
        <li>Contact</li>
        <Link to={`/cart`}><li>Cart {cartItems.length}</li></Link>
      </ul>
    </div>
  )
}

export default Navbar
