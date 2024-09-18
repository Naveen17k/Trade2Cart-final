import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import Furnitureproducts from './Furnitureproducts'; 
import { motion } from 'framer-motion'; 
import { useCart } from '../../Pages/Cart/CartContext';
import { toast, ToastContainer } from 'react-toastify'; // Import react-toastify
import 'react-toastify/dist/ReactToastify.css'; // Import toastify styles

const Furniture = () => {
  const [selectedCategory, setSelectedCategory] = useState('accessories');

  // Handle category change
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success(`${product.name} has been added to your cart!`, {
      position: toast.BOTTOM_left,
      autoClose: 2000,
    });
  };

  // Get the products for the selected category
  const products = Furnitureproducts[selectedCategory] || [];

  return (
    <div className="p-4 md:p-8 bg-gray-100 min-h-screen">
      {/* Toast container for notifications */}
      <ToastContainer />
      
      <motion.div 
        className="container mx-auto px-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-extrabold text-center mb-10 text-green-900">
          Furniture Products
        </h2>

        {/* Category Selector */}
        <div className="flex flex-wrap justify-center mb-8 gap-4">
          {[
            { category: 'accessories', label: 'Accessories', icon: '🧰' }, 
            { category: 'swingChairs', label: 'Swing Chairs', icon: '🪑' }, 
            { category: 'normalChairs', label: 'Normal Chairs', icon: '💺' }
          ].map(({ category, label, icon }) => (
            <motion.button
              key={category}
              className={`px-6 py-3 rounded-lg text-lg font-medium transition duration-300 ease-in-out ${
                selectedCategory === category
                  ? 'bg-green-600 text-white shadow-md'
                  : 'bg-white text-green-800 border border-green-300'
              } shadow-md hover:bg-green-500 hover:text-white`}
              onClick={() => handleCategoryChange(category)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Use Emoji as an icon */}
              <span className="mr-2">{icon}</span>
              {label}
            </motion.button>
          ))}
        </div>

        {/* Product Grid */}
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              className="bg-white border border-green-300 rounded-lg overflow-hidden shadow-md transition-transform transform relative"
              whileHover={{ scale: 1.05 }}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 sm:h-64 md:h-72 lg:h-60 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-green-800 mb-2">{product.name}</h3>
                <div className="flex items-center justify-between">
                  <p className="bg-green-100 text-green-600 p-2 rounded inline-block">
                    {product.price}
                  </p>
                  <motion.button
                      whileTap={{ scale: 0.95 }}
                      className="bg-green-600 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-lg hover:bg-green-500 transition duration-200 flex items-center"
                      onClick={() => handleAddToCart(product)} // Pass product to handler
                      aria-label={`Add ${product.name} to cart`}
                    >
                      <FaShoppingCart className="mr-1 sm:mr-2" />
                      Add to Cart
                    </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Collaboration Section */}
        <div className="text-center mt-12">
          <p className="text-gray-700 mb-4">Interested in collaborating or adding more products?</p>
          <a
            href="mailto:trade2cart@gmail.com"
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition duration-300"
          >
            Contact Us
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Furniture;
