import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ProductGrid from './components/ProductGrid';
import WhatsAppButton from './components/WhatsAppButton';
import PromotionBanner from './components/PromotionBanner';
function App() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [cartItems, setCartItems] = useState([]);
  const whatsappConfig = {
    phoneNumber: '+923012727058',
    message: 'Hello, I have a question about Attarex products'
  };
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <PromotionBanner />
      <Navbar 
        activeCategory={activeCategory} 
        setActiveCategory={setActiveCategory}
        cartItems={cartItems}
      />
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-4">
            Attarex Fragrances
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            At Attarex, we believe fragrance is the language of elegance. Our perfumes are born from the finest extracts imported from France and Saudi Arabia, where the art of perfumery is celebrated at its highest form.
Each bottle is crafted to deliver long-lasting, captivating scents that become a part of your identity. From bold and confident notes to soft and graceful tones, our fragrances are made to match every mood, moment, and personality.
We are more than just a perfume brand — we are a promise of luxury, quality, and unforgettable experiences.
✨ Attarex — wear your story, one scent at a time.
          </p>
        </div>  
        <ProductGrid 
          activeCategory={activeCategory} 
          setCartItems={setCartItems}
        />
      </div>
      
      <WhatsAppButton config={whatsappConfig} />
      
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">© 2023 Attarex Fragrances. All rights reserved.</p>
          <p className="text-gray-500 text-sm mt-2">Premium fragrances for the discerning individual</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
