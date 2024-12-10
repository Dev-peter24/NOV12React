import React, { useState } from 'react'
import { IoMdSettings, IoIosInformationCircle, IoIosRefresh } from "react-icons/io";

function Counter() {
    const [Count, setCount] = useState(0)

    const reload = () => {
        window.location.reload()
    }
    // function Setting() => {


    // }
    return (
        <div className='h-screen flex justify-center items-center'>
            <div className=' w-screen items-center justify-around flex relative'>
                
                {Count ?
                    <div className='border-2 font-extrabold border-grey-400 hover:text-gray-200 text-gray-400 w-20 h-20 flex items-center justify-center rounded-full text-7xl hover:border-gray-200 absolute left-10'>
                        <button onClick={() => setCount(Count - 2)} className='mb-4'>-</button>
                    </div>
                    : null}

                <span className='text-[12rem] text-gray-400 w-56'>{Count}</span>
                <div className='border-2 font-extrabold border-gray-400 hover:text-gray-200 text-gray-400 w-20 h-20 flex items-center justify-center rounded-full text-7xl hover:border-gray-200 absolute right-10'>
                    <button onClick={() => setCount(Count + 2)} className='mb-4'>+</button>
                </div>
            </div>
            <div className='flex gap-7 absolute top-8 h-[80px] w-[18rem] text-3xl items-center justify-center'>
                <IoMdSettings className='' />
                <IoIosInformationCircle />
                <IoIosRefresh onClick={reload} />
            </div>
        </div>
    )
}

export default Counter