import React, { useState } from "react";

const Order = ({ cartItems }) => {
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);

  const placeOrder = () => {
    setIsOrderPlaced(true);
  };

  const getOrderSummary = () => {
    // Calculate the total price and quantity of books in the cart
    let totalPrice = 0;
    let totalQuantity = 0;

    cartItems.forEach((item) => {
      totalPrice += item.price * item.quantity;
      totalQuantity += item.quantity;
    });

    return (
      <div>
        <h2>Order Summary</h2>
        <div>
          <p>Total Books: {totalQuantity}</p>
          <p>Total Price: ${totalPrice.toFixed(2)}</p>
        </div>
      </div>
    );
  };

  return (
    <div>
      <h1>Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <>
          <h2>Cart Items</h2>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                <p>{item.title}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Price: ${item.price.toFixed(2)}</p>
              </li>
            ))}
          </ul>
          {!isOrderPlaced ? (
            <button
              onClick={placeOrder}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Order Now
            </button>
          ) : (
            getOrderSummary()
          )}
        </>
      )}
    </div>
  );
};

export default Order;