import React, { useState } from 'react'
import { IoMdSettings, IoIosInformationCircle, IoIosRefresh } from "react-icons/io";

function Navbar() {
    const [Dropdown, setDropdown] = useState(false)
    
    const Toggle = () => (
        setDropdown (!Dropdown)
    );

  return (
    
        <div>
            <nav className='bg-red-600 text-white h-16 flex items-center justify-between'>
             <div className='ml-20 flex items-center gap-1 cursor-pointer'>
                <IoMdSettings className='text-4xl' />
                <span className='font-extrabold text-4xl'>LOGO</span>
             </div>
             ()
             <IoMdSettings className='text-2xl mr-15 md:hidden' />
                <ul  className=' gap-10 mr-20 font-bold text-lg hidden md:flex'>
                    <li className='hover:border-b cursor-pointer'>Home</li>
                    <li className='hover:border-b cursor-pointer' >About</li>
                    <li className='hover:border-b cursor-pointer'>Services</li>
                    <li className='hover:border-b cursor-pointer'>Contact</li>
                </ul>

            </nav>
            {Dropdown && 
            ( <ul  className=' gap-10 mr-20 font-bold text-lg hidden md:flex'>
                    <li className='hover:border-b cursor-pointer'>Home</li>
                    <li className='hover:border-b cursor-pointer' >About</li>
                    <li className='hover:border-b cursor-pointer'>Services</li>
                    <li className='hover:border-b cursor-pointer'>Contact</li>
                </ul>)}
        </div>
    
  )
}

export default Navbar