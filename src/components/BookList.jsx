import React, { useState, useEffect } from "react";
import useFetch from '../useFetch';
import { useNavigate } from 'react-router-dom';
import BookCard from './BookCard';
import { ArrowCircleLeftIcon } from '@heroicons/react/outline';

const BookList = () => {
  const navigate = useNavigate();
  const { data: books, isPending, error } = useFetch();
  // const [Books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [selectedAuthor, setSelectedAuthor] = useState("");
  const [selectedRating, setSelectedRating] = useState("");

  const handleClick = () => { //This function is used to navigate to the previous page
    navigate(-1);
  };

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
  
  return (
    <div className="bg-accent text-text mb-8">
      <div className="container mx-auto">
      <div className='flex justify-start gap-2 pt-4 text-primary' onClick={handleClick}>
            <ArrowCircleLeftIcon className="w-6 h-6" /> 
            <p>Go Back </p>
        </div>
      <div className="flex justify-between gap-8 space-x-8">
      <div>
      <h1 className="text-3xl font-bold py-4">Book Listings</h1>
      <hr className="h-0.5 w-42 mb-8 bg-primary border-0 dark:bg-gray-700"></hr>
      <div className="text-lg font-bold">
      <div>
        <label htmlFor="title" className="">Title:</label>
        <input type="text" 
        placeholder="Search by title" 
        className="p-2 rounded-lg w-full"
        value={searchTerm} onChange={handleSearch} />
      </div>
      <div className="py-2">
        <label htmlFor="genre" className="pr-2">Genre:</label>
        <select id="genre" value={selectedGenre}
          className="p-0.5 rounded-lg"
          onChange={handleGenreFilter}>
          <option value="">All Genres</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Science Fiction">Sc-Fi</option>
          <option value="Mystery">Mystery</option>
          <option value="Romance">Romance</option>
          <option value="Historical Fiction">Historical Fiction</option>
          <option value="Thriller">Thriller</option>
          <option value="Biography">Biography</option>
        </select>
      </div>
      <div className="py-2">
        <label htmlFor="author" className="pr-2">Author:</label>
        <select id="author" value={selectedAuthor} 
          className="p-0.5 rounded-lg"
          onChange={handleAuthorFilter}>
          <option value="">All Authors</option>
          <option value="Norah Wittier">Norah Wittier</option>
          <option value="Krista Sandyford">Krista Sandyford</option>
          <option value="Guilbert Lortzing">Guilbert Lortzing</option>
          <option value="Marc Nemchin">Marc Nemchino</option>
          <option value="Ellis Stennes">Ellis Stennes</option>
        </select>
      </div>
      <div className="py-2">
        <label htmlFor="rating" className="pr-2">Rating:</label>
        <select id="rating" value={selectedRating} 
          className="p-2 rounded-lg"
          onChange={handleRatingFilter}>
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12 pt-8">
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