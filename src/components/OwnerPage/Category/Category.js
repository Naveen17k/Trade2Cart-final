// src/components/Pages/Category/Category.js
import React from 'react';
import { motion } from 'framer-motion';
import { FaCouch, FaLaptop, FaStore, FaCarrot, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const categories = [
  { name: 'Furniture', color: 'bg-green-400', shadow: 'shadow-lg', icon: <FaCouch size={36} />, link: '/furniture' },
  { name: 'Electronics', color: 'bg-blue-400', shadow: 'shadow-xl', icon: <FaLaptop size={36} />, link: '/electronics' },
  { name: 'Fancy Store', color: 'bg-purple-400', shadow: 'shadow-2xl', icon: <FaStore size={36} />, link: '/fancy-store' },
  { name: 'Vegetables and Foods', color: 'bg-orange-400', shadow: 'shadow-lg', icon: <FaCarrot size={36} />, link: '/vegetables-foods' },
  { name: 'Grocery', color: 'bg-red-400', shadow: 'shadow-md', icon: <FaShoppingCart size={36} />, link: '/grocery' }
];

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.1, staggerChildren: 0.1 } }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 }
};

const Category = () => {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20 mb-60 p-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {categories.map((category, index) => (
        <motion.div
          key={index}
          className={`flex flex-col items-center justify-center h-52 text-white font-bold ${category.color} ${category.shadow} rounded-lg p-6 transition-transform duration-300 ease-in-out transform hover:scale-105 relative`}
          variants={itemVariants}
        >
          <motion.div
            className="mb-3"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.2, rotate: 15 }}
            transition={{ duration: 0.3 }}
          >
            {category.icon}
          </motion.div>
          <span className="text-xl">{category.name}</span>
          <Link
            to={category.link}
            className="absolute bottom-4 px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-100 transition duration-200"
          >
            Explore
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Category;
