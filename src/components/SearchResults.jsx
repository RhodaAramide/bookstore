import React from 'react'
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import BookCard from './BookCard';
import { ArrowCircleLeftIcon } from '@heroicons/react/outline';
import Navbar from './Navbar';
import Footer from './Footer';

const SearchResults = (props) => {
  const [filteredBooks, setBooks] = useState([]);
  const {data} = props;
  const location = useLocation();
  const navigate = useNavigate();
  const handleClick = () => { //This function is used to navigate to the previous page
    navigate(-1);
  };
  
  useEffect(() => {
    // Extract query parameters
    const queryParams = new URLSearchParams(location.search);
    const title = queryParams.get("title")?.toLowerCase() || "";  

     // Filter books based on search parameters
  const filteredBooks = data.books.filter((book) => {
    return (
      (title === "" || book.title.toLowerCase().includes(title))          
    );
  });
    setBooks(filteredBooks);     
}, [location.search]);

  return (
    <div>
      <Navbar />
    <div className="bg-accent text-text mb-8">
      <div className="container mx-auto">
      <div className='flex justify-start gap-2 pt-4 text-primary cursor-pointer' onClick={handleClick}>
            <ArrowCircleLeftIcon className="w-6 h-6" /> 
            <p>Go Back </p>
        </div>      
      <h1 className="text-3xl font-bold py-4">Search Results</h1>
      <hr className="h-0.5 w-42 mb-8 bg-primary border-0 dark:bg-gray-700"></hr>
      
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12 pt-8">
    {filteredBooks.map((book) => (  
    <div key={book.id}>             
        <BookCard book={book}/>          
    </div>
    ))}
      </div>
      </div>
    </div>
    <Footer />
    </div>
  )
}

export default SearchResults