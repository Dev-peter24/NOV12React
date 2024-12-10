import React from 'react'
import App from '../App'
import { IoMdSettings, IoIosInformationCircle, IoIosRefresh } from "react-icons/io";


function ANIME() {
    
  return (
    <div>
    <nav className='bg-red-600 text-white h-16 flex items-center justify-between'>
     <div className='ml-20 flex items-center gap-1 cursor-pointer'>
        <IoMdSettings className='text-4xl' />
        <span className='font-extrabold text-4xl'>ANIME</span>
     </div>
     <IoMdSettings className='text-2xl mr-15 md:hidden' />
        <ul  className=' gap-10 mr-20 font-bold text-lg hidden md:flex '>
            <li className='hover:border-b cursor-pointer hover:text-4xl'><a href="">Home</a></li>
            <li className='hover:border-b cursor-pointer' ><a href="">Anime</a></li>
            <li className='hover:border-b cursor-pointer'><a href="">Action</a></li>
            <li className='hover:border-b cursor-pointer'><a href="">Kids</a></li>
            <li className='hover:border-b cursor-pointer'><a href="">Family</a></li>
        </ul>
    </nav>
</div>
  )
}

export default ANIME