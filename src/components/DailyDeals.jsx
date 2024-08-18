import React, { useState, useEffect } from 'react';
// import useFetch from '../useFetch';
import Unsplash from '../assets/images/unsplash.svg';

const DailyDeals = () => {
  // const { data: books, isPending, error } = useFetch('http://localhost:8000/books');

  const [books, setBooks] = useState([]);
  const [currentOfferIndex, setCurrentOfferIndex] = useState(0);
  const [displayedTitle, setDisplayedTitle] = useState('');
  const [displayedOffer, setDisplayedOffer] = useState('');

  useEffect(() => {
    // Simulate asynchronous data fetching
    fetchBooks()
      .then((fetchedBooks) => {
        setBooks(fetchedBooks);
      })
      .catch((error) => {
        console.error('Error fetching books:', error);
      });
  }, []);

  useEffect(() => {
    if (books.length > 0) {
      const typingTimeout = setTimeout(() => {
        const titleToType = books[currentOfferIndex].title;
        const offerToType = books[currentOfferIndex].specialOffer;

        typeInTitle(titleToType);
        typeInOffer(offerToType);
      }, 1000);

      const rotationTimeout = setTimeout(() => {
        setCurrentOfferIndex((prevIndex) => (prevIndex + 1) % books.length);
      }, 5000);

      return () => {
        clearTimeout(typingTimeout);
        clearTimeout(rotationTimeout);
      };
    }
  }, [books, currentOfferIndex]);

  const fetchBooks = async () => {
    try {
      // Replace with your actual data fetching logic
      const response = await fetch('http://localhost:8000/books');
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error('Error fetching books');
    }
  };

  const typeInTitle = (title) => {
    const length = title.length;
    let currentLength = 0;

    const typingInterval = setInterval(() => {
      if (currentLength <= length) {
        setDisplayedTitle(title.substr(0, currentLength));
        currentLength++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);
  };

  const typeInOffer = (offer) => {
    const length = offer.length;
    let currentLength = 0;

    const typingInterval = setInterval(() => {
      if (currentLength <= length) {
        setDisplayedOffer(offer.substr(0, currentLength));
        currentLength++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);
  };
  return (
    <div className=' mb-8'>
      <h2 className="text-2xl font-bold mb-4">Daily Deals</h2>
      <div className="grid grid-cols-2 mx-8 bg-[#FCEBEA]">
      <div className="flex flex-col justify-normal p-16 font-bold">
      <h2 className="text-3xl font-bold">Today's Deal!</h2>
      <h2 className="text-3xl font-bold mb-4">Special Offers just for you!</h2>
      <h3 className="text-2xl mb-4">{displayedTitle}</h3>
      <p className="text-lg">{displayedOffer}</p>   
        <p className="mt-8">Don't miss such a deal!</p>
      </div>
      <div className='my-8 mr-8'>
        <img src={Unsplash} alt="daily_deals" className="object-cover w-full" />        
      </div>
      </div>
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {dailyDeals.map(book => (
          <div key={book.id} className="border p-4 rounded">
            <img src={book.cover_image} alt={book.title} className="object-cover w-full h-64" />
            <h3 className="text-lg font-bold">{book.title}</h3>
            <p>Author: {book.author}</p>
            {book.discount && (
              <p className="text-red-500 mb-2">Discount: {book.discount}% off</p>
            )}
            {book.specialOffer && (
              <p className="text-green-500 mb-2">Special Offer: {book.specialOffer}</p>
            )}
            <p>Price: ${book.price}</p>
          </div>
        ))}
      </div> */}
    </div>
  );
}

export default DailyDeals;

