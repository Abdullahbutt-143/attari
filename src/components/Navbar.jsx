import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiShoppingCart,
  FiMenu,
  FiX,
  FiHome,
  FiInfo,
  FiPhone,
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

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-6">
          {/* Left Side */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="flex items-center font-medium text-lg text-gray-800 hover:text-amber-700">
              <FiHome className="mr-2" /> Home
            </Link>

            <div className="relative group">
              <button className="flex items-center text-gray-800 hover:text-amber-700 font-medium text-lg">
                Collections
              </button>
              <div className="absolute left-0 mt-3 w-48 bg-white rounded-lg shadow-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 border border-gray-100">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    className={`block w-full text-left px-4 py-3 text-sm font-medium ${
                      activeCategory === category.id
                        ? "bg-amber-100 text-amber-700"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                    onClick={() => setActiveCategory(category.id)}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Center Logo */}
          <Link to="/" className="flex items-center absolute left-1/2 transform -translate-x-1/2 cursor-pointer">
            <img src="/attarex.png" alt="Attarex Logo" className="w-14 h-14 object-contain rounded-xl" />
            <h1 className="ml-3 text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">Attarex</h1>
          </Link>

          {/* Right Side */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/aboutus" className="flex items-center text-gray-800 hover:text-amber-700 font-medium text-lg">
              <FiInfo className="mr-2" /> About Us
            </Link>

            <Link to="/contactus" className="flex items-center text-gray-800 hover:text-amber-700 font-medium text-lg">
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

          {/* Mobile Menu */}
          <button onClick={toggleMenu} className="md:hidden text-2xl">
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
