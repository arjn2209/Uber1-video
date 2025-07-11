import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';
// import {UserDataContext} from '../context/UserContext';
// import { useNavigate } from 'react-router-dom';


const UserSignup = () => {

  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [firstname,setFirstname]=useState('')
  const [lastname,setLastname]=useState('')
  const [userData,setUserData]=useState({})

//   const navigate=useNavigate()

//   const {user,setUser}=React.useContext(UserDataContext)

  const submitHandler= async(e)=>{
    e.preventDefault()
    const newUser={
      fullname:{
        firstname:firstname,
        lastname:lastname
      },
      password:password,
      email:email

    }

    // const response=await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`,newUser)

    // if(response.status===201){
    //   const data=response.data
    //   setUser(data.user);
    //   localStorage.setItem('token',data.token);
    //   navigate('/home')
    // }


    setEmail('')
    setPassword('')
    setFirstname('')
    setLastname('')
  }

  return (
     <div className='p-7  h-screen flex flex-col justify-between'>
        <div>
            <img className='text-lg w-16 mb-9' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" />

        <form onSubmit={(e)=>{submitHandler(e)}}>

            <h3 className='text-lg font-medium mb-2'>What's your name</h3>
            <div className='flex gap-4 mb-0'>
              <input  required 
            type='text'
            className='bg-[#eeeeee] rounded px-2 py-2 mb-5 border w-1/2 text-base placeholder:text-base' placeholder='Firstname' 
            value={firstname}
            onChange={(e)=>{
              setFirstname(e.target.value)
            }}
              />
              <input  required 
            type='text'
            className='bg-[#eeeeee] rounded px-2 py-2 mb-5 border w-1/2 text-base placeholder:text-base' placeholder='Lastname'
            value={lastname}
            onChange={(e)=>{
              setLastname(e.target.value)}}
            />
            </div>

            <h3 className='text-lg font-medium mb-2'>What's your email</h3>
            <input  required 
            value={email}
            onChange={(e)=>{
              setEmail(e.target.value)}}
            type='email'
            className='bg-[#eeeeee] rounded px-2 py-2 mb-5 border w-full text-base placeholder:text-base' placeholder='email@example.com'/>

            <h3 className='text-lg font-medium mb-2'>Enter Password</h3>

            <input required 
            type="password"
            value={password}
            onChange={(e)=>{
              setPassword(e.target.value)}}
            className='bg-[#eeeeee] rounded px-2 py-2 mb-5 border w-full text-base placeholder:text-base' placeholder='password' />

            <button className='bg-[#111] text-white font-semibold rounded px-2 py-2 mb-2 w-full text-base placeholder:text-base'>Create account</button>
            <p className='text-center'>Already have account?<Link to='/login' className='text-blue-600'>Login here</Link></p>
        </form>
        </div>
        <div>
          <p className='text-[10px] leading-tight'>This site is protected by reCAPTCHA and the <span className='underline '>Google Privacy Policy</span> and <span className='underline'>Terms of Service apply</span></p>
        </div>
    </div>
  );
};

export default UserSignup;