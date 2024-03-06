import React, { useState } from 'react'
import { UseSelector, useSelector } from 'react-redux'
import ProductCard from './ProductCard'

function Cart() {

  const cartItems = useSelector(state=>state.cart)
  return (
    <div>
        <h1 className='text-center text-5xl font-bold my-3'>CART</h1>
        <div className='my-20 mx-auto container grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3'>
        {cartItems && cartItems.length
        ? cartItems.map((item)=>{
          return <ProductCard item={item} text="Remove From Cart"/>
        })
      :
      <div>Cart is Empty</div>
      }
    </div>
    </div>
    
  )
}

export default Cart
