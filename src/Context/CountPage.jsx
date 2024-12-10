import React, { useContext, useState } from 'react'
import Context from './Context'
import { BiCart, BiMenu } from 'react-icons/bi';
import { IoMdSettings, IoIosInformationCircle, IoIosRefresh } from "react-icons/io";
// import { Link } from 'react-router-dom';


function CountPage() {
    const {count, setCount} = useContext(Context)

  return (
    
      <div className='bg-black h-screen overflow-hidden'>

    <nav className='bg-red-600 text-white h-16 flex items-center justify-between overflow-hidden'>
             <div className='ml-20 flex items-center gap-1 cursor-pointer overflow-hidden relative'>
                <BiCart  className='text-4xl' />
                <span className='font-extrabold text-4xl'>CART</span>
             </div>
            </nav>
         <h1> </h1>
        <button onClick={() => setCount (count + 1)} className='border-2 border-red-600 bg-red-600 text-white rounded-lg absolute bottom-[33rem] left-5 text-[2rem]'>Click me</button>
        <p style={{color: count > 10 ? 'red' : 'white', fontSize:'50px'}} className='p-5'>You've added {count} Products</p>
Ä      </div>
    
  )
}

export default CountPage