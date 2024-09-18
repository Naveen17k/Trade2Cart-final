import React, { useState } from 'react';
import { FaStar, FaTh, FaBeer } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const allProducts = [
  { id: 5, name: 'KGN', price: '₹120', URL: "https://i5.walmartimages.com/asr/47fbd94a-fe5c-4bc2-a737-88c75f856a06.46ff725a7842c36756df156b057c6d46.jpeg", category: 'KGN', link: '/furniture' },
  { id: 6, name: 'Service', price: '₹130', URL: "https://5.imimg.com/data5/SELLER/Default/2021/3/VN/DW/HW/47610632/stage-flower-decoration-services-1000x1000.jpg", category: 'Services', link: '/services' },
];

const categories = [
  { name: 'All', icon: <FaStar />  },
  { name: 'Services', link: '/services', icon: <FaBeer /> },
  { name: 'KGN', link: '/furniture', icon: <FaTh /> }, // Corrected link here
];

const BestProducts = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showAll, setShowAll] = useState(false);

  const filteredProducts = selectedCategory === 'All'
    ? allProducts
    : allProducts.filter(product => product.category === selectedCategory);

  const productsToShow = showAll ? filteredProducts : filteredProducts.slice(0, 6);

  return (
    <section className="py-12 bg-gray-100">
      <motion.div 
        className="container mx-auto px-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-extrabold text-center mb-10 text-green-900">
          Best Products
        </h2>

        {/* Category buttons with animation */}
        <div className="flex justify-center flex-wrap mb-8 gap-4">
          {categories.map(category => (
            <motion.button
              key={category.name}
              onClick={() => setSelectedCategory(category.name)}
              className={`flex items-center px-6 py-3 rounded-lg text-lg font-medium transition duration-300 ease-in-out ${
                selectedCategory === category.name
                  ? 'bg-green-600 text-white'
                  : 'bg-white text-green-800 border border-green-300'
              } shadow-md hover:bg-green-500 hover:text-white`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {category.icon}
              <span className="ml-2">{category.name}</span>
            </motion.button>
          ))}
        </div>

        {/* Product grid with animations */}
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
          {productsToShow.map(product => (
            <motion.div 
              key={product.id} 
              className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform relative"
              whileHover={{ scale: 1.05 }}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <Link to={product.link}>
                <img
                  src={product.URL}
                  alt={product.name}
                  className="w-full h-48 sm:h-64 md:h-72 lg:h-60 object-cover cursor-pointer"
                />
              </Link>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-green-800 mb-2">{product.name}</h3>
                <div className="flex items-center justify-between">
                  <p className="bg-green-100 text-green-600 p-2 rounded inline-block">
                    {product.price}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View all button with animation */}
        <div className="text-center mt-8">
          <motion.button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-3 bg-green-600 text-white text-lg font-medium rounded-lg hover:bg-green-700 transition duration-300"
            whileHover={{ scale: 1.1 }}
          >
            {showAll ? 'Show Less' : 'View All'}
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export default BestProducts;
