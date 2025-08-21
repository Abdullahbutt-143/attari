// src/components/WhatsAppButton.js
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = ({ config }) => {
  const openWhatsApp = () => {
    const url = `https://wa.me/${config.phoneNumber}?text=${encodeURIComponent(config.message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={openWhatsApp}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="text-2xl" />
        <span className="ml-2 font-medium">Chat with us</span>
      </button>
    </div>
  );
};

export default WhatsAppButton;