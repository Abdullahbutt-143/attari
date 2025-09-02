import React from 'react';
import ProductCard from './ProductCard';

const ProductGrid = ({ activeCategory, setCartItems }) => {
  const products = [
    {
      id: 1,
      name: 'Gentleman',
      description: 'A captivating blend of oud, spices, and amber',
      price: 2500,
      category: 'men',
      image: 'men1.jpeg'
    },
    {
      id: 2,
      name: 'Charm',
      description: 'Exotic floral notes with a hint of spice',
      price: 2800,
      category: 'women',
      image: 'women.jpeg'
    },
    {
      id: 3,
      name: 'Brave',
      description: 'Fresh aquatic notes with citrus and sea salt',
      price: 2200,
      category: 'men',
      image: 'men2.jpeg'
    },
    {
      id: 4,
      name: 'Grace',
      description: 'Luxurious blend of orchid, vanilla, and tonka bean',
      price: 2200,
      category: 'women',
      image: 'grace_women.jpeg'
    },
    {
      id: 5,
      name: 'Noble',
      description: 'Rich amber with hints of vanilla and sandalwood',
      price: 2300,
      category: 'men',
      image: 'noble_men.jpeg'
    },
    {
      id: 6,
      name: 'Golden Gardenia',
      description: 'Floral bouquet with gardenia and jasmine',
      price: 78.99,
      category: 'women',
      image: 'women3'
    },
    {
      id: 7,
      name: 'Tobacco Vanille',
      description: 'Warm tobacco leaf with vanilla and cocoa',
      price: 87.99,
      category: 'men',
      image: 'men4'
    },
    {
      id: 8,
      name: 'Sakura Blossom',
      description: 'Delicate cherry blossom with green tea notes',
      price: 76.99,
      category: 'women',
      image: 'women4'
    }
  ];

  // Filter products based on active category
  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  const handleAddToCart = (product) => {
    setCartItems(prevItems => [...prevItems, product]);
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {filteredProducts.map((product) => (
          <ProductCard 
            key={product.id} 
            product={product} 
            onAddToCart={handleAddToCart} 
          />
        ))}
      </div>
      
      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-xl">No products found in this category.</p>
        </div>
      )}
    </div>
  );
};

export default ProductGrid;