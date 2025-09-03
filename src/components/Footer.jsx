import React from 'react'
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-gray-400">© 2023 Attarex Fragrances. All rights reserved.</p>
          <p className="text-gray-500 text-sm mt-2">
            Premium fragrances for the discerning individual
          </p>
          <div className="mt-4 space-x-4">
            <Link 
              to="/terms" 
              className="text-gray-400 hover:text-white text-sm"
            >
              Terms and Conditions
            </Link>
            <Link 
              to="/return-policy" 
              className="text-gray-400 hover:text-white text-sm"
            >
              Return Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};