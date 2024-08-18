import React, { useState, useEffect } from "react";
import useFetch from '../useFetch';
import { Link } from 'react-router-dom';
import BookCard from './BookCard';
import { ArrowCircleLeftIcon } from '@heroicons/react/outline';

const BookList = () => {
  const { data: books, isPending, error } = useFetch();
  // const [Books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [selectedAuthor, setSelectedAuthor] = useState("");
  const [selectedRating, setSelectedRating] = useState("");

  // useEffect(() => {
  //   useFetch('http://localhost:8000/users');
  //   setBooks(books);
  // }, []);

  if (isPending) { //This is displayed while it is loading
    return <div>Pending...</div>;
  }

  if (error) {  //This displays the error if encountered
    return <div>{error}</div>;
  }

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleGenreFilter = (event) => {
    setSelectedGenre(event.target.value);
  };

  const handleAuthorFilter = (event) => {
    setSelectedAuthor(event.target.value);
  };

  const handleRatingFilter = (event) => {
    setSelectedRating(event.target.value);
  };

  const filteredBooks = books.filter((book) => {
    const matchedTitle = book.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchedGenre = selectedGenre === "" || book.genre === selectedGenre;
    const matchedAuthor = selectedAuthor === "" || book.author === selectedAuthor;
    const matchedRating = selectedRating === "" || book.rating >= parseInt(selectedRating);

    return matchedTitle && matchedGenre && matchedAuthor && matchedRating;
  });
  console.log("Filtered books: ", filteredBooks);
  return (
    <div className="bg-accent text-text mb-8">
      <div className="container mx-auto">
      <div className='flex justify-start space-x-2 py-4 text-primary'>
            <ArrowCircleLeftIcon className="w-6 h-6" /> 
            <p>Go Back </p>
        </div>
      <div className="flex justify-center">
      <div>
      <h1 className="text-2xl font-bold py-4">Book Listings</h1>
      <div className="font-bold">
      <div>
        <label htmlFor="title">Title:</label>
        <input type="text" 
        placeholder="Search by title" 
        value={searchTerm} onChange={handleSearch} />
      </div>
      <div className="py-2">
        <label htmlFor="genre" className="pr-2">Genre:</label>
        <select id="genre" value={selectedGenre} onChange={handleGenreFilter}>
          <option value="">All Genres</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Sci-Fi">Sci-Fi</option>
          <option value="Mystery">Mystery</option>
          <option value="Romance">Romance</option>
        </select>
      </div>
      <div>
        <label htmlFor="author">Author:</label>
        <select id="author" value={selectedAuthor} onChange={handleAuthorFilter}>
          <option value="">All Authors</option>
          <option value="Author 1">Author 1</option>
          <option value="Author 2">Author 2</option>
          <option value="Author 3">Author 3</option>
        </select>
      </div>
      <div>
        <label htmlFor="rating">Rating:</label>
        <select id="rating" value={selectedRating} onChange={handleRatingFilter}>
          <option value="">All Ratings</option>
          <option value="1">1+</option>
          <option value="2">2+</option>
          <option value="3">3+</option>
          <option value="4">4+</option>
          <option value="5">5</option>
        </select>
      </div>
      </div>
      </div>
      <div className="grid grid-cols-3 gap-2 mt-8">
        {filteredBooks.map((book) => (  
        <div key={book.id}>             
            <BookCard book={book}/>          
        </div>
        ))}
      </div>
      </div>
    </div>
    </div>
  );
};

export default BookList;