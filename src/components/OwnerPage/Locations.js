import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Importing images
import vellore from '../../assets/adversite/chennai.jpeg';
import chennai from '../../assets/adversite/vellore.jpeg';
import  Ranipet from '../../assets/adversite/ranipet.jpeg';
import thiruvanamalai from '../../assets/adversite/thiruvanamalai.jpeg';

const locations = [
  { name: 'Vellore', image: vellore },
  { name: 'Chennai', image: chennai },
  { name: 'Ranipet', image: Ranipet },
  { name: 'Thiruvanamalai', image: thiruvanamalai}
  // Add more locations if necessary
];

const Locations = () => {
  return (
    <div className="p-6 md:p-12 bg-gray-100 min-h-screen">
      <motion.div
        className="container mx-auto px-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 md:mb-12 text-green-800">
          Choose Your Location
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {locations.map((location) => (
            <motion.div
              key={location.name}
              className="bg-gray-50 rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2"
              whileHover={{ scale: 1.03 }}
            >
              <div className="relative">
                <motion.img
                  src={location.image}
                  alt={location.name}
                  className="w-full h-48 md:h-52 lg:h-60 object-cover rounded-t-xl"
                  whileHover={{ scale: 1.05 }} // Image scaling on hover
                  transition={{ duration: 0.4 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70 rounded-t-xl" />
              </div>
              <div className="p-4 md:p-6 text-center">
                <h3 className="text-xl md:text-2xl font-semibold text-green-700 mb-3 md:mb-4">
                  {location.name}
                </h3>
                <Link
                  to={`/trade-waste/${location.name.toLowerCase()}`}
                  className="bg-green-500 text-white px-4 py-2 md:px-6 md:py-3 rounded-full hover:bg-green-600 transition duration-200 inline-block"
                >
                  Explore Products
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Locations;
