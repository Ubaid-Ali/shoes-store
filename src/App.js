import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Routes, Link, Switch, Route
} from 'react-router-dom';

// Import Components
import Home from './components/home'
import Products from './components/products'
import About from './components/about'
import NotFound from './components/notFound'
import NavBar from './components/navBar';



function App() {
  return (
    <Router className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>

  );
}

export default App;
