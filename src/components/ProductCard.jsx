// src/components/ProductCard.js
import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import LaunchingSoonOverlay from './LaunchingSoonOverlay';
const ProductCard = ({ product, onAddToCart }) => {
  // Generate placeholder image based on category
  const getImageClass = () => {
    const colors = {
      men: ['bg-blue-100', 'border-blue-200'],
      women: ['bg-pink-100', 'border-pink-200']
    };
    
    return colors[product.category];
  };
  
  const [bgColor, borderColor] = getImageClass();

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 relative">
      {/* Image container with relative positioning for the overlay */}
      <div className={`relative h-48 ${bgColor} border-b ${borderColor} flex items-center justify-center`}>
        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-32 h-32" />
        
        {/* Launching Soon Overlay */}
        <LaunchingSoonOverlay />
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
            <p className="text-amber-700 font-medium">${product.price.toFixed(2)}</p>
          </div>
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
            product.category === 'men' 
              ? 'bg-blue-100 text-blue-800' 
              : 'bg-pink-100 text-pink-800'
          }`}>
            {product.category === 'men' ? 'Men' : 'Women'}
          </span>
        </div>
        
        <p className="text-gray-600 text-sm mb-4">{product.description}</p>
        
        <button 
          onClick={() => onAddToCart(product)}
          className="w-full py-2 bg-gray-400 text-white rounded-lg flex items-center justify-center transition-colors duration-300 cursor-not-allowed"
          disabled
        >
          <FiShoppingCart className="mr-2" />
          Coming Soon
        </button>
      </div>
    </div>
  );
};


export default ProductCard;