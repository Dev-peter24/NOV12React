import React, { useState } from 'react'
import { BiSun } from 'react-icons/bi';
import { BsMoon, BsMoonStars } from 'react-icons/bs'
import { CgMoon } from 'react-icons/cg'

function NewPage() {
    const [Darkmode, setDarkmode] = useState(false);

    const Toggle = () => (
        setDarkmode(!Darkmode)
        // document.body.classList.toggle('dark')
    );

    return (
        <div className={`min-h-screen ${Darkmode ? 'text-white bg-gray-700' : 'text-black bg-white'}`}>
        <div className=''>
                <h1 className='text-4xl dark:text-pink-700'>Welcome to this NewPage</h1>
                <p className='text-green-400 dark:text-red-900'>HELLO</p>
        </div>
        <br />
        <div>
            <button>
                    {Darkmode ? <BiSun className='text-4xl dark:text-yellow-400' onClick={Toggle}/> : <BsMoon className='text-4xl text-blue-700' onClick={Toggle} />}
            </button>
        </div>
       </div >
    )
}

export default NewPage