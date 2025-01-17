import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { motion } from 'framer-motion'; // Import framer-motion for animation
import vegetableProducts from './vegetablesProducts'; // Import the product data
import { useCart } from '../../Pages/Cart/CartContext';
import { toast, ToastContainer } from 'react-toastify'; // Import toast and container
import 'react-toastify/dist/ReactToastify.css'; // Import toast styles

const Vegetables = () => {
  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    addToCart(product);
    try {
      toast.success(`${product.name} added to cart!`, {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 2000, // 2 seconds
      });
    } catch (error) {
      console.error('Error showing toast:', error);
      toast.success(`${product.name} added to cart!`, {
        autoClose: 2000, // 2 seconds
      });
    }
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <ToastContainer /> {/* Add ToastContainer to render the toast */}
     

      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
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
        {vegetableProducts.map((product) => (
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
    </div>
  );
};

export default Vegetables;
