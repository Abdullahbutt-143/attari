import React, { useState } from 'react';
import { FiMapPin, FiPhone, FiMail, FiSend, FiInstagram, FiFacebook, FiTwitter } from 'react-icons/fi';

const AboutUs = () => {
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
            About Attarex
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            At Attarex, we believe fragrance is the language of elegance. Our perfumes are born from the finest extracts imported from France and Saudi Arabia, where the art of perfumery is celebrated at its highest form.
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
                    <p className="text-gray-700">+92 3012727058</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-amber-100 p-3 rounded-full mr-4">
                    <FiMail className="text-amber-700 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Customer Support</h3>
                    <p className="text-gray-700">ejazrehman00@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-xl font-serif font-bold text-amber-900 mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="bg-amber-100 p-3 rounded-full text-amber-700 hover:bg-amber-200 transition-colors">
                  <FiInstagram className="text-xl" />
                </a>
                <a href="#" className="bg-amber-100 p-3 rounded-full text-amber-700 hover:bg-amber-200 transition-colors">
                  <FiFacebook className="text-xl" />
                </a>
                <a href="#" className="bg-amber-100 p-3 rounded-full text-amber-700 hover:bg-amber-200 transition-colors">
                  <FiTwitter className="text-xl" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-serif font-bold text-amber-900 mb-6">Send Us a Message</h2>
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

        {/* Brand Story */}
        <div className="mt-20 bg-amber-100 rounded-2xl p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-amber-900 mb-6 text-center">
            Our Story
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-700 mb-4">
                Each bottle is crafted to deliver long-lasting, captivating scents that become a part of your identity. From bold and confident notes to soft and graceful tones, our fragrances are made to match every mood, moment, and personality.
              </p>
              <p className="text-gray-700">
                We are more than just a perfume brand — we are a promise of luxury, quality, and unforgettable experiences.
              </p>
            </div>
            <div>
              <p className="text-gray-700 mb-4">
                ✨ Attarex — wear your story, one scent at a time. Our journey began with a passion for creating scents that evoke emotions and memories, connecting people through the power of fragrance.
              </p>
              <p className="text-gray-700">
                Today, we continue to innovate while staying true to our commitment to excellence, sourcing the finest ingredients from around the world to create exceptional fragrances for our discerning customers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;