import React from 'react'
import { Link } from 'react-router-dom'

export function Navigation () {
  return (
    <nav className='h-[50px] flex justify-between items-center px-5 text-white bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%'>
        <span className='font-bold'>React Shop</span>

        <span>
            <Link to="/" className='mr-4'>Products</Link>
            <Link to="/about">About us</Link>
        </span>
    </nav>
  )
}
