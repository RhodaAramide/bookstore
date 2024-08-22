import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import CategorySection from '../components/CategorySection';
import TrendingBooks from '../components/TrendingBooks';
import DailyDeals from '../components/DailyDeals';
import Footer from '../components/Footer';
import Newsletter from '../components/Newsletter';
import FeaturedBook from '../components/FeaturedBook';
import Articles from '../components/Articles';
import data from '../data/mockData.json';



const HomePage = () => {
  return (
    <div className=''>      
    <Navbar />       
    <Header />    
    <CategorySection />
    <TrendingBooks data={data}/>
    <FeaturedBook />
    <DailyDeals data={data}/>
    <Newsletter />
    <Articles />
    <Footer />
  </div>
  )
}

export default HomePage