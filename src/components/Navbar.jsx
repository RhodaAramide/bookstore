import React from 'react';
import { HeartIcon, ShoppingCartIcon } from '@heroicons/react/outline';
import samplelogo from '../assets/images/samplelogo.svg';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { useAppContext } from "../AppContext";

const Navbar = () => {
  const { wishlistCount, cartCount } = useAppContext();
  const navigate = useNavigate(); // Initialize useNavigate
  const [title, setTitle] = useState("");
  const [isOpen, setIsOpen] = useState(false); 

  const toggleMenu = () => { //This handles the toggle menu for the hamburger icon
    setIsOpen(!isOpen);
  }
 

  const handleSearch = () => {
    // Create a query object based on non-empty search inputs
    const query = {};

    if (title) query.title = title; 

    // Convert the query object to a query string
    const queryString = new URLSearchParams(query).toString();

    // Navigate to the search results page with the query string
    navigate(`/search-results?${queryString}`);
  };
  const handleCartClick = () => {
    navigate('/cart'); // Navigate to CartPage
};
const handleWishClick = () => {
  navigate('/wishlist'); // Navigate to WishlistPage
};

  return (
    <nav className="relative bg-text text-white py-4 flex items-center justify-center">
    <div className="container mx-auto">
      <div className="">
        <div className="flex justify-between py-2">
          <div className='flex justify-between'>
            <img src={samplelogo} alt="logo" className="w-10 h-10" />
            <h1 className="text-2xl font-bold pl-2">BookHaven</h1> 
          </div>
          <div className="flex justify-between">             
            
            <div className="md:hidden">
                <button onClick={toggleMenu}>                    
                  {isOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
                </button>
              </div>
           <div className={`mr-8 md:flex items-center space-x-8 font-bold text-md text-#1111110 ${isOpen ? 'block' : 'hidden'} md:block`}>
            <div>
                <Link to={"/"} className="block mt-4 px-2 py-2 md:inline-block md:mt-0 mx-4 hover:text-blue-500 rounded">Home</Link>
                
                <Link to={"/books"} className="block mt-4 px-2 py-2 md:inline-block md:mt-0 mx-4 hover:text-blue-500 rounded">Books</Link>
                
                <Link to={"/categories"} className="block mt-4 px-2 py-2 md:inline-block md:mt-0 mx-4 hover:text-blue-500 rounded">Categories</Link>
                
                <Link to={"#trending"} className="block mt-4 px-2 py-2 md:inline-block md:mt-0 mx-4 hover:text-blue-500 rounded">Trending</Link>
                
                <Link to={"#deals"} className="block mt-4 px-2 py-2 md:inline-block md:mt-0 mx-4 hover:text-blue-500 hover rounded">Deals</Link>                
                     
          </div>        
          {/* <div className='flex justify-between'> */}
          <div className="relative mr-2">
            <input
              type="text"
              placeholder="Search books by title..."
              className="pl-8 pr-4 py-2 text-text border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              value={title} onChange={(event) => setTitle(event.target.value)}
            />
            <svg
              className="absolute right-3 top-2.5 h-5 w-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              onClick={handleSearch}
            >
              <path
                fillRule="evenodd"
                d="M13.457 12.543l4.95 4.95a1 1 0 01-1.414 1.414l-4.95-4.95a8 8 0 111.414-1.414zM8 14a6 6 0 100-12A6 6 0 008 14z"
                clipRule="evenodd"
              />
              
            </svg>
          
          </div>
          <div className='flex justify-between pt-2 text-lg space-x-4'>          
          <div className='flex justify-between hover:cursor-pointer' onClick={handleCartClick}>
            <ShoppingCartIcon className="w-6 h-6" />
            <p className='mr-4'> {cartCount > 0 && (
               <span className="badge">
                  {cartCount}
               </span>
            )} </p>
          
               
          </div>
          <div className='flex justify-between hover:cursor-pointer' onClick={handleWishClick}>            
            <HeartIcon className="w-6 h-6" />
            <p> { wishlistCount > 0 && (
              <span className="badge">
                {wishlistCount}
              </span>
            )}</p>
          </div> 
          </div> 
          </div>        
      </div> 
      </div>
      </div>
    </div>
    </nav>
  );
};

export default Navbar;