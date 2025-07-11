import React, { useState } from 'react';
// import { useContext } from 'react';
import {Link} from 'react-router-dom';
// import { UserDataContext } from '../context/UserContext';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

const Userlogin = () => {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [userData,setUserData]=useState({});

//   const {user,setUser}=useContext(UserDataContext);
//   const navigate=useNavigate();

  const submitHandler= async (e)=>{
    e.preventDefault();
    const userData={
        email:email,
        password:password
    }

    // const response=await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`,userData);
    // if(response.status===200){
    //   const data=response.data;
    //   setUser(data.user);
    //   localStorage.setItem('token',data.token);
    //   navigate('/home');
    // }
    
    setEmail('');
    setPassword('');
  }
    
  return (
    <div className='p-7  h-screen flex flex-col justify-between'>
        <div>
            <img className='text-lg w-16 mb-9' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"  />

        <form onSubmit={(e)=>{submitHandler(e)}}>
            <h3 className='text-xl font-medium mb-2'>What's your email</h3>
            <input  required 
            value={email}
            type="email" 
            onChange={(e)=>{setEmail(e.target.value)
            }}
            className='bg-[#eeeeee] rounded px-2 py-2 mb-7 border w-full text-lg placeholder:text-base' placeholder='email@example.com'/>

            <h3 className='text-xl font-medium mb-2'>Enter Password</h3>

            <input required 
            type="password" 
            value={password}
            onChange={(e)=>{setPassword(e.target.value)
            }}
            className='bg-[#eeeeee] rounded px-2 py-2 mb-7 border w-full text-lg placeholder:text-base' placeholder='password' />

            <button className='bg-[#111] text-white font-semibold rounded px-2 py-2 mb-3 w-full text-lg placeholder:text-base'>Login</button>
            <p className='text-center'>New here?<Link to='/signup' className='text-blue-600'>Create new Account</Link></p>
        </form>
        </div>
        <div>
            <Link to='/captain-login' className='bg-amber-400 flex items-center justify-center text-white font-semibold rounded px-2 py-2 mb-7 w-full text-lg placeholder:text-base'>Sign in as Captain</Link>
        </div>
    </div>
  );
};

export default Userlogin;