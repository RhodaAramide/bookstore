import React from 'react'
import { useNavigate } from 'react-router-dom';
import Gig2 from '../assets/images/Gig2.svg';
import Gig1 from '../assets/images/Gig1.svg';
import Gig3 from '../assets/images/Gig3.svg';
import Rectangle4 from '../assets/images/Rectangle4.svg';
import index1 from '../assets/images/index1.svg';


const CategorySection = () => {
    const navigate = useNavigate(); // Initialize useNavigate

    const handleView = () => {
        navigate('/categories'); // Navigate to PackagePage
    };
  return (
    <div className='container mx-auto h-full'>
        {/* <h1 className='text-text text-3xl pb-8 font-bold'>
        Explore our Top Categories
        </h1>      */}
        <div className='grid grid-cols-3 gap-4 mt-8 rounded'>
        <div className="bg-cover bg-center w-full object-cover text-white text-center pt-16 rounded" 
            style={{ backgroundImage: `url(${Gig1})` }}>            
            <p className='text-2xl font-bold bottom-0'>Classic Books</p>
        </div> 
        <div className='bg-white mx-4 h-64 shadow-lg rounded-lg overflow-hidden'>
            <h1 className='text-text text-3xl text-center p-8 mt-8 font-bold'>
            Explore our Top Categories
            </h1> 
            <div className='flex justify-center'>
          <button
              className="bg-primary text-white border-2 my-2 px-4 py-4 rounded-md"
              onClick={handleView}
            >
              VIEW ALL
            </button>
            </div>
            </div>
        <div className="bg-cover bg-center w-full object-cover text-white text-center pt-16 rounded "            
            style={{ backgroundImage: `url(${index1})`  }} >            
            <p className='text-2xl font-bold bottom-0'> Engineering Books</p>
        </div> 
        <div className="bg-cover bg-center w-full object-cover text-white text-center pt-16 rounded" 
            style={{ backgroundImage: `url(${Gig2})` }}>            
            <p className='text-2xl font-bold bottom-0'>Contemporary Books</p>
        </div> 
        <div className="bg-cover bg-center w-full h-64 object-cover text-white text-center pt-16 rounded" 
            style={{ backgroundImage: `url(${Rectangle4})` }}>            
            <p className='text-2xl font-bold bottom'> Management Books</p>
        </div> 
        <div className="bg-cover bg-center w-full text-white text-center pt-16 rounded" 
            style={{ backgroundImage: `url(${Gig3})` }}>            
            <p className='text-2xl font-bold bottom'>Science Books</p>
        </div> 
        </div>
    </div>
  )
}

export default CategorySection