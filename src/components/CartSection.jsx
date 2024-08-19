import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const CartSection = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate
  

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
    <div className='container mx-auto bg-accent'>
      <h2 className="text-2xl font-bold my-4">My Cart</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cartItems.map(book => (            
          <div key={book.id} className="border p-4 rounded">
            <img src={book.cover_image} alt={book.title} className="object-cover w-full h-64" />
            <h3 className="text-lg font-bold">{book.title}</h3>
            <p>Author: {book.author}</p>
            <p>Price: ${book.price}</p>
            <div className="flex items-center">
              <label htmlFor={`quantity-${book.id}`} className="mr-2">Quantity:</label>
              <input
                type="number"
                id={`quantity-${book.id}`}
                className="border rounded p-2 w-16"
                min={1}
                value={book.quantity}
                onChange={(e) => handleUpdateQuantity(book.id, e.target.value)}
              /> 
            </div>
            <p>Total: ${total}</p>
            <div>
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
          
        ))}
      </div>
    </div>
  );
}

export default CartSection;