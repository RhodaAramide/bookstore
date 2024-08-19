import React from 'react';
import { HeartIcon, SearchIcon, ShoppingCartIcon, UserCircleIcon } from '@heroicons/react/outline';
import samplelogo from '../assets/images/samplelogo.svg';
import { useNavigate } from 'react-router-dom';
import BookList from './BookList';

const SearchBar = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [searchTerm, setSearchTerm] = React.useState('');

  // const handleSearch = (event) => {
  //   setSearchTerm(event.target.value);
  // };
  const handleSearch = () => {
    navigate('/books');
    // navigate(<BookList {...searchTerm}/>) // Navigate to SearchPage
  };
  const handleCartClick = () => {
    navigate('/cart'); // Navigate to CartPage
};
const handleWishClick = () => {
  navigate('/wishlist'); // Navigate to WishlistPage
};

  return (
    <div className="container mx-auto">
      <div className="bg-white py-2">
        <div className="flex justify-between border-b border-background py-2">
          <div className='flex justify-between'>
            <img src={samplelogo} alt="logo" className="w-10 h-10" />
            <h1 className="text-3xl text-text font-bold pl-4">BookHaven</h1> 
          </div>
          <div className='flex justify-between'>
          <input className=" font-bold border-text border-l-8 rounded-full w-full text-text mr-3 py-1 px-2 leading-tight focus:outline-none" 
          type="text" 
          placeholder="Search for Books" 
          aria-label="Search"           
          value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)}
          />
          <SearchIcon className="w-8 h-8 pt-2" onClick={handleSearch}/>
          </div>
          <div className='flex justify-between pt-2 text-lg mr-8 space-x-8'>
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