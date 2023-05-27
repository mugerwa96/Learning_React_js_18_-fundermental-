import React, { useState } from 'react'
const Form = () => {
  const userData = {
    username: "",
    emailAddress: "",
    location: ""
  }
  const [user, setUser] = useState(userData);
  const handleChange = (e) => {
      setUser({
        ...user,
        [e.target.name]:e.target.value
      })
   }
   const handleClick=()=>{
    alert(`
      <p>Name:${user.username}</p>
      <p>Email Address:${user.emailAddress}</p>
      <p>LOcation:${user.location}</p>
    `)
   }
return (
  <>
    <div className='mb-2'>
      <label className='text-slate-700 text-md font-semibold'>Username</label><br></br>
      <input type="text" onChange={handleChange} name="username" className='border-2 border-slate-700 p-2 focus:ring-0 focus:outline-none focus:border-slate-800 rounded' />
    </div>
    <div className='mb-2'>
      <label className='text-slate-700 text-md font-semibold'>Email Address</label><br></br>
      <input type="text"onChange={handleChange}  name='emailAddress' className='border-2 border-slate-700 p-2 focus:ring-0 focus:outline-none focus:border-slate-800 rounded' />
    </div>
    <div className='mb-2'>
      <label className='text-slate-700 text-md font-semibold'>Location</label><br></br>
      <input type="text"onChange={handleChange}  name='location' className='border-2 border-slate-700 p-2 focus:ring-0 focus:outline-none focus:border-slate-800 rounded' />
    </div>
    <button className='p-2 bg-green-400 rounded text-white px-4 hover:bg-green-800 transition-all duration-700' onClick={handleClick}>Save</button>


    <div className='text-center'>

     
    </div>
  </>
)
}

export default Form
