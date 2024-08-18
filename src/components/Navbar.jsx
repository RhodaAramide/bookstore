import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); 

  const toggleMenu = () => { //This handles the toggle menu for the hamburger icon
    setIsOpen(!isOpen);
  }

  return (
    <nav className="bg-text text-white py-4 flex items-center justify-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">          
        <div className="flex justify-center">             
            
            <div className="md:hidden">
                <button onClick={toggleMenu}>                    
                  {isOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
                </button>
              </div>
           <div className={`mr-8 md:flex items-center space-x-4 text-#111111 ${isOpen ? 'block' : 'hidden'} md:block`}>
                <Link to={"/"} className="block mt-4 px-4 py-2 md:inline-block md:mt-0 mx-4 hover:underline hover:text-blue-500 rounded text-sm font-medium">Home</Link>
                <div className="h-6 border border-gray-400"></div>
                <Link to={"/books"} className="block mt-4 px-4 py-2 md:inline-block md:mt-0 mx-4 hover:underline hover:text-blue-500 rounded text-sm font-medium">Books</Link>
                <div className="h-6 border border-gray-400"></div>
                <Link to={"/categories"} className="block mt-4 px-4 py-2 md:inline-block md:mt-0 mx-4 hover:underline hover:text-blue-500 rounded text-sm font-medium">Categories</Link>
                <div className="h-6 border border-gray-400"></div>
                <Link to={"/trending"} className="block mt-4 px-4 py-2 md:inline-block md:mt-0 mx-4 hover:underline hover:text-blue-500 rounded text-sm font-medium">Trending</Link>
                <div className="h-6 border border-gray-400"></div>
                <Link to={"/deals"} className="block mt-4 px-4 py-2 md:inline-block md:mt-0 mx-4 hover:underline hover:text-blue-500 rounded text-sm font-medium">Deals</Link>
                <div className="h-6 border border-gray-400"></div>
                <Link to={"/wishlist"} className="block mt-4 px-4 py-2 md:inline-block md:mt-0 mx-4 hover:underline hover:text-blue-500 rounded text-sm font-medium">Wishlist</Link>
          </div>           
          </div>        
      </div>
    </nav>
  );
};

export default Navbar;