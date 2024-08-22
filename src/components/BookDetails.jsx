import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, json } from 'react-router-dom';
import { books } from '../data/mockData.json';
import { ArrowCircleLeftIcon } from '@heroicons/react/outline';
import Navbar from './Navbar';
import Footer from './Footer';



const BookDetails = () => {
  
  const [booksData, setbooks] = useState(books);
  const { id } = useParams(); // Get the book id from the route params
  
  const navigate = useNavigate();

  const handleClick = () => { //This function is used to navigate to the previous page
    navigate(-1);
  };
   
  // const [selectedBook, setSelectedBook] = useState(null);

  const selectedBook = booksData.find(book => book.id === parseInt(id));

  if (!selectedBook) {
    return <div>Book not found.</div>
  }
    
  const handleAddToCart = (selectedBook) => {
    // Get existing cart items from local storage or initialize an empty array
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const cartBook = {
      id: selectedBook.id,
      title: selectedBook.title,
      author: selectedBook.author,      
      cover_image: selectedBook.cover_image,
      price: selectedBook.price
    };
    // Add the product to the cart items array
    cartItems.push(cartBook);   

    // Save the updated cart items array back to local storage
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    alert("Book added to cart!");
  };

  const handleAddToWishlist = (selectedBook) => {
    // Get existing wishlist items from local storage or initialize an empty array
    const wishlistItems = JSON.parse(localStorage.getItem("wishlistItems")) || [];
    const wishlistBook = {
      id: selectedBook.id,
      title: selectedBook.title,
      author: selectedBook.author,
      genre: selectedBook.genre,
      cover_image: selectedBook.cover_image,
      price: selectedBook.price,
      rating: selectedBook.rating,
      // plot_summary: selectedBook.plot_summary
    };
    // Add the product to the wishlist items array
    
    wishlistItems.push(wishlistBook);
    
    // Save the updated wishlist items array back to local storage
    localStorage.setItem("wishlistItems", JSON.stringify(wishlistItems));
    alert("Book added to wishlist!");
  };


  return (
    <div>
      <Navbar />
      <div className='container mx-auto'>
      <div className='flex justify-start gap-2 pt-4 text-primary' onClick={handleClick}>
            <ArrowCircleLeftIcon className="w-6 h-6" /> 
            <p>Go Back </p>
        </div>
      <h2 className="text-3xl font-bold mb-4 ml-8">{selectedBook.title}</h2>
      <hr className="h-0.5 w-42 ml-8 bg-primary border-0 dark:bg-gray-700"></hr>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 mb-8 pb-16 items-center max-w-3xl">
        <img src={selectedBook.cover_image} alt={selectedBook.title} className="object-cover max-w-5xl" />
        <div className='text-text'>
          <p className='text-primary text-lg font-bold py-2'>Plot Summary</p>
          <p className="mb-2">{selectedBook.plot_summary}</p>
          <p className='text-primary text-lg font-bold'>Author: 
            <span className=" text-text pl-2">{selectedBook.author}</span></p>
          <p className='text-primary text-lg font-bold'>Price: 
          <span className=" text-text pl-2">${selectedBook.price}</span></p>
          <p className='text-primary text-lg font-bold'>Genre: 
          <span className=" text-text pl-2">{selectedBook.genre}</span></p>
          <p className='text-primary text-lg font-bold mb-4'>Rating: 
          <span className=" text-text pl-2">{selectedBook.rating}</span></p>

          <button
            className="px-4 py-2 bg-blue-500 text-white rounded"
            onClick={() => handleAddToWishlist(selectedBook)}
          >
            Add to Wishlist
          </button>
          <button
            className="px-4 py-2 bg-green-500 text-white rounded ml-4"
            onClick={() => handleAddToCart(selectedBook)}
          >
            Add to Cart
          </button>
        </div>
      </div>
      
    </div>
    <Footer />
    </div>
  );
}

export default BookDetails;