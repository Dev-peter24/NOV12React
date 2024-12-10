import React, { useState } from 'react'

function Form() {
  const [Input, setInput] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  const [Error, setError] = useState("");

  const handleChange = (e) => {
    setInput({ ...Input, [e.target.name]: e.target.value });
  };

  const Click = (e) => {
    e.preventDefault();
    if (!Input.firstname) {
      setError("Firstname cannot be empty");
    }
    else if (!Input.lastname) {
      setError("Lastname cannot be empty");
    }
    else if (!Input.email) {
      setError("Email cannot be empty");
    }
    else if (!Input.password) {
      setError("Password cannot be empty");
    } else if (Input.password.length < 8) {
      setError("Password must be atleast 8 Characters")
    }
    else if (!Input.email.includes("@")) {
      setError("Email must include @");
    }
    else {
      setError("Form has been submitted");
    }
  }
  return (
    <div className='flex justify-center items-center min-h-screen w-screen flex-col border-2 h-[30rem]  relative'>
       <p className='absolute top-10 bg-blue-500 text-white w-[35rem] h-10 justify-center items-center flex'>CREATE AN ACCOUNT</p>
      <form action="">
    
        <input type="text" name='Firstname' placeholder='Firstname' className='border-2 border-blue-600' onChange={handleChange} />
        <br />

        <input type="text" name='Lastname' placeholder='Lastname' className='border-2 border-blue-600' onChange={handleChange} />
        <br />

        <input type="text" name='Email' placeholder='Email' className='border-2 border-blue-600' onChange={handleChange} />
        <br />

        <input type="text" name='password' placeholder='password' className='border-2 border-blue-600' onChange={handleChange} />
        <br />
        <button onClick={Click} className=' border border-blue-500 bg-blue-600 text-white py-3 px-5 mt-5 hover:bg-blue-900 '>Submit</button>
        <h1>{Error}</h1>
      </form>
    </div>

    // <div className='flex items-center justify-center min-h-screen w-screen'>

    //   <div className='flex-col flex border-2 w-[35rem] h-[30rem] items-center justify-center relative'>
    //     <p className='absolute -top-6 bg-blue-500 text-white w-[35rem] h-10 justify-center items-center flex'>CREATE AN ACCOUNT</p>

    //     <form action="">
    //       <input type="text" name='Firstname' placeholder='Firstname' className='border-2 border-blue-500 onChange={handleChange}' />
    //       <br />
    //       <input type="text" name='Lastname' placeholder='Lastname' className='border-2 border-blue-500 onChange={handleChange}' />
    //       <br />
    //     <input type="text" name='Email'      placeholder='Email' className='border-2 border-blue-500 onChange={handleChange} ' />
    //     <br />
    //       <input type="password" name='Password' placeholder='Password' className='border-2 border-blue-500 onChange={handleChange}' />
    //       <br />
    //       <button className='border border-blue-500 bg-blue-600 text-white py-3 px-5 mt-5 hover:bg-blue-900 onClick={Click}'>Submit</button>
    //       <h1>{Error}</h1>
    //       </form>
    //   </div>
    // </div>
  )
}

export default Form