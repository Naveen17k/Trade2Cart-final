import React, { useState } from 'react';
import { FaStar, FaShoppingCart, FaTh, FaStore, FaAppleAlt, FaBeer, FaCartPlus } from 'react-icons/fa';
import { useCart } from '../Cart/CartContext'; // Adjust the path based on the actual location
import { motion } from 'framer-motion'; // Importing framer-motion

const allProducts = [
  { id: 1, name: "Bangle1", price: "₹99", URL: "https://wallpaperaccess.com/full/685283.jpg", category: "Fancy" },
  { id: 2, name: 'Grocery', price: '₹149', URL: "https://th.bing.com/th/id/OIP.kKdPK_-Q40JpG69jnXu7MwHaHa?rs=1&pid=ImgDetMain", category: 'Grocery' },
  { id: 3, name: 'Kairunbee', price: '₹199', URL: "https://5.imimg.com/data5/SELLER/Default/2020/11/HU/VB/EY/6028591/blue-havells-ceiling-fan.jpg", category: 'Kairunbee Store' },
  { id: 4, name: 'Trade', price: '₹89', URL: "https://th.bing.com/th/id/OIP.FbcWv0KaBUXsgIEBeNr_5wHaEK?rs=1&pid=ImgDetMain", category: 'Trade' },
  { id: 5, name: 'KGN', price: '₹120', URL: "https://i5.walmartimages.com/asr/47fbd94a-fe5c-4bc2-a737-88c75f856a06.46ff725a7842c36756df156b057c6d46.jpeg", category: 'KGN' },
  { id: 6, name: 'Service', price: '₹130', URL: "https://5.imimg.com/data5/SELLER/Default/2021/3/VN/DW/HW/47610632/stage-flower-decoration-services-1000x1000.jpg", category: 'Services' },
];

const categories = [
  { name: 'All', icon: <FaStar /> },
  { name: 'Fancy', icon: <FaShoppingCart /> },
  { name: 'Grocery', icon: <FaAppleAlt /> },
  { name: 'Kairunbee Store', icon: <FaStore /> },
  { name: 'Services', icon: <FaBeer /> },
  { name: 'KGN', icon: <FaTh /> },
  { name: 'Trade', icon: <FaAppleAlt /> },
];

const BestProducts = () => {
  const { addToCart } = useCart();
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
              <span className="mr-3 text-2xl">{category.icon}</span>
              {category.name}
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
              <img
                src={product.URL}
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
                    onClick={() => addToCart(product)}
                    className="text-green-600 text-xl"
                    whileHover={{ scale: 1.3, rotate: 360 }}
                  >
                    <FaCartPlus />
                  </motion.button>
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
