import React from 'react'
import { Link } from 'react-router-dom'
import Product from './Product'
import Cart from './Cart'

const NavBar = () => {
    return (
        <div className='bg-slate-900 top-0   text-white p-4 fixed w-full'>
            {/* flex__container */}
            <div className='flex items-center justify-between mx-auto max-w-2xl'>
                {/* left__side */}
                <div>
                    <p className='font-bold text-2xl'>Redux </p>
                </div>
                {/* right__Side */}
                <div className=''>

                    <ul className='flex items-center justify-center space-x-4'>
                        <li>
                            <Link to='/Product' className='font-semibold'>Home</Link>
                        </li>
                        <li>
                            <Link to='/Form' className='font-semibold'>Add User</Link>
                        </li>
                        <li>
                            <Link to='/useEffect' className='font-semibold'>UseEffect</Link>
                        </li>
                        <li>
                            <Link to='/useReducer' className='font-semibold'>UseReducer</Link>
                        </li>
                        <li>
                            <Link to='/Cart' className='font-semibold'>
                                <span className='relative'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                    </svg>
                                    <div className='absolute -top-2 left-4 h-5 w-5 text-black text-xs font-bold flex justify-center items-center bg-white rounded-full'>2</div>
                                </span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavBar