import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaLinkedin, FaInstagram } from 'react-icons/fa';
import imran from '../../assets/adversite/imran.jpg';
import imranpdf from '../../assets/pdf/imranpdf.pdf';

const OwnerPage = () => {
  const ownerDetails = {
    name: 'Imran S',
    role: 'Founder & Python Developer',
    bio: `As a dedicated IT student and AI & Python Developer, I’ve founded Trade2Cart to provide cutting-edge trade and e-commerce solutions with a focus on waste management products. Leveraging my expertise in Python and Artificial Intelligence, along with a strong foundation in the MERN stack, my goal is to create intelligent systems that drive sustainable business practices. Through AI-driven insights and automation, Trade2Cart aims to connect businesses with eco-friendly solutions, enhancing both operational efficiency and environmental impact.`,
    email: 'imran023786@gmail.com',
    linkedin: 'https://www.linkedin.com/in/imrans23/',
    instagram: 'https://www.instagram.com/imma46726/',
    resume: 'imranpdf.pdf' // Ensure this path is correct
  };

  const handleResumeDownload = () => {
    window.open(imranpdf, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-50 to-gray-100 p-8 md:p-16">
      <motion.div
        className="container mx-auto bg-white rounded-2xl shadow-lg p-8 lg:p-16 flex flex-col lg:flex-row items-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Owner Image */}
        <motion.img
          src={imran}
          alt={ownerDetails.name}
          className="w-48 h-48 lg:w-64 lg:h-64 rounded-full shadow-md mb-8 lg:mb-0 lg:mr-12"
          whileHover={{ scale: 1.1, rotate: 5 }}
        />

        {/* Owner Information */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:w-3/5">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-2">
            {ownerDetails.name}
          </h1>
          <h2 className="text-xl text-green-600 mb-4">
            {ownerDetails.role}
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            {ownerDetails.bio}
          </p>
          <p className="text-gray-600 mb-6">
            <strong>Email:</strong>{' '}
            <a
              href={`mailto:${ownerDetails.email}`}
              className="text-green-500 hover:underline"
            >
              {ownerDetails.email}
            </a>
          </p>

          {/* Social Links */}
          <div className="flex gap-4 mt-4">
            <a
              href={ownerDetails.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:text-green-800 text-3xl transition duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href={ownerDetails.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:text-green-800 text-3xl transition duration-300"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>

          {/* Resume Download Button */}
          <div className="mt-8">
            <motion.button
              onClick={handleResumeDownload}
              className="bg-gradient-to-r from-green-500 to-green-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition duration-300 flex items-center justify-center"
              whileTap={{ scale: 0.95 }}
            >
              <FaDownload className="mr-3" />
              Download Resume
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Business Section */}
      <div className="mt-16 text-center lg:text-left">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-semibold text-green-700 mb-4">
            Transforming Waste with Trade2Cart
          </h3>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Trade2Cart is dedicated to revolutionizing waste management with an innovative trading platform. We help businesses efficiently trade materials such as paper, plastic, and metals, reducing waste and promoting eco-friendly solutions. Join us on this journey toward a sustainable future, where waste becomes an opportunity for growth.
          </p>
          <p className="text-gray-600">
            For inquiries or collaborations, feel free to reach out via email or social media.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default OwnerPage;
