import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => {
  return (
    <div className='bg-cover bg-center bg-[url(https://plus.unsplash.com/premium_photo-1731842686156-74895c29a87b?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] h-screen pt-8  flex justify-between flex-col w-full '>
    <img className='w-16 ml-8' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" />
      <div className='bg-white pb-7 py-4 px-4'>
        <h2 className='text-3xl font-bold'>Get Started with Uber</h2>
        <Link to='/login' className='flex items-center justify-center w-full bg-black text-white py-3 rounded mt-4'>Continue</Link>
      </div>
    </div>
  );
};

export default Home;
