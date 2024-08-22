import React, { useState, useEffect } from 'react';
import books from '../data/mockData.json';


const DailyDeals = (props) => {
  const {data} = props;
  const [books, setBooks] = useState([]);
  const [currentOfferIndex, setCurrentOfferIndex] = useState(0);
  const [displayedTitle, setDisplayedTitle] = useState('');
  const [displayedOffer, setDisplayedOffer] = useState('');

  
  useEffect(() => {
    if (data.books.length > 0) {
      const typingTimeout = setTimeout(() => {
        const titleToType = data.books[currentOfferIndex].title;
        const offerToType = data.books[currentOfferIndex].specialOffer;

        typeInTitle(titleToType);
        typeInOffer(offerToType);
      }, 1000);

      const rotationTimeout = setTimeout(() => {
        setCurrentOfferIndex((prevIndex) => (prevIndex + 1) % data.books.length);
      }, 5000);

      return () => {
        clearTimeout(typingTimeout);
        clearTimeout(rotationTimeout);
      };
    }
  }, [data.books, currentOfferIndex]);

  

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
    <div id="deals" className='mb-8 mt-8 pt-8 bg-white'>
      {/* <h2 className="ml-4 text-2xl font-bold mb-4">Daily Deals</h2> */}
      <div className='flex justify-center'>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 bg-[#FCEBEA]">    
      <div className="p-8 m-8 font-bold">
        <h2 className="text-5xl font-bold pb-2">Today's Deal!</h2>
        <h2 className="text-3xl font-bold mb-8">Special Offers just for you!</h2>
        <h3 className="text-primary text-3xl mb-2">{displayedTitle}</h3>
        <p className="text-primary mb-4 text-xl">{displayedOffer}</p>   
        <div className="font-bold flex justify-between text-2xl">
          <div>
            <p className="text-primary">02</p>
            <p className="text-text">DAYS</p>
          </div>
          <div>
            <p className="text-primary">03</p>
            <p className="text-text">HRS</p>
          </div>
          <div>
            <p className="text-primary">27</p>
            <p className="text-text">MIN</p>
          </div>
          <div>
            <p className="text-primary">55</p>
            <p className="text-text">SEC</p>
          </div>

        </div>
         <p className="text-black text-xl mt-8">Don't miss such a deal!</p>
      </div>
      <div className='my-8 mr-8'>
        <img src="https://res.cloudinary.com/dzckxcrwj/image/upload/f_auto,q_auto/sstxnvluwkwybixbpdqh" 
        alt="daily_deals" className="object-cover max-w-md" />        
      </div>
      </div>
      
    </div>
    </div>
  );
}

export default DailyDeals;

