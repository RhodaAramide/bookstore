import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../useFetch';
import { ArrowCircleLeftIcon } from '@heroicons/react/outline';
import Navbar from './Navbar';
import Footer from './Footer';


const BookDetails = () => {
  const { id } = useParams(); // Get the book id from the route params
  const { data: books } = useFetch();
   
  // const [selectedBook, setSelectedBook] = useState(null);

  const selectedBook = books.find(book => book.id === parseInt(id));

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
      price: selectedBook.price
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
      <div className='flex justify-start space-x-2 py-4 text-primary'>
            <ArrowCircleLeftIcon className="w-6 h-6" /> 
            <p>Go Back </p>
          </div>
      <h2 className="text-2xl font-bold mb-4 ml-8">{selectedBook.title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <img src={selectedBook.cover_image} alt={selectedBook.title} className="object-cover w-full h-lvh" />
        <div>
          <p className="mb-4">{selectedBook.plot_summary}</p>
          <p>Author: <span className="font-bold">{selectedBook.author}</span></p>
          <p>Price: ${selectedBook.price}</p>
          <p>Genre: {selectedBook.genre}</p>
          <p className='mb-4'>Rating: {selectedBook.rating}</p>

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
      <Footer />
    </div>
    </div>
  );
}

export default BookDetails;