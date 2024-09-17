import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your form submission logic here
    toast.success('Message sent successfully!', {
      position: 'top-center',
      autoClose: 3000,
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-8">
      <ToastContainer />

      {/* Split layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 max-w-7xl mx-auto">
        {/* Contact Form (Left Side) */}
        <motion.div
          className="bg-white p-6 sm:p-8 shadow-md rounded-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center text-green-900">Contact Us</h2>
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 sm:py-3 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 sm:py-3 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 sm:py-3 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 sm:py-3 px-4 rounded-md hover:bg-green-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </motion.div>

        {/* Location and Map (Right Side) */}
        <div className="bg-white shadow-md p-6 sm:p-8 rounded-lg">
          <h3 className="text-2xl font-semibold text-center text-green-900 mb-4 sm:mb-6">Our Location</h3>
          <p className="text-base sm:text-lg text-gray-700">
            <strong>Address:</strong> X4RM+WFV, near PD Office, opposite Nayara Petrol Bunk,
            Kalapudhur, Katpadi, Vellore, Tamil Nadu 632007
          </p>
          <p className="text-base sm:text-lg text-gray-700">
            <strong>Phone Number:</strong> 9788335029
          </p>
          <p className="text-base sm:text-lg text-gray-700">
            <strong>Email Address:</strong>{' '}
            <a href="mailto:trade2cart@gmail.com" className="text-green-600 underline">
              trade2cart@gmail.com
            </a>
          </p>

          {/* Google Map Embed */}
          <div className="mt-6 sm:mt-8">
            <iframe
              title="Trade2Cart Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.6472031018045!2d79.13761481430253!3d12.969462518874205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad38d1b2d6055d%3A0xfbd51f1b1b6529af!2sNayara%20Energy!5e0!3m2!1sen!2sin!4v1694783193830!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
