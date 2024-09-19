import React, { useState, useEffect } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { motion } from 'framer-motion';
import trademiteproducts from './TradeMiteproducts';
import { useCart } from '../../Pages/Cart/CartContext';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from 'react-router-dom';

const TradeMite = () => {
  const { location } = useParams();
  const [selectedCategory, setSelectedCategory] = useState('battery');
  const { addToCart } = useCart();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const newProducts = trademiteproducts[selectedCategory]?.[location.toLowerCase()] || [];
    setProducts(newProducts);
    if (newProducts.length === 0) {
      toast.info(`No products available in ${selectedCategory} category for ${location}.`);
    }
  }, [selectedCategory, location]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success(`${product.name} has been added to your cart!`, {
      position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: 2000,
    });
  };

  const categories = [
    { name: 'battery', label: 'Battery', icon: '🔋' },
    { name: 'iron', label: 'Iron', icon: '🔧' },
    { name: 'metals', label: 'Metals', icon: '🔩' },
    { name: 'paper', label: 'Paper', icon: '📄' },
    { name: 'plastic', label: 'Plastic', icon: '♻️' },
    { name: 'unusedproducts', label: 'Unused Products', icon: '📦' },
  ];

  return (
    <div className="p-4 md:p-8 bg-gray-100 min-h-screen">
      <ToastContainer />
      <motion.div
className="container mx-auto px-4"
initial={{ opacity: 0, y: 30 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6 }}
>

      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-green-800">
        Trade Waste Products in {location}
      </h1>

      {/* Category Selector */}
      <div className="flex flex-wrap justify-center mb-8 gap-4">
        {categories.map(({ name, label, icon }) => (
          <motion.button
            key={name}
            className={`px-6 py-3 rounded-lg text-lg font-medium transition duration-300 ease-in-out ${
              selectedCategory === name
                ? 'bg-green-600 text-white shadow-md'
                : 'bg-white text-green-800 border border-green-300'
            } shadow-md hover:bg-green-500 hover:text-white`}
            onClick={() => handleCategoryChange(name)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="mr-2">{icon}</span>
            {label}
          </motion.button>
        ))}
      </div>

      {/* Product Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        {products.map((product) => (
          <motion.div
            key={product.id}
            className="bg-white rounded-lg overflow-hidden shadow-md transition-transform transform hover:scale-105"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-green-800 mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-4">{product.price} per {product.unit}</p>
              <motion.button
                onClick={() => handleAddToCart(product)}
                className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition duration-300 flex items-center justify-center w-full"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaShoppingCart className="mr-2" />
                Add to Cart
              </motion.button>
            </div>
          </motion.div>
        ))}
      </motion.div>
      /</motion.div>
    </div>
  );
};

export default TradeMite;






