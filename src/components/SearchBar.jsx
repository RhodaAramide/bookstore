import React from 'react';
import { HeartIcon, SearchIcon, ShoppingCartIcon, UserCircleIcon } from '@heroicons/react/outline';
import samplelogo from '../assets/images/samplelogo.svg';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const handleCartClick = () => {
    navigate('/cart'); // Navigate to CartPage
};
const handleWishClick = () => {
  navigate('/wishlist'); // Navigate to WishlistPage
};

  return (
    <div className="container mx-auto">
      <div className="bg-white">
        <div className="flex justify-between border-b border-background py-2">
          <div className='flex justify-between'>
            <img src={samplelogo} alt="logo" className="w-10 h-10" />
            <h1 className="text-3xl text-text font-bold pl-4">BookHaven</h1> 
          </div>
          <div className='flex justify-between'>
          <input className="appearance-none bg-transparent border-text w-full text-text mr-3 py-1 px-2 leading-tight focus:outline-none" 
          type="text" 
          placeholder="Search for books" 
          aria-label="Search"           
          />
          <SearchIcon className="w-6 h-6" />
          </div>
          <div className='flex justify-between space-x-8'>
          <div className='flex justify-between' >
            <UserCircleIcon className="w-6 h-6" />
            <p>ACCOUNT</p>
          </div>
          <div className='flex justify-between' onClick={handleCartClick}>
            <ShoppingCartIcon className="w-6 h-6" />
            <p>CART</p>
          </div>
          <div className='flex justify-between' onClick={handleWishClick}>
            
            <HeartIcon className="w-6 h-6" />
            <p>WISHLIST</p>
          </div> 
          </div>         
      </div> 
      </div>
      {/* <div className="relative">
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/3 bg-red-500 w-40 h-20"></div> 
        <div className="absolute bottom-0 left-1/2 transform -translate-x-2/3 bg-blue-500 w-20 h-10"></div> 
    </div> */}
    </div>
  );
};

export default SearchBar;