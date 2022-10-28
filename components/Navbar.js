import Link from 'next/link'
import React from 'react'
import Menu from './Menu'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center w-full py-1 sm:py-2 border-b-[1px] border-b-gray-200'>
        <div>
            <Link href='/'>
             <h1 className='font-semibold text-[26px] md:text-[34px] text-cyan-500 cursor-pointer'>DreamHome</h1>
            </Link>    
        </div>
        <div>
            <Menu/>
        </div>
    </div>
  )
}

export default Navbar