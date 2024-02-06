import React from 'react'

export default function Navbar() {
  return (
    <div className='flex p-4 bg-zinc-700 text-center text-gray-200 items-center justify-between'>
        <div className='text-lg'>Shopa</div>
        <ul className='flex gap-2 hover:text-white'>
          <li>Cart</li>
          <li>Sign In</li>
        </ul>
    </div>
  )
}
