// src/components/Navbar.js
import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';

const Navbar = ({ activeCategory, setActiveCategory, cartItems }) => {
  const categories = [
    { id: 'all', name: 'All Fragrances' },
    { id: 'men', name: 'For Men' },
    { id: 'women', name: 'For Women' }
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
            <h1 className="ml-4 text-2xl font-serif font-bold text-gray-800">Attarex</h1>
          </div>
          
          <div className="flex space-x-6">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-amber-700 text-white font-medium'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-amber-100'
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          <div className="relative">
            <FiShoppingCart className="text-2xl text-gray-700" />
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-amber-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartItems.length}
              </span>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;