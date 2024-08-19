import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import CategorySection from '../components/CategorySection';
import TrendingBooks from '../components/TrendingBooks';
import DailyDeals from '../components/DailyDeals';
import Footer from '../components/Footer';
import Newsletter from '../components/Newsletter';
import FeaturedBook from '../components/FeaturedBook';



const HomePage = () => {
  return (
    <div className=''>     
    <SearchBar />   
    <Navbar />
    <div className='text-text'>
      
      <Header />
      
      <CategorySection />
      <TrendingBooks />
      <FeaturedBook />
      <DailyDeals />
      <Newsletter />
    </div>
    <Footer />
  </div>
  )
}

export default HomePage