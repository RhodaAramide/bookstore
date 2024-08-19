import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/outline';
import headerImg from '../assets/images/headerImg.svg';

const Header = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleView = () => {
    navigate('/books'); // Navigate to books
  };
  return (
    <section className="mx-auto bg-gradient-to-r from-[#FFE5E5] from-11% via-[#FFE5E5] via-69% to-[#FFFFFF] p-8">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-4 overflow-hidden pt-8 text-text">
          <h1 className='text-6xl mb-4 pt-8 font-bold'>Read. Learn. Grow.</h1>
          <div className='mb-8 pb-8 font-3xl'>
          At BookHaven, we believe that books are more than just words on a page
          —they're gateways to new worlds, ideas, and perspectives. 
          Founded by book lovers, our store is dedicated to fostering a community of readers who share a love for literature. 
          We carefully select each book in our collection to ensure quality, diversity, and accessibility. 
          Join us on a journey through the pages of the world's best stories
          </div>
          <button
              className=" border-text border-2 mr-2 px-4 py-4 rounded-md"
              onClick={handleView}
            >
              <div className='flex justify-between space-x-2'>
                <p>VIEW MORE </p> 
                <ArrowRightIcon className="w-6 h-6" />
              </div>
            </button>
        </div>
        <div className=''>
          <img src={headerImg} alt='header' className="max-w-lg object-cover" />
        </div>
      </div>
    </section>
  );
};

export default Header;