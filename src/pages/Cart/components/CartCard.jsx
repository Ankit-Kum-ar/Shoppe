import React from 'react'

const CartCard = ({product}) => {
  const {title, price, img} = product
  return (
    <div className='flex justify-between shadow shadow-slate-700 px-3 md:py-0 py-3 mx-3 border md:gap-0 gap-9 items-center border-gray-600'>
      <img src={img} alt="" className='py-2 h-36 hidden md:block' />
      <h1 className='text-white md:text-base text-sm md:font-semibold'>{title}</h1>
      <h1 className='text-white md:text-base text-sm md:font-semibold'>${price}</h1>
      <button type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm md:px-5 px-2 md:py-2 py-1 me-2 ">Remove</button>
    </div>
  )
}

export default CartCard
