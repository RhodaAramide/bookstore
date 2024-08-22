import React, { useState } from 'react';
import BookCard from './BookCard';
import books from '../data/mockData.json';
import { useNavigate } from 'react-router-dom';
import { ArrowCircleLeftIcon } from '@heroicons/react/outline';


const Categories = (props) => {
  const {data} = props;
  const [selectedCategory, setSelectedCategory] = useState('');
  
  const navigate = useNavigate();
  const handleClick = () => { //This function is used to navigate to the previous page
    navigate(-1);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

   const filteredBooks = selectedCategory
    ? data.books.filter((book) => book.category === selectedCategory)
    : data.books;

  return (
    <section className="bg-accent mb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>

        </div>
        <div className="">
        <div className='flex justify-start gap-2 pt-4 cursor-pointer text-primary' onClick={handleClick}>
            <ArrowCircleLeftIcon className="w-6 h-6" /> 
            <p>Go Back </p>
        </div>
            <h1 className="font-bold text-text text-2xl">
              CATEGORIES
            </h1>
            <h2 className="font-bold text-4xl flex justify-center">
              Choose a Category:
              </h2>     
              
          <div className="flex items-center justify-center mt-4">              
            <div className="bg-white mx-4 h-full shadow-lg rounded-lg overflow-hidden">
              <button
                className={`mr-2 px-4 py-2 rounded-md ${
                  selectedCategory === 'Classic' ? 'bg-blue-500 text-white' : 'bg-text text-white'
                }`}
                onClick={() => handleCategoryChange('Classic')}
              >
                Classic
              </button>
            </div>
            <div className="bg-white mx-4 h-full shadow-lg rounded-lg overflow-hidden">
              
              <button
                className={`mr-2 px-4 py-2 rounded-md ${
                  selectedCategory === 'Contemporary' ? 'bg-blue-500 text-white' : 'bg-text text-white'
                }`}
                onClick={() => handleCategoryChange('Contemporary')}
              >
                Contemporary
              </button>
            </div>
            <div className="bg-white mx-4 h-full shadow-lg rounded-lg overflow-hidden">
              
              <button
                className={`mr-2 px-4 py-2 rounded-md ${
                  selectedCategory === 'Cultural' ? 'bg-blue-500 text-white' : 'bg-text text-white'
                }`}
                onClick={() => handleCategoryChange('Cultural')}
              >
                Cultural
              </button>
            </div>
           <div className="bg-white mx-4 h-full shadow-lg rounded-lg overflow-hidden">
            
            <button
                className={`mr-2 px-4 py-2 rounded-md ${
                  selectedCategory === 'Engineering' ? 'bg-blue-500 text-white' : 'bg-text text-white'
                }`}
                onClick={() => handleCategoryChange('Engineering')}
              >
                Engineering
              </button>
            </div>     
            <div className="bg-white mx-4 h-full shadow-lg rounded-lg overflow-hidden">
            
            <button
                className={`mr-2 px-4 py-2 rounded-md ${
                  selectedCategory === 'Literature' ? 'bg-blue-500 text-white' : 'bg-text text-white'
                }`}
                onClick={() => handleCategoryChange('Literature')}
              >
                Literature
              </button>
            </div> 
            <div className="bg-white mx-4 h-full shadow-lg rounded-lg overflow-hidden">
            
            <button
                className={`mr-2 px-4 py-2 rounded-md ${
                  selectedCategory === 'Management' ? 'bg-blue-500 text-white' : 'bg-text text-white'
                }`}
                onClick={() => handleCategoryChange('Management')}
              >
                Management
              </button>
            </div>       
            <div className="bg-white mx-4 h-full shadow-lg rounded-lg overflow-hidden">
            
            <button
                className={`mr-2 px-4 py-2 rounded-md ${
                  selectedCategory === 'Science' ? 'bg-blue-500 text-white' : 'bg-text text-white'
                }`}
                onClick={() => handleCategoryChange('Science')}
              >
                Science
              </button>
            </div>                   
           
          </div>
          
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          {filteredBooks.map((book) => (
            <div key={book.id} className="bg-white border border-gray-300 p-4 rounded-lg">
              <BookCard book={book} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;