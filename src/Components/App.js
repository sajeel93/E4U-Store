import React from 'react'
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import Navbar from './Pages/Header/Navbar';
import Footer from './Pages/Footer/Footer';
import Cart from "./Pages/Cart";


function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
    <Footer />
   
    </>
  );
}

export default App;
