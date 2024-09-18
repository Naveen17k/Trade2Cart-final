import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { motion } from 'framer-motion'; // Import framer-motion for animations
import services from './Servicesproducts'; // Import the services data

const Services = () => {
  return (
    <div className="p-4 md:p-8 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-extrabold text-center mb-10 text-green-900">Our Services</h1>

      {/* Services Grid with animations */}
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
        {services.map((service) => (
          <motion.div
            key={service.id}
            className="bg-white border border-green-300 rounded-lg overflow-hidden shadow-md transition-transform duration-300 ease-in-out transform relative"
            whileHover={{ scale: 1.05 }} // Hover animation
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
                whileTap={{ scale: 0.95 }} // Tap animation
              >
                <FaShoppingCart className="mr-2" />
                <a
                  href={`https://wa.me/+919788335029?text=Hi, I would like to book the ${service.name} service.`}
                  target="_blank" // Opens in a new tab
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
