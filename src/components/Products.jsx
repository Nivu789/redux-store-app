import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import { getProducts } from '../store/productSlice'
import { useDispatch, useSelector } from 'react-redux'


function Products() {
    
    const dispatch = useDispatch()
    const {data:products} = useSelector(state=>state.products)
    console.log(products)

    useEffect(()=>{
        dispatch(getProducts())
    },[])
  return (
    
      <div className='my-20 mx-auto container grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3'>
        {products && products.length>0
        ?
            products.map((item)=>{
                return <ProductCard  item={item} text="Add To Cart"/>
            })
        
        :
        <div>No product to display</div>
        }
      </div>
    
  )
}

export default Products
