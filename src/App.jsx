// src/App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductGrid from "./components/ProductGrid";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import TermsAndConditions from "./components/TermsAndConditions"; // NEW
import WhatsAppButton from "./components/WhatsAppButton";

function App() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [cartItems, setCartItems] = useState([]);

  const whatsappConfig = {
    phoneNumber: "+923012727058",
    message: "Hello, I have a question about Attarex products",
  };

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <Navbar
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          cartItems={cartItems}
        />

        <Routes>
          <Route
            path="/"
            element={
              <div className="container mx-auto px-4 py-8">
                <div className="text-center mb-12">
                  <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-4">
                    Attarex Fragrances
                  </h1>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    At Attarex, we believe fragrance is the language of elegance...
                  </p>
                </div>

                <ProductGrid
                  activeCategory={activeCategory}
                  setCartItems={setCartItems}
                />
              </div>
            }
          />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
          {/* NEW Terms route */}
          <Route path="/terms" element={<TermsAndConditions />} />
        </Routes>

        <WhatsAppButton config={whatsappConfig} />

        <footer className="bg-gray-900 text-white py-8">
          <div className="container mx-auto px-4 text-center">
            <p className="text-gray-400">© 2023 Attarex Fragrances. All rights reserved.</p>
            <p className="text-gray-500 text-sm mt-2">
              Premium fragrances for the discerning individual
            </p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
