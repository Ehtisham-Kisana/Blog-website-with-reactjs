import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='font-bold text-center fixed top-0 bg-gradient-to-r from-indigo-600 via-blue-300 to-pink-700   w-full text-lg text-violet-900'>
        <ul>
            <li className='inine-block py-4'>
                <Link to='/' className='pl-6 pr-8' >
                Home
                </Link>
                <Link to='/about' className='pl-6 pr-8' >
                About
                </Link>
                <Link to='/list' className='pl-6 pr-8' >
                Articles
                </Link>
            </li>
        </ul>

    </nav>
  )
}

export default Navbar