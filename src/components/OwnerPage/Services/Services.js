import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { motion } from 'framer-motion';
import services from './Servicesproducts'; // Import the services data
import { toast, ToastContainer } from 'react-toastify'; // Import toast and container
import 'react-toastify/dist/ReactToastify.css'; // Import toast styles

const categories = [
  { name: 'Cab Services', emoji: '🚖' },
  { name: 'AC Services', emoji: '❄️' },
  { name: 'E-Services', emoji: '💻' },
  { name: 'Decoration', emoji: '🎨' }
];

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState('Cab Services');

  // Function to filter services by category
  const filterServicesByCategory = (category) =>
    services.filter((service) => service.category === category);

  // Handle category change
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  // Handle booking service
  const handleBookService = (service) => {
    try {
      toast.success(`${service.name} booked!`, {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 2000,
      });
    } catch (error) {
      console.error('Error showing toast:', error);
      toast.success(`${service.name} booked!`, {
        autoClose: 2000,
      });
    }
  };

  return (
    <div className="p-4 md:p-8 bg-gray-100 min-h-screen">
      <ToastContainer />
      {/* Category Selector */}
      <div className="flex flex-wrap justify-center mb-8 gap-4">
        {categories.map(({ name, emoji }) => (
          <motion.button
            key={name}
            className={`px-6 py-3 rounded-lg text-lg font-medium transition duration-300 ease-in-out ${
              selectedCategory === name
                ? 'bg-green-600 text-white shadow-md'
                : 'bg-white text-green-800 border border-green-300'
            } shadow-md hover:bg-green-500 hover:text-white`}
            onClick={() => handleCategoryChange(name)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="mr-2">{emoji}</span>
            {name}
          </motion.button>
        ))}
      </div>

      {/* Services Grid for Selected Category */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8"
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
        {filterServicesByCategory(selectedCategory).map((service) => (
          <motion.div
            key={service.id}
            className="bg-white border border-green-300 rounded-lg overflow-hidden shadow-md transition-transform transform relative"
            whileHover={{ scale: 1.05 }}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <img
              src={service.image}
              alt={service.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2 text-green-600">{service.name}</h3>
              <p className="text-lg text-gray-700 mb-4">{service.price}</p>
              <motion.button
                className="bg-green-400 text-white px-4 py-2 rounded-lg hover:bg-green-500 transition duration-200 flex items-center focus:outline-none focus:ring-2 focus:ring-green-500"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleBookService(service)}
              >
                <FaShoppingCart className="mr-2" />
                <a
                  href={`https://wa.me/+918903646525?text=Hi, I would like to book the ${service.name} service.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white"
                >
                  Book Service
                </a>
              </motion.button>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Contact Us Section */}
      <div className="mt-16 text-center">
        <p className="text-gray-700 mb-4">Interested in collaborating or adding more services?</p>
        <motion.a
          href="mailto:trade2cart@gmail.com"
          className="bg-green-400 text-white px-6 py-2 rounded-lg hover:bg-green-500 transition duration-200"
          whileHover={{ scale: 1.1 }}
        >
          Contact Us
        </motion.a>
      </div>
    </div>
  );
};

export default Services;
