import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import CategorySection from '../components/CategorySection';
import TrendingBooks from '../components/TrendingBooks';
import DailyDeals from '../components/DailyDeals';
import Footer from '../components/Footer';
import Newsletter from '../components/Newsletter';



const HomePage = () => {
  return (
    <div>     
    <SearchBar />   
    <Navbar />
    <div className='container mx-auto text-text'>
      
      <Header />
      
      <CategorySection />
      <TrendingBooks />
      <DailyDeals />
      <Newsletter />
    </div>
    <Footer />
  </div>
  )
}

export default HomePage