import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BookList from '../components/BookList'
import data from '../data/mockData.json'

const BooksPage = () => {
  return (
    <div>
        <Navbar />
        <BookList data={data}/>
        <Footer />
        
    </div>
  )
}

export default BooksPage