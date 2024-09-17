import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/Pages/Home/LandingPage';
import Services from './components/OwnerPage/Services/Services';
import Category from './components/OwnerPage/Category/Category';
import Cart from './components/Pages/Cart/Cart';
import Navbar from './components/Pages/Home/Navbar';
import Footer from './components/Pages/Home/Footer';
import NotFound from './components/rought/PagesNot';
import { CartProvider } from './components/Pages/Cart/CartContext';
import SplashScreen from './components/rought/SplashScreen'; // Import your splash screen component
import Furniture from './components/OwnerPage/Products/Furniture';
import Electronics from './components/OwnerPage/Products/Electronics';
import Fancystore from './components/OwnerPage/Products/Fancystore';
import Vegetables from './components/OwnerPage/Products/Vegetables';
import Grocery from './components/OwnerPage/Products/Grocery';
import TradeMite from './components/OwnerPage/TradeMite/TradeMite';
import About from './components/Pages/Home/About';
import ContactUs from './components/Pages/Home/contactus';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  // Use useEffect to hide the splash screen after a delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000); // Show the splash screen for 3 seconds
    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  if (showSplash) {
    return <SplashScreen />; // Show the splash screen while showSplash is true
  }

  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/category" element={<Category />} />
          <Route path="/trademite" element={<TradeMite />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/cart" element={<Cart />} />
          <Route path='/furniture' element={<Furniture/>}/>
          <Route path='/electronics' element={<Electronics/>}/>
          <Route path='/fancy-store' element={<Fancystore/>}/>
          <Route path='/vegetables-foods' element={<Vegetables/>}/>
          <Route path='/grocery' element={<Grocery/>}/>
          <Route path="*" element={<NotFound />} /> {/* 404 Route */}
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
