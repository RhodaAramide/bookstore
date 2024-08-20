import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const CartSection = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate
  
  
  const handleClick = () => { //This function is used to navigate to the previous page
    navigate(-1);
  };

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(storedCart);
  }, []);


  // Function to handle updating the quantity of a book in the cart
  const handleUpdateQuantity = (id, quantity) => {
    // updateQuantity(id, quantity);
    // Update the quantity in the cart state
    const updatedCart = cartItems.map(item => {
      if (item.id === id) {
        return { ...item, quantity };
      }
      return item;
    });
    setCartItems(updatedCart);
  };

  // Function to handle removing a book from the cart
  const handleRemoveFromCart = (id) => {
    removeFromCart(id);
    // Update the cart state after removing the book
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
  };
  const handleCartCheckout = () => {
    navigate('/checkout');
  };

  if (cartItems.length === 0) {
    return <div>Your shopping cart is empty.</div>;
  }

  return (
    <div className='bg-accent'>
      <div className='container mx-auto  px-8'>
      <div className='flex justify-start gap-2 pt-4 text-primary' onClick={handleClick}>
            <ArrowCircleLeftIcon className="w-6 h-6" /> 
            <p>Go Back </p>
        </div>
      <h2 className="text-3xl font-bold py-4">My Cart</h2>
      <hr className="h-0.5 w-42 mb-8 bg-primary border-0 dark:bg-gray-700"></hr>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
        
        {cartItems.map(book => (            
          <div key={book.id} className="flex justify-between border mb-8 bg-white p-4 rounded-lg">
            <img src={book.cover_image} alt={book.title} className="object-cover max-w-md" />
            <div className='flex justify-center mt-8'>
            <div className='mt-4  text-text font-bold'>
            <h3 className="text-2xl pb-2 font-bold">{book.title}</h3>
            <p className='text-lg'>Author: {book.author}</p>
            <p className='text-lg'>Price: ${book.price}</p>
            <div className="flex items-center py-4">
              <label htmlFor={`quantity-${book.id}`} className="mr-2">Quantity:</label>
              <input
                type="number"
                id={`quantity-${book.id}`}
                className="border-text border rounded p-2 w-24"
                required
                min={1}
                value={book.quantity}
                onChange={(e) => handleUpdateQuantity(book.id, e.target.value)}
              /> 
            </div>
            <p>Total: ${!total ? "0" : total} </p>
            <div className='space-x-8 mt-4'>
            <button
              className="px-4 py-2 bg-red-500 text-white rounded mt-2"
              onClick={() => handleRemoveFromCart(book.id)}
            >
              Remove
            </button>
            <button
            className="px-4 py-2 bg-text text-white rounded mt-2"
            onClick={() => handleCartCheckout(book)}
          >
            Order
          </button>
          </div>
          </div>
          </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}

export default CartSection;