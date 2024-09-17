import React from 'react';
import { motion } from 'framer-motion';
import AboutImage from '../../../assets/adversite/home1.png'; // Replace with the correct image path

const About = () => {
  return (
    <div>
      {/* Introductory Section */}
      <section className="py-20 bg-white">
        <motion.div
          className="container mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
              {/* Heading Animation */}
          <motion.h2
            className="text-4xl font-bold mb-8 text-black-800 "
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
          >
            About Trade2Cart
          </motion.h2>
          {/* Image Animation */}
          <motion.img
            src={AboutImage}
            alt="About Trade2Cart"
            className="max-w-full h-auto mb-10 mx-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          />

        

          {/* Paragraph Animations */}
          <motion.p
            className="text-lg text-green-700 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: 'easeOut' }}
          >
            Trade2Cart is your go-to platform for seamless product purchasing and exchanging. Whether you're looking to buy the latest gadgets, fashion, or everyday essentials, we provide a user-friendly interface that makes shopping simple, secure, and fast.
          </motion.p>

          <motion.p
            className="text-lg text-green-700 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease: 'easeOut' }}
          >
            At Trade2Cart, we believe in giving our customers the best experience by offering a wide variety of products at competitive prices. Our platform not only allows you to buy products easily, but you can also exchange items, ensuring you get value for your money every time.
          </motion.p>

          {/* Key Features Section */}
          <motion.div
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <div className="p-6 bg-green-100 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-green-800 mb-4">Wide Range of Products</h3>
              <p className="text-green-700">
                Discover a vast selection of products, including electronics, fashion, home goods, and more.
              </p>
            </div>

            <div className="p-6 bg-green-100 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-green-800 mb-4">Secure Transactions</h3>
              <p className="text-green-700">
                We prioritize your security with encrypted payments and multiple payment options for a hassle-free shopping experience.
              </p>
            </div>

            <div className="p-6 bg-green-100 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-green-800 mb-4">Easy Exchanges</h3>
              <p className="text-green-700">
                Our platform allows easy exchanges, so you can trade items effortlessly if you find something better or more suitable.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default About;
