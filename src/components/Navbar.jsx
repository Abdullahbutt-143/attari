import React, { useState } from "react";
import { FiShoppingCart, FiMenu, FiX, FiHome, FiInfo, FiPhone } from "react-icons/fi";

const Navbar = ({ activeCategory, setActiveCategory, cartItems, currentPage, onPageChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCollectionsOpen, setIsCollectionsOpen] = useState(false);
  
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
    onPageChange('home'); // Switch to home page when a category is selected
    setIsMenuOpen(false);
    setIsCollectionsOpen(false);
  };

  const handlePageClick = (page) => {
    onPageChange(page);
    setIsMenuOpen(false);
    setIsCollectionsOpen(false);
  };

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-6">
            {/* Left Side Navigation - Desktop */}
            <div className="hidden md:flex items-center space-x-8">
              <button 
                className={`flex items-center transition-colors font-medium text-lg ${
                  currentPage === 'home' 
                    ? "text-amber-700" 
                    : "text-gray-800 hover:text-amber-700"
                }`}
                onClick={() => handlePageClick('home')}
              >
                <FiHome className="mr-2" />
                Home
              </button>
              
              <div className="relative group">
                <button className="flex items-center text-gray-800 hover:text-amber-700 transition-colors font-medium text-lg">
                  Collections
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                <div className="absolute left-0 mt-3 w-48 bg-white rounded-lg shadow-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 border border-gray-100">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      className={`block w-full text-left px-4 py-3 text-sm font-medium ${
                        activeCategory === category.id
                          ? "bg-amber-100 text-amber-700"
                          : "text-gray-700 hover:bg-gray-50"
                      } transition-colors`}
                      onClick={() => handleCategoryClick(category.id)}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Center Logo */}
            <div 
              className="flex items-center absolute left-1/2 transform -translate-x-1/2 cursor-pointer"
              onClick={() => handlePageClick('home')}
            >
              <img
                src="/attarex.png"
                alt="Attarex Logo"
                className="w-14 h-14 md:w-18 md:h-18 object-contain rounded-xl"
              />
              <h1 className="ml-3 text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
                Attarex
              </h1>
            </div>

            {/* Right Side Navigation - Desktop */}
            <div className="hidden md:flex items-center space-x-8">
              <button 
                className={`flex items-center transition-colors font-medium text-lg ${
                  currentPage === 'about' 
                    ? "text-amber-700" 
                    : "text-gray-800 hover:text-amber-700"
                }`}
                onClick={() => handlePageClick('about')}
              >
                <FiInfo className="mr-2" />
                About Us
              </button>
              
              <button className="flex items-center text-gray-800 hover:text-amber-700 transition-colors font-medium text-lg">
                <FiPhone className="mr-2" />
                Contact Us
              </button>
              
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

            {/* Mobile Menu Button and Cart */}
            <div className="flex items-center space-x-5 md:hidden">
              <div className="relative">
                <button className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100">
                  <FiShoppingCart className="text-xl text-gray-700" />
                  {cartItems.length > 0 && (
                    <span className="absolute -top-1 -right-1 bg-amber-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-semibold">
                      {cartItems.length}
                    </span>
                  )}
                </button>
              </div>
              
              <button
                className="text-gray-700 focus:outline-none p-2 rounded-full hover:bg-gray-100 transition-colors"
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
              isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="py-5 space-y-4 border-t border-gray-200">
              <button 
                className={`flex items-center w-full text-left px-4 py-3 rounded-lg transition-all font-medium ${
                  currentPage === 'home' 
                    ? "text-amber-700 bg-amber-50" 
                    : "text-gray-800 hover:text-amber-700 hover:bg-amber-50"
                }`}
                onClick={() => handlePageClick('home')}
              >
                <FiHome className="mr-3 text-lg" />
                Home
              </button>
              
              <div>
                <button 
                  className="flex items-center w-full text-left px-4 py-3 rounded-lg text-gray-800 hover:text-amber-700 hover:bg-amber-50 transition-all font-medium"
                  onClick={() => setIsCollectionsOpen(!isCollectionsOpen)}
                >
                  Collections
                  <svg className={`ml-2 w-4 h-4 transition-transform ${isCollectionsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                <div className={`pl-6 mt-1 space-y-2 overflow-hidden transition-all ${isCollectionsOpen ? 'max-h-40' : 'max-h-0'}`}>
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      className={`block w-full text-left px-4 py-3 rounded-lg transition-all duration-300 font-medium ${
                        activeCategory === category.id
                          ? "bg-amber-700 text-white"
                          : "text-gray-700 hover:text-amber-700 hover:bg-amber-50"
                      }`}
                      onClick={() => handleCategoryClick(category.id)}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
              
              <button 
                className={`flex items-center w-full text-left px-4 py-3 rounded-lg transition-all font-medium ${
                  currentPage === 'about' 
                    ? "text-amber-700 bg-amber-50" 
                    : "text-gray-800 hover:text-amber-700 hover:bg-amber-50"
                }`}
                onClick={() => handlePageClick('about')}
              >
                <FiInfo className="mr-3 text-lg" />
                About Us
              </button>
              
              <button className="flex items-center w-full text-left px-4 py-3 rounded-lg text-gray-800 hover:text-amber-700 hover:bg-amber-50 transition-all font-medium">
                <FiPhone className="mr-3 text-lg" />
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;