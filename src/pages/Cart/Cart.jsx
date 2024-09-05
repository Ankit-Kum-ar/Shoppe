import React from 'react'
import CartCard from './components/CartCard'
import { products } from '../../utils/constant'

const Cart = () => {
  return (
    <div className='mt-14'>
      <h1 className='font-bold text-2xl text-center text-white'>Cart Items: 2</h1>
      <div className='flex flex-col mt-10 gap-3'>
        {
          products.map((product, index) => (
            <CartCard key={index} product={product} />
          ))
        }
      </div>
    </div>
  )
}

export default Cart
