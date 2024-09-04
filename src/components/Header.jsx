import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
    const activeClass = "block py-2 px-3 text-white text-lg bg-gray-800 rounded-xl font-semibold md:bg-transparent md:text-gray-600 md:p-0 ";
    const inActivClass = "block py-2 px-3 text-[#C5C5C5] text-lg rounded hover:bg-gray-100 font-semibold md:hover:bg-transparent md:hover:text-gray-600 md:p-0 ";
    return (
        <nav class="border-gray-200 bg-black m-3 rounded-3xl">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto md:p-4 p-3">
            <Link to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
                <img src="/logo.png" class="h-8" alt="Flowbite Logo" />
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">𝓢𝓗𝓞𝓟𝓟𝓔</span>
            </Link>
            <div className='md:flex hidden gap-6'>
                <NavLink to="/" className={({isActive}) => isActive ? activeClass : inActivClass}>Home</NavLink>
                <NavLink to="/cart" className={({isActive}) => isActive ? activeClass : inActivClass}>Cart</NavLink>
            </div>
            <div className='mr-1'>
                <NavLink to="/cart" className="text-[#C5C5C5] font-semibold text-lg">Cart - 2</NavLink>
            </div>
        </div>
        </nav>

    )
}

export default Header
