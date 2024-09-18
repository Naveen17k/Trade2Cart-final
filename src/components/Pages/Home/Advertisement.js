import React from 'react';
import { motion } from 'framer-motion';
import { FaBullhorn} from 'react-icons/fa';
import ReactPlayer from 'react-player';  // Import ReactPlayer
import rightImage from '../../../assets/adversite/left.jpg';  // Import right image
import { Link } from 'react-router-dom';

const Advertisement = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 50 } },
  };

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4 text-center">
        {/* First Section */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-6"
        >
          <motion.div variants={item}>
         
            
            <FaBullhorn className="text-6xl text-green-600 mx-auto mb-4" />
            <motion.button
        whileHover={{ scale: 1.1, rotate: 2 }}
        whileTap={{ scale: 0.95 }}
        className="bg-green-600 text-white font-bold px-6 py-4 rounded-md shadow-md hover:bg-green-700 transition-transform duration-300"
      >
        Trade Waste!
      </motion.button>

          </motion.div>

        

          <motion.p variants={item} className="text-lg text-gray-600">
            Reach a wider audience with our premium advertising options. Contact us to get started!
          </motion.p>

          {/* Trade Waste Section with Button and Right Image */}
          <motion.div
            variants={item}
            className="flex justify-center items-center space-x-6 mt-8"
          >
            <motion.img
              src={rightImage}
              alt="Right Image"
              className="w-48 h-48 object-cover rounded-full shadow-lg" // Larger image
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1, rotate: [0, 10, -10, 0] }} // Adding a subtle rotation effect
              transition={{ type: 'spring', stiffness: 50, damping: 10 }}
              whileHover={{ scale: 1.1, rotate: [0, 5, -5, 0], transition: { yoyo: Infinity } }} // Continuous hover animation
            />
            <Link to="/owner">
  <motion.button
    whileHover={{ scale: 1.1, rotate: 2 }}
    whileTap={{ scale: 0.95 }}
    className="bg-green-600 text-white px-6 py-3 rounded-md shadow-md hover:bg-green-700 transition-transform duration-300"
  >
    Click me!
  </motion.button>
</Link>

            {/* Right Image with Larger Size and Animation */}
          </motion.div>
        </motion.div>
        
        {/* Second Section: Three Advertisement Boxes with Different Videos */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6"
        >
          {/* Promotion Video */}
          <motion.div
            variants={item}
            className="bg-white p-6 rounded-md shadow-md"
          >
            <h3 className="text-2xl font-bold text-green-600 mb-4">Promotion Video</h3>
            <ReactPlayer 
              url="https://www.youtube.com/watch?v=ysz5S6PUM-U"  // Replace with promotion video URL
              width="100%"
              height="200px"
              controls={true}
            />
          </motion.div>

          {/* Application Use Video */}
          <motion.div
            variants={item}
            className="bg-white p-6 rounded-md shadow-md"
          >
            <h3 className="text-2xl font-bold text-green-600 mb-4">Application Use Video</h3>
            <ReactPlayer 
              url="https://www.youtube.com/watch?v=GRWmm6AWAUQ"  // Replace with application use video URL
              width="100%"
              height="200px"
              controls={true}
            />
          </motion.div>

          {/* Feedback Video */}
          <motion.div
            variants={item}
            className="bg-white p-6 rounded-md shadow-md"
          >
            <h3 className="text-2xl font-bold text-green-600 mb-4">Feedback Video</h3>
            <ReactPlayer 
              url="https://www.youtube.com/shorts/CwBsJpK6Ee8"  // Replace with feedback video URL
              width="100%"
              height="200px"
              controls={true}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Advertisement;
