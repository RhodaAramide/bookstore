import React from 'react'
import { useNavigate } from 'react-router-dom';



const CategorySection = () => {
    const navigate = useNavigate(); // Initialize useNavigate

    const handleView = () => {
        navigate('/categories'); // Navigate to PackagePage
    };
  return (
    <div className='container mx-auto p-8 max-h-lg'>
        {/* <h1 className='text-text text-3xl pb-8 font-bold'>
        Explore our Top Categories
        </h1>      */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-full max-h-full gap-4 mt-8 rounded'>
        <div className="relative bg-cover bg-center h-72 object-cover text-white flex justify-center pt-16 rounded" 
            style={{ backgroundImage: `url("https://res.cloudinary.com/dzckxcrwj/image/upload/f_auto,q_auto/tkxklzrcs130qncogkky")` }}>            
            <p className='absolute text-2xl font-bold bottom-8'>Classic Books</p>
        </div> 
        <div className='bg-white mx-4 shadow-lg rounded-lg overflow-hidden'>
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
        <div className="relative bg-cover bg-center h-72 object-cover text-white flex justify-center pt-16 rounded "            
            style={{ backgroundImage: `url("https://res.cloudinary.com/dzckxcrwj/image/upload/f_auto,q_auto/f5fzpxtoqtnbjsoodgfs")`  }} >            
            <p className='absolute text-2xl font-bold bottom-8'> Engineering Books</p>
        </div> 
        <div className="relative bg-cover bg-center h-72 object-cover text-white flex justify-center pt-16 rounded" 
            style={{ backgroundImage: `url("https://res.cloudinary.com/dzckxcrwj/image/upload/f_auto,q_auto/eyvbv8lw7nzdiptjk8pw")` }}>            
            <p className='absolute text-2xl font-bold bottom-8'>Contemporary Books</p>
        </div> 
        <div className="relative bg-cover bg-center h-72 object-cover text-white flex justify-center pt-16 rounded" 
            style={{ backgroundImage: `url("https://res.cloudinary.com/dzckxcrwj/image/upload/f_auto,q_auto/oy4koyaxzamzvuzbew93")` }}>            
            <p className='absolute text-2xl font-bold bottom-8'> Management Books</p>
        </div> 
        <div className="relative bg-cover bg-center h-72 text-white flex justify-center mb-8 pt-16 rounded" 
            style={{ backgroundImage: `url("https://res.cloudinary.com/dzckxcrwj/image/upload/f_auto,q_auto/z2elz91uolq41si2ad3s")` }}>            
            <p className='absolute text-2xl font-bold bottom-8'>Science Books</p>
        </div> 
        </div>
    </div>
  )
}

export default CategorySection