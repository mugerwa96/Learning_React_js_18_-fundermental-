import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Effect = () => {
    const userData =[]
    const [users,setUsers]=useState(userData);
    const [refresh,setRefresh]=useState(false);

    // getting users from an external api 
    
   const getUser=()=>
    {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response)=>{
         setUsers(response.data)
        })
    }
    
   useEffect(()=>{
        getUser();
   },[refresh])

// Write, Edit and Run your Javascript code using JS Online Compiler

 return(
    <>
    {
        users.map((user)=>{
            const {id,name,address}=user;
            console.log(user)
            return(
                <div key={id}>
                <p>Name :{name}</p>
                <p>Address :{address.street}</p>
            </div>
            )
        }
        
            
        )
    }
     <button className='p-2 bg-green-400 rounded text-white px-4 hover:bg-green-800 transition-all duration-700' onClick={()=>setRefresh(!refresh)}>Refresh</button>
    </>
 )
}

export default Effect
