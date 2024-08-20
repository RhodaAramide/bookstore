import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import useFetch from '../useFetch';
import { orderBy } from 'lodash';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import BookCard from './BookCard';

const TrendingBooks = () => {
  const { data: books} = useFetch();
  const sortedBooks = orderBy(books, 'popularity', 'desc'); // Sort the books array
  const navigate = useNavigate(); // Initialize useNavigate

  const handleView = () => {
    navigate('/books'); // Navigate to books
  };
  

  // Carousel settings
  const carouselSettings = {
    responsive: {
      superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    },
    containerClass: "carousel-container",
    itemClass: "carousel-item"
  };

  return (
    <div id="trending" className='bg-[#FCECEC] p-12'>
      <div >
        <div className="flex items-center justify-between mb-4">
        <h2 className="text-3xl font-bold">Trending Books</h2> 
        <div className='text-primary font-bold my-4  mr-8'>
        <Link to='/books'>View All Books</Link>
        </div>
    </div>       
      </div>
      <div className='max-h-lg'>
      <Carousel {...carouselSettings}>
        {sortedBooks.map(book => (
          <div key={book.id} className="h-full">
           <BookCard book={book}/>
          </div>
        ))}
      </Carousel>
      </div>
      
        
    </div>
  );
}

export default TrendingBooks;

