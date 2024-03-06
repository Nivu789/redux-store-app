import React from 'react'
import { useDispatch } from 'react-redux'
import { add, remove } from '../store/cartSlice'



function ProductCard(props) {

  const dispatch = useDispatch()

  function addToCart(product){
    dispatch(add(product))
  }

  function removeFromCart(productId){
    dispatch(remove(productId))
  }

  return (
    <div className='flex flex-col w-72 mx-auto lg:w-72 lg:h-96 shadow-xl rounded-xl p-16 space-y-3 pt-5 sm:w-72 sm:h-96 md:w-72'>
      <div className=''>
        <img className='w-44 h-44' src={props.item.image} alt="" />
      </div>
      <div className='w-full h-20'>
        <h1>{props.item.title}</h1>
      </div>
      <div className='w-full h-20'>
        <h1>{props.item.price}</h1>
      </div>
      <div className='w-full h-20'>
        {props.text==="Remove From Cart"?<button className='bg-slate-800 w-full h-10 text-white' onClick={()=>removeFromCart(props.item.id)}>Remove From Cart</button>
        :<button className='bg-slate-800 w-full h-10 text-white' onClick={()=>addToCart(props.item)}>Add to Cart</button>}
        
        
      </div>
    </div>
  )
  }

export default ProductCard
