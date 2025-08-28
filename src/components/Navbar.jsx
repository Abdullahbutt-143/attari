import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiShoppingCart,
  FiMenu,
  FiX,
  FiHome,
  FiInfo,
  FiPhone,
  FiChevronDown,
  FiChevronUp
} from "react-icons/fi";

const Navbar = ({ activeCategory, setActiveCategory, cartItems }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCollectionsOpen, setIsCollectionsOpen] = useState(false);

  const categories = [
    { id: "all", name: "All Fragrances" },
    { id: "men", name: "For Men" },
    { id: "women", name: "For Women" },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleCollections = () => setIsCollectionsOpen(!isCollectionsOpen);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4 md:py-6">
          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-700 p-2 rounded-lg hover:bg-amber-50 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
          </button>

          {/* Center Logo */}
          <Link
            to="/"
            className="flex items-center absolute left-1/2 transform -translate-x-1/2 cursor-pointer"
          >
            <img
              src="/attarex.png"
              alt="Attarex Logo"
              className="w-12 h-12 md:w-14 md:h-14 object-contain rounded-xl"
            />
            <h1 className="ml-2 md:ml-3 text-xl md:text-3xl font-bold text-gray-900 tracking-tight">
              Attarex
            </h1>
          </Link>

          {/* Desktop Navigation - Right Side */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/aboutus"
              className="flex items-center text-gray-800 hover:text-amber-700 font-medium text-lg transition-colors"
            >
              <FiInfo className="mr-2" /> About Us
            </Link>

            <Link
              to="/contactus"
              className="flex items-center text-gray-800 hover:text-amber-700 font-medium text-lg transition-colors"
            >
              <FiPhone className="mr-2" /> Contact Us
            </Link>

            <div className="relative">
              <button className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-amber-100 transition-colors">
                <FiShoppingCart className="text-xl text-gray-700" />
                {cartItems.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-amber-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-semibold">
                    {cartItems.length}
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Mobile cart icon */}
          <div className="md:hidden relative">
            <button className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100">
              <FiShoppingCart className="text-xl text-gray-700" />
              {cartItems.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-amber-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-semibold">
                  {cartItems.length}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 space-y-2 border-t border-gray-200">
            {/* Home Link */}
            <Link
              to="/"
              className="flex items-center px-4 py-3 rounded-lg text-gray-800 hover:text-amber-700 hover:bg-amber-50 transition-all font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              <FiHome className="mr-3 text-lg" />
              Home
            </Link>

            {/* Collections with Dropdown */}
            <div>
              <button
                className="flex items-center justify-between w-full px-4 py-3 rounded-lg text-gray-800 hover:text-amber-700 hover:bg-amber-50 transition-all font-medium"
                onClick={toggleCollections}
              >
                <span className="flex items-center">
                  Collections
                </span>
                {isCollectionsOpen ? <FiChevronUp /> : <FiChevronDown />}
              </button>

              <div
                className={`pl-6 mt-1 space-y-1 overflow-hidden transition-all ${
                  isCollectionsOpen ? "max-h-40" : "max-h-0"
                }`}
              >
                {categories.map((category) => (
                  <button
                    key={category.id}
                    className={`block w-full text-left px-4 py-3 rounded-lg transition-all duration-300 font-medium ${
                      activeCategory === category.id
                        ? "bg-amber-700 text-white"
                        : "text-gray-700 hover:text-amber-700 hover:bg-amber-50"
                    }`}
                    onClick={() => {
                      setActiveCategory(category.id);
                      setIsMenuOpen(false);
                    }}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>

            {/* About Us Link */}
            <Link
              to="/aboutus"
              className="flex items-center px-4 py-3 rounded-lg text-gray-800 hover:text-amber-700 hover:bg-amber-50 transition-all font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              <FiInfo className="mr-3 text-lg" />
              About Us
            </Link>

            {/* Contact Us Link */}
            <Link
              to="/contactus"
              className="flex items-center px-4 py-3 rounded-lg text-gray-800 hover:text-amber-700 hover:bg-amber-50 transition-all font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              <FiPhone className="mr-3 text-lg" />
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;