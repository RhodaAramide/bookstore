import React, { useState, useEffect } from 'react';


const WishList = () => {
  
  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {
    const storedWish = JSON.parse(localStorage.getItem("wishlistItems")) || [];
    setWishlistItems(storedWish);
  }, []);

  // Function to handle removing a book from the wishlist
  const handleRemoveFromWishlist = (id) => {
    // removeFromWishlist(id);
    // Update the wishlist state after removing the book
    const updatedWishlist = wishlistItems.filter(book => book.id !== id);
    setWishlistItems(updatedWishlist);
  };

  if (wishlistItems.length === 0) {
    return <div>Your wishlist is empty.</div>;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Wishlist</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {wishlistItems.map(book => (
          <div key={book.id} className="border p-4 rounded">
            <img src={book.cover_image} alt={book.title} className="object-cover w-full h-64" />
            <h3 className="text-lg font-bold">{book.title}</h3>
            <p>Author: {book.author}</p>
            <p>Genre: {book.genre}</p>
            <p>Price: ${book.price}</p>
            
            <button
              className="px-4 py-2 bg-red-500 text-white rounded"
              onClick={() => handleRemoveFromWishlist(book.id)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WishList;