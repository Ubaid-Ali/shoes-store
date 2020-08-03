import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Routes, Route
} from 'react-router-dom';

// Import Components
import Home from './components/home'
import Products from './components/products'
import About from './components/about'
import NotFound from './components/notFound'
import NavBar from './components/navBar';
import ProductItem from './components/productItem';


function App() {
  return (
    <Router className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route exact path='products' element={<Products />} />
        <Route path='products/:id' element={<ProductItem />} />
        <Route path='about' element={<About />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <h4 className='footer-h4'> © abcxyz.com, Inc. All rights reserved.</h4>
    </Router>

  );
}

export default App;
