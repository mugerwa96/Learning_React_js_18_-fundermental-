import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {remove} from '../store/cartSlice'
const Cart = () => {
  const products =useSelector(state=>state.cart);
 const dispatch=useDispatch()
 const removeFromCart=(id)=>{
      dispatch(remove(id))
 }
  return (
    <div>
        <p className='font-bold text-xl'>Cart</p>
        <div className='grid mx-auto md:grid-cols-2 gap-2 w-full'>
                {


                    products.length > 0 ?
                 
                       products.map((product) => (

                        <div className='rounded overflow-hidden mb-3  bg-slate-300 w-[16rem]' key={product.key}>
                            <img src={product.thumbnail} className='h-24' />
                            <div className='p-2 space-y-2'>
                                <p><small className='font-bold'>Name:</small> <br />    {product.title}</p>
                                <p><small className='font-bold'>Product Description</small><br />:{product.description}</p>
                                <p><small className='font-bold'>Price</small>:${product.price}</p>
                                <button className='p-2 bg-red-700 font-bold rounded text-xs text-white' onClick={()=>removeFromCart(product.id)}>Remove from Cart</button>
                            </div>
                        </div>

                    ))
                    : <div>
                    <p className='font-bold rounded  bg-red-500 w-full text-white text-sm  text-center p-1    ' >Loading please wait .......</p>
                </div>


                }
            </div>
  </div>
  )
}

export default Cart
