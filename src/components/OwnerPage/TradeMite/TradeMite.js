import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { motion } from 'framer-motion';
import trademiteproducts from './TradeMiteproducts';
import { useCart } from '../../Pages/Cart/CartContext';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TradeMite = () => {
  const [selectedCategory, setSelectedCategory] = useState('papers');
  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success(`${product.name} has been added to your cart!`, {
      position: window.innerWidth > 768 ? 'top-right' : 'top-right',
      autoClose: 2000,
      className: 'text-sm md:text-base',
      bodyClassName: 'text-gray-800',
      closeButton: false,
    });
  };

  const categories = [
    { name: 'papers', icon: '📄' },
    { name: 'plastic', icon: '🧪' },
    { name: 'iron', icon: '🔩' },
    { name: 'battery', icon: '🔋' },
    { name: 'metals', icon: '⚙️' },
    { name: 'unusedproducts', icon: '🆕' },
  ];

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const products = trademiteproducts[selectedCategory] || [];

  return (
    <div className="p-4 md:p-8 bg-gray-100 min-h-screen">
      <ToastContainer />
      <motion.div
        className="container mx-auto px-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
  

        <div className="flex flex-wrap justify-center mb-8 gap-6">
          {categories.map((category) => (
            <motion.button
              key={category.name}
              className={`flex flex-col items-center justify-center w-24 h-24 sm:w-28 sm:h-28 rounded-full transition duration-300 ease-in-out shadow-lg text-xl ${
                selectedCategory === category.name
                  ? 'bg-green-600 text-white'
                  : 'bg-white text-green-800 border border-green-300'
              } hover:bg-green-500 hover:text-white`}
              onClick={() => handleCategoryChange(category.name)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label={`Select ${category.name} category`}
            >
              <span className="text-2xl sm:text-3xl">{category.icon}</span>
              <span className="mt-2 text-xs sm:text-sm">{category.name}</span>
            </motion.button>
          ))}
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {products.length > 0 ? (
            products.map((product) => (
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
                  <h3 className="text-lg font-semibold text-green-800 mb-2">
                    {product.name}
                  </h3>
                  
                  <h3 className="text-lg font-semibold text-green-800 mb-2">
                    {product.unit}
                  </h3>
                  <div className="flex items-center justify-between">
                    <p className="bg-green-100 text-green-600 p-2 rounded inline-block">
                      {product.price}
                    </p>
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      className="bg-green-600 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-lg hover:bg-green-500 transition duration-200 flex items-center"
                      onClick={() => handleAddToCart(product)}
                      aria-label={`Add ${product.name} to cart`}
                    >
                      <FaShoppingCart className="mr-1 sm:mr-2" />
                      Add to Cart
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <p className="text-center col-span-full text-gray-600">
              No products available.
            </p>
          )}
        </motion.div>

        <div className="text-center mt-12">
          <p className="text-gray-700 mb-4">
            Interested in collaborating or adding more products?
          </p>
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

export default TradeMite;