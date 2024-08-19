import React from 'react';
// import mail from '../assets/images/mail.svg';

const Newsletter = () => {
  return (    
    <div className='w-full h-auto flex px-8 justify-center bg-accent'>
        
        <div className='flex flex-col px-8'>
        <div className='bg-text border-black p-8 text-white text-center'>
            <h2 className='text-3xl font-bold'>Subscribe to our Newsletter</h2>
            <p className='px-8 py-6'>
                Sed eu feugiat amet, libero ipsum enim pharetra hac dolor sit amet, consectetur.
            </p> 
            <p className='px-8 mb-8'>Elit adipiscing enim pharetra hac </p>
            
        </div>
        <div className='flex justify-center mx-8 px-8 mb-8 pb-8'>
        <div className='mb-8 bg-white text-center mx-8' >
            {/* <img src={mail} alt='mail' className=''/> */}
            <input className='text-gray-500 border-gray-400 mx-8 px-4 h-10' placeholder='youremail123@gmail.com ' />
            <button className='bg-text px-8 py-4 m-3 text-white font-bold'>
                SUBSCRIBE
            </button>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Newsletter