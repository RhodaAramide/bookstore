import React from 'react'
import { Link } from 'react-router-dom';

const BookCard = ({book}) => {
  return (
    <div className="bg-white mx-4 h-full px-4 pt-4 shadow-lg rounded-lg overflow-hidden">
        <img src={book.cover_image} alt={book.title} className="object-cover w-full h-64" />
        <h3 className="text-lg text-text pt-2 font-bold">{book.title}</h3>
        <p className='text-text'>Author: {book.author}</p>
        <p className='text-primary'>Price: ${book.price}</p>
        <div className='flex justify-center mt-2'>
        <Link to={`/books/${book.id}`}>
          <button className="bg-text text-white p-2 font-bold rounded mb-2">
           View
           </button>
        </Link>
        </div>
    </div>
  )
}

export default BookCard