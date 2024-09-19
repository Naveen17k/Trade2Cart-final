import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaPinterestP } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-green-400 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0">
          {/* About Us Section */}
          <div className="flex-1 md:w-1/3">
            <h3 className="text-2xl font-semibold mb-3">Trade2Cart</h3>
            <p className="text-gray-900">Trade2Cart is your go-to online shopping platform for a wide range of products. We offer top-quality items at competitive prices, ensuring a seamless shopping experience from start to finish.</p>
          </div>
          
          {/* Customer Service Section */}
          <div className="flex-1 md:w-1/3">
            <h4 className="text-xl font-semibold mb-3">Customer Service</h4>
            <ul className="space-y-2">
              <li><Link to="/contact" className="text-gray-600 hover:text-gray-900">Contact Us</Link></li>
              <li><Link to="/location" className="text-gray-600 hover:text-gray-900">Returns & Exchanges</Link></li>
              <li><Link to="/faq" className="text-gray-600 hover:text-gray-900">FAQ</Link></li>
            </ul>
          </div>
          
          {/* Social Media Links */}
          <div className="flex-1 md:w-1/3">
            <h4 className="text-xl font-semibold mb-3">Follow Us</h4>
            <div className="flex flex-wrap justify-start md:justify-start space-x-4 space-y-2 md:space-y-0">
              <a
                href="https://www.facebook.com/people/Trade2cart/61562303492931/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-600 hover:text-gray-900"
              >
                <FaFacebookF size={24} className="mr-2" />
                <span className="hidden md:inline">Facebook</span>
              </a>
              <a
                href="https://www.instagram.com/trade2cart/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-600 hover:text-gray-900"
              >
                <FaInstagram size={24} className="mr-2" />
                <span className="hidden md:inline">Instagram</span>
              </a>
              <a
                href="https://x.com/CartTrade47522"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-600 hover:text-gray-900"
              >
                <FaTwitter size={24} className="mr-2" />
                <span className="hidden md:inline">Twitter</span>
              </a>
              <a
                href="https://in.pinterest.com/trade2cart/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-600 hover:text-gray-900"
              >
                <FaPinterestP size={24} className="mr-2" />
                <span className="hidden md:inline">Pinterest</span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Back to Top Link */}
        <div className="mt-6 text-center">
          <Link
            to="/"
            className="text-white font-semibold hover:text-gray-300"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
