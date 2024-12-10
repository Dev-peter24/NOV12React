import React, { useState } from 'react'

function Food() {
    const [Name, setName] = useState("Cat")

    const Click = () => { 
        setName('Dog')
    }
    return (
        <div>
            <h1 className='border-2 border-blue-500 mb-2 text-5xl font-bold text-center h-20'>{Name}</h1>
            <button onClick={Click} className='ml-10 hover:bg-green-600 rounded-xl w-20 bg-green-500 text-white'>Click</button>
            <button onClick={()=>setName('Cat')} className='ml-10 hover:bg-green-600 rounded-xl w-20 bg-green-500 text-white'>Click2</button>
        </div>
    )
}

export default Food