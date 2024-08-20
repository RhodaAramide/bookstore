import React from 'react'
import { useNavigate } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/outline';

const FeaturedBook = () => {
    const navigate = useNavigate(); // Initialize useNavigate

  const handleView = () => {
    navigate('/books'); // Navigate to books
  };
  return (
    <div className="bg-gradient-to-r from-[#FBEEEE] to-[#F7FFFE] mb-8">
    <div>
        
    </div>
    <div className='mb-6 p-8 flex justify-center'>
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 max-w-">
    <img src='https://res.cloudinary.com/dzckxcrwj/image/upload/f_auto,q_auto/kydspx3t3ohxnzcqpd5i'
     alt="book" className="object-cover w-full max-w-md" />
    <div className='font-bold pt-8 mt-8 max-w-lg'>
        <h1 className='text-3xl font-bold mt-8 mb-8'>Featured Book</h1>
        <hr className="h-px w-24 bg-primary border-0 dark:bg-gray-700"></hr>
        <p className="text-gray-400"> BY TIMBUR HOOD </p>
      <p className="text-2xl  py-4">Birds Gonna Be Happy</p>
        <p className='py-2 text-gray-400 font-medium'>This is a book that aims to tell a lot of
             mystery stories surrounding birds and their habitats. 
             It is a book that is filled with suspense and thrill.   
        </p>
        <div className='text-primary font-medium mb-8 pb-8'>
        <p>Genre: Mystery</p>
        <p>Price: $45</p>
        </div>
        
        <button
              className=" border-text border-2 mt-8 mr-2 px-4 py-4 rounded-md"
              onClick={handleView}
            >
              <div className='flex justify-between space-x-2'>
                <p>VIEW MORE </p> 
                <ArrowRightIcon className="w-6 h-6" />
              </div>
            </button>
      
      
    </div>
  </div>
  </div>
  </div>
  )
}

export default FeaturedBook