import React, { useState } from 'react';
import { FiAward, FiHeart, FiGlobe, FiUsers } from 'react-icons/fi';

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
            Where luxury meets essence, and every scent tells a story of elegance and sophistication.
          </p>
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl font-serif font-bold text-amber-900 mb-6">Our Story</h2>
            <p className="text-gray-700 mb-4">
              Founded with a passion for exceptional fragrances, Attarex began as a dream to bring the world's finest scents to those who appreciate the art of perfumery. Our journey started in the vibrant markets of Karachi, where we discovered the transformative power of a truly remarkable fragrance.
            </p>
            <p className="text-gray-700 mb-4">
              Today, we've grown into a beloved brand with international presence, but our commitment remains unchanged: to source the highest quality ingredients from France and Saudi Arabia, and craft them into perfumes that become an extension of your identity.
            </p>
            <p className="text-gray-700">
              Each Attarex fragrance is a carefully composed symphony of notes designed to evoke emotion, create memories, and express the unique personality of the wearer.
            </p>
          </div>
          <div className="bg-amber-100 rounded-2xl p-8 flex items-center justify-center">
            <div className="text-center">
              <img
                src="/attarex.png"
                alt="Attarex Logo"
                className="w-32 h-32 object-contain rounded-xl mx-auto mb-6"
              />
              <p className="text-amber-700 italic">"Wear your story, one scent at a time."</p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-serif font-bold text-amber-900 mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiAward className="text-amber-700 text-2xl" />
              </div>
              <h3 className="font-serif font-bold text-amber-900 mb-2">Quality</h3>
              <p className="text-gray-700">We never compromise on the quality of our ingredients or craftsmanship.</p>
            </div>

            <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiHeart className="text-amber-700 text-2xl" />
              </div>
              <h3 className="font-serif font-bold text-amber-900 mb-2">Passion</h3>
              <p className="text-gray-700">Perfumery is our art, and we pour our hearts into every creation.</p>
            </div>

            <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiGlobe className="text-amber-700 text-2xl" />
              </div>
              <h3 className="font-serif font-bold text-amber-900 mb-2">Heritage</h3>
              <p className="text-gray-700">We honor centuries-old perfumery traditions while innovating for today.</p>
            </div>

            <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiUsers className="text-amber-700 text-2xl" />
              </div>
              <h3 className="font-serif font-bold text-amber-900 mb-2">Community</h3>
              <p className="text-gray-700">We build relationships with our customers that go beyond transactions.</p>
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="bg-amber-100 rounded-2xl p-8 md:p-12 mb-20">
          <h2 className="text-3xl font-serif font-bold text-amber-900 mb-8 text-center">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-amber-700 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
              <h3 className="font-serif font-bold text-amber-900 mb-2">Sourcing</h3>
              <p className="text-gray-700">We carefully select the finest raw materials from trusted suppliers in France and Saudi Arabia.</p>
            </div>

            <div className="text-center">
              <div className="bg-amber-700 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
              <h3 className="font-serif font-bold text-amber-900 mb-2">Crafting</h3>
              <p className="text-gray-700">Our master perfumers blend these ingredients with precision and artistry.</p>
            </div>

            <div className="text-center">
              <div className="bg-amber-700 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
              <h3 className="font-serif font-bold text-amber-900 mb-2">Aging</h3>
              <p className="text-gray-700">Each fragrance is aged to perfection, allowing the notes to harmonize beautifully.</p>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="text-center bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h2 className="text-3xl font-serif font-bold text-amber-900 mb-6">Our Mission</h2>
          <p className="text-gray-700 text-lg italic max-w-3xl mx-auto">
            "To create luxurious, long-lasting fragrances that become a signature part of our customers' identity, 
            helping them express their unique personality and make lasting impressions through the art of scent."
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;