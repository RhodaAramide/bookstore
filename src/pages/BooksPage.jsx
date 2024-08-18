import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BookList from '../components/BookList'

const BooksPage = () => {
  return (
    <div>
        <Navbar />
        <BookList />
        <Footer />
        
    </div>
  )
}

export default BooksPage