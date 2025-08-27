import React, { useState } from 'react';
import { FiMapPin, FiPhone, FiMail, FiSend, FiMessageSquare } from 'react-icons/fi';

export default function ContactUs() {
    const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-amber-900 mb-6">
            Contact Attarex
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            We'd love to hear from you! Reach out to us with any questions, feedback, or special requests.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-10">
            <div>
              <h2 className="text-2xl font-serif font-bold text-amber-900 mb-6">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-amber-100 p-3 rounded-full mr-4">
                    <FiMapPin className="text-amber-700 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Pakistan Address</h3>
                    <p className="text-gray-700">A219 block 3 KDA Market Gulshan e Iqbal Near Flourish Salon Karachi</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-amber-100 p-3 rounded-full mr-4">
                    <FiMapPin className="text-amber-700 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">UAE Address</h3>
                    <p className="text-gray-700">248,0,LOOTAH BLDG 0 Diera DXB</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-amber-100 p-3 rounded-full mr-4">
                    <FiPhone className="text-amber-700 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">WhatsApp Us</h3>
                    <p className="text-gray-700">+92 3012546333</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-amber-100 p-3 rounded-full mr-4">
                    <FiMail className="text-amber-700 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Customer Support</h3>
                    <p className="text-gray-700">helloelyscents@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div>
              <h3 className="text-xl font-serif font-bold text-amber-900 mb-4">Business Hours</h3>
              <div className="bg-white rounded-lg p-5 shadow-sm">
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-700">Monday - Friday</span>
                  <span className="font-medium text-amber-700">9:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-700">Saturday</span>
                  <span className="font-medium text-amber-700">10:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-gray-700">Sunday</span>
                  <span className="font-medium text-amber-700">11:00 AM - 5:00 PM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-serif font-bold text-amber-900 mb-6 flex items-center">
              <FiMessageSquare className="mr-2" />
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                  placeholder="Type your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-amber-700 text-white py-3 px-6 rounded-lg font-medium hover:bg-amber-800 transition-colors flex items-center justify-center"
              >
                Send Message
                <FiSend className="ml-2" />
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-20 bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl font-serif font-bold text-amber-900 mb-6 text-center">
            Find Us
          </h2>
          <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
            <p className="text-gray-600">Map would be embedded here</p>
          </div>
        </div>
      </div>
    </div>
  );
};
