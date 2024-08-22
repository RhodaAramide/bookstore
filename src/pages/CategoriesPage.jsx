import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Categories from '../components/Categories'
import data from '../data/mockData.json'

const CategoriesPage = () => {
  return (
    <div>
        <Navbar />
        <Categories data={data}/>
        <Footer />
    </div>
  )
}

export default CategoriesPage