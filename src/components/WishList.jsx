import React, { useState, useEffect } from 'react';
import { useAppContext } from "../AppContext";
import { useNavigate } from 'react-router-dom';
import { ArrowCircleLeftIcon } from '@heroicons/react/outline';


const WishList = () => {  
  const [wishlistItems, setWishlistItems] = useState([]);
  const { wishlistCount, setWishlistCount } = useAppContext();
  const navigate = useNavigate(); // Initialize useNavigate
  
  
  const handleClick = () => { //This function is used to navigate to the previous page
    navigate(-1);
  };

  useEffect(() => {
    const storedWish = JSON.parse(localStorage.getItem("wishlistItems")) || [];
    setWishlistItems(storedWish);
    setWishlistCount(storedWish.length);
  }, [setWishlistCount]);

  // Function to handle removing a book from the wishlist
  const handleRemoveFromWishlist = (id) => {
    // removeFromWishlist(id);
    // Update the wishlist state after removing the book
    const updatedWishlist = wishlistItems.filter(book => book.id !== id);
    setWishlistItems(updatedWishlist);
    localStorage.setItem('wishListItems', JSON.stringify(updatedWishlist));
    setWishlistCount(updatedWishlist.length);
  };

  if (wishlistItems.length === 0) {
    return <div className='text-2xl text-primary text-center my-8'>Your wishlist is empty.</div>;
  }

  return (
    <div className=' bg-accent'>
      <div className='container mx-auto'>
      <div className='flex justify-start gap-2 pt-4 cursor-pointer text-primary' onClick={handleClick}>
            <ArrowCircleLeftIcon className="w-6 h-6" /> 
            <p>Go Back </p>
        </div>
      <h2 className="text-3xl font-bold py-2"> My Wishlist</h2>
      <p className='font-bold text-text pb-4'>Books: {wishlistCount}</p>
      <hr className="h-0.5 w-42 mb-8 bg-primary border-0 dark:bg-gray-700"></hr>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {wishlistItems.map(book => (
           <div key={book.id} className="flex justify-between border mb-8 bg-white p-4 rounded-lg">
           <img src={book.cover_image} alt={book.title} className="object-cover max-w-md" />
           <div className='flex justify-center ml-4 mt-8 '>
           <div className='mt-4  text-text font-bold pr-8 mr-8'>
           <h3 className="text-2xl pb-2 font-bold">{book.title}</h3>
           <p className='text-lg'>Author: {book.author}</p>
           <p className='text-lg'>Genre: {book.genre}</p>
           
           <p className='text-lg'>Rating: {book.rating}</p>
           <p className='text-lg'>Price: ${book.price}</p>        
               
            <button
              className="px-4 py-2 bg-red-500 text-white rounded"
              onClick={() => handleRemoveFromWishlist(book.id)}
            >
              Remove
            </button>
            </div> 
            </div>
            </div>
            
          
        ))}
      </div>
    </div>
    </div>
  );
}

export default WishList;