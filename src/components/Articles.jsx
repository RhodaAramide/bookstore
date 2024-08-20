import React from 'react'
import { ArrowRightIcon } from '@heroicons/react/solid';
import Rectangle7 from '../assets/images/Rectangle7.svg'
import Rectangle5 from '../assets/images/Rectangle5.svg'
import Rectangle6 from '../assets/images/Rectangle6.svg' 

const Articles = () => {
  return (
    <div className='bg-[#CCCCCC] text-text'>
        <div className='container mx-auto'>
            <div className="mx-8 p-8">
            <p className='text-gray-500 text-center font-bold py-8 '>READ ALL ARTICLES</p>
            <hr className="h-0.5 w-42 ml-8 bg-gray-500 border-0 dark:bg-gray-700"></hr>
            <h1 className='text-4xl font-bold text-center py-8 mb-2'>Latest Articles</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                <div>
                    <img src={Rectangle7} 
                    alt="article" className='max-w-sm object-cover rounded-lg'/>
                    <p className='text-gray-500 font-semibold'>8 August, 2024</p>
                    <p className='text-xl font-bold mt-2'>Reading Books Always Makes The Moments Happy</p>
                </div>
                <div>
                    <img src={Rectangle5} 
                    alt="article" className='max-w-sm object-cover rounded-lg'/>
                    <p className='text-gray-500 font-semibold'>8 August, 2024</p>
                    <p className='text-xl font-bold mt-2'>Reading Books Always Makes The Moments Happy</p>
                </div>
                <div>
                    <img src={Rectangle6} 
                    alt="article" className='max-w-sm object-cover rounded-lg'/>
                    <p className='text-gray-500 font-semibold'>8 August, 2024</p>
                    <p className='text-xl font-bold mt-2'>Reading Books Always Makes The Moments Happy</p>
                </div>
            </div>
            <div className='flex justify-center mb-8'>
                <button className='text-gray-500 font-bold px-4 py-2 mt-8 rounded-md'>
                    <div className='flex justify-between gap-2'>
                    <p>View All Articles</p>
                    <ArrowRightIcon className='w-6 h-6'/>
                    </div>
                </button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Articles