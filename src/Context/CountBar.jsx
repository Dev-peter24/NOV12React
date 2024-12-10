import React, { useContext } from 'react'
import Context from './Context'
import { BiCart } from 'react-icons/bi'

function CountBar() {
    const {count} =useContext(Context)
  return (
    <div>
        <h1 className='font-bold absolute ml-[70rem] top-2 flex'>
          <BiCart className='text-4xl text-white flex items-center justify-center'>
            </BiCart>{count}</h1>
    </div>
  )
}

export default CountBar