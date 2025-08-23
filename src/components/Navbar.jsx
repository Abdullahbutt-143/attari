import React, { useState } from "react";
import { FiShoppingCart, FiMenu, FiX } from "react-icons/fi";

const Navbar = ({ activeCategory, setActiveCategory, cartItems }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const categories = [
    { id: "all", name: "All Fragrances" },
    { id: "men", name: "For Men" },
    { id: "women", name: "For Women" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCategoryClick = (categoryId) => {
    setActiveCategory(categoryId);
    setIsMenuOpen(false); // Close menu after selection on mobile
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo and brand name */}
          <div className="flex items-center">
            <img
              src="/attarex.png"
              alt="Attarex Logo"
              className="w-12 h-12 md:w-16 md:h-16 object-contain rounded-xl"
            />
            <h1 className="ml-2 md:ml-4 text-xl md:text-2xl font-serif font-bold text-gray-800">
              Attarex
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4 lg:space-x-6">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`px-3 py-1 lg:px-4 lg:py-2 rounded-full transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-amber-700 text-white font-medium"
                    : "text-gray-600 hover:text-gray-900 hover:bg-amber-100"
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Cart and Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <FiShoppingCart className="text-xl md:text-2xl text-gray-700" />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-amber-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </div>
            
            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-700 focus:outline-none"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMenuOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 space-y-3 border-t border-gray-200">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`block w-full text-left px-4 py-2 rounded-lg transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-amber-700 text-white font-medium"
                    : "text-gray-600 hover:text-gray-900 hover:bg-amber-100"
                }`}
                onClick={() => handleCategoryClick(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;