import React from 'react';
import BookDetails from './components/BookDetails';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CategoriesPage from './pages/CategoriesPage';
import BooksPage from './pages/BooksPage';
import WishlistPage from './pages/WishlistPage';
import CartPage from './pages/CartPage';
import SearchResults from './components/SearchResults';
import data from './data/mockData.json';
import AppProvider from './AppContext';

function App() {
  return (
    <AppProvider>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/books" element={<BooksPage />} />
        <Route path="/books/:id" element={<BookDetails data={data}/>} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/search-results" element={<SearchResults data={data}/>} />
      </Routes>
    </Router>
    </AppProvider>
  )
}

export default App