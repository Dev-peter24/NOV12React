import React, { useState } from 'react'
import { FaSalesforce } from 'react-icons/fa'

function HomePg() {
    const [Admin, setAdmin] = useState(false)
  return (
    <div className='h-screen'>
             {Admin ? "Welcome Admin" : "Welcome User"}
    </div>
  )
}

export default HomePg