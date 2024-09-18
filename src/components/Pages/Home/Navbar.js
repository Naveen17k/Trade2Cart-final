// src/components/Pages/Home/Navbar.js
import React, { useState } from 'react';
import { useCart } from '../Cart/CartContext'; // Adjust the import path as needed
import { FaShoppingCart, FaServicestack, FaListAlt, FaInfoCircle, FaStore } from 'react-icons/fa'; // Import icons
import { FiMenu, FiX } from 'react-icons/fi'; // Menu and close icons for mobile
import { Link } from 'react-router-dom'; // Import Link for routing

const Navbar = () => {
  const { cart } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-white p-4 shadow-md transition-all duration-300 ease-in-out">
    <div className="container mx-auto flex justify-between items-center">
      {/* Logo and Brand */}
      <div className="flex items-center">
        <img src='/Trade2Cart.png' alt="Trade2Cart" className="w-10 h-10 animate-pulse" />
        <span className="text-green-400 text-2xl font-bold ml-3">
          Trade<span className='text-yellow-200 text-xl'>2</span>Cart
        </span>
      </div>
  
      {/* Links for desktop */}
      <ul className="hidden md:flex font-serif space-x-8 text-black items-center">
        <li className="hover:text-green-300 cursor-pointer flex items-center transition duration-300 ease-in-out transform hover:scale-110">
          <FaServicestack className="mr-2" />
          <Link to="/services">Services</Link>
        </li>
        <li className="hover:text-green-300 cursor-pointer flex items-center transition duration-300 ease-in-out transform hover:scale-110">
          <FaStore className="mr-2" />
          <Link to="/location">TradeWaste</Link>
        </li>
        <li className="hover:text-green-300 cursor-pointer flex items-center transition duration-300 ease-in-out transform hover:scale-110">
          <FaListAlt className="mr-2" />
          <Link to="/category">Category</Link>
        </li>
        <li className="hover:text-green-300 cursor-pointer flex items-center transition duration-300 ease-in-out transform hover:scale-110">
          <FaInfoCircle className="mr-2" />
          <Link to="/about">About us</Link>
        </li>
      </ul>
  
      {/* Cart Icon and Menu Toggle */}
      <div className="flex items-center space-x-4">
        {/* Cart Icon with Link */}
        <Link to="/cart" className="relative flex items-center text-black w-6 h-6 cursor-pointer hover:text-green-300 transition duration-300 ease-in-out transform hover:scale-110">
          <FaShoppingCart size={24} />
          {cart.length > 0 && (
            <span className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full px-2 py-1">{cart.length}</span>
          )}
        </Link>
        
        {/* Menu Icon for mobile */}
        <div className="md:hidden z-10" onClick={toggleMenu}>
          {menuOpen ? (
            <FiX className="text-black w-6 h-6 transition transform duration-300 rotate-180" />
          ) : (
            <FiMenu className="text-black w-6 h-6 transition transform duration-300 rotate-0" />
          )}
        </div>
      </div>
    </div>
  
    {/* Mobile Menu */}
    <div
      className={`md:hidden fixed top-0 left-0 w-full z-10 bg-gray-50 shadow-md transition-all duration-500 ease-in-out transform ${menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
    >
      <ul className={`flex flex-col space-y-2 py-4 transition-opacity duration-500 ease-in-out ${menuOpen ? 'opacity-100' : 'opacity-0'}`}>
        <li className="text-black text-center py-2 hover:bg-green-100 cursor-pointer">
          <Link to="/services" onClick={() => setMenuOpen(false)}>
            <FaServicestack className="mx-auto mb-1" />
            Services
          </Link>
        </li>
        <li className="text-black text-center py-2 hover:bg-green-100 cursor-pointer">
          <Link to="/location" onClick={() => setMenuOpen(false)}>
            <FaStore className="mx-auto mb-1" />
            TradeWaste
          </Link>
        </li>
        <li className="text-black text-center py-2 hover:bg-green-100 cursor-pointer">
          <Link to="/category" onClick={() => setMenuOpen(false)}>
            <FaListAlt className="mx-auto mb-1" />
            Category
          </Link>
        </li>
        <li className="text-black text-center py-2 hover:bg-green-100 cursor-pointer">
          <Link to="/about" onClick={() => setMenuOpen(false)}>
            <FaInfoCircle className="mx-auto mb-1" />
            About Us
          </Link>
        </li>
      </ul>
    </div>
  </nav>
  
  
  );
};

export default Navbar;
