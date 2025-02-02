import { FaHeart, FaClock, FaLeaf } from 'react-icons/fa';
import { useState } from 'react';
const acaiBowl = new URL('../assets/acai-bowl.png', import.meta.url).href;
const smoothie = new URL('../assets/smoothie.png', import.meta.url).href;
const HomePage = () => {
  const [cartItems, setCartItems] = useState([]);
  
  // Temporary data - replace with API calls
  const featuredItems = [
    {
      id: 1,
      name: 'Classic Açaí Bowl',
      price: 9.99,
      description: 'Organic açaí topped with granola and seasonal fruits',
      image: acaiBowl
    },
    {
      id: 2,
      name: 'Tropical Smoothie',
      price: 7.99,
      description: 'Mango, pineapple, and coconut milk blend',
      image: smoothie
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-b from-purple-500 to-violet-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-20 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Craft Your Perfect Bowl
          </h1>
          <p className="text-xl mb-8">
            Fresh ingredients, endless combinations
          </p>
          <div className="flex justify-center">
            <button className="bg-white text-purple-500 px-6 py-2 rounded-full hover:bg-gray-100 transition-colors shadow-md">
              Start Your Order
            </button>
        </div>
        </div>
        
      </section>

      {/* Featured Items */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          Most Popular Creations
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredItems.map((item) => (
            <div 
              key={item.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img 
                src={item.image} 
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-purple-700">
                    ${item.price}
                  </span>
                  <button 
                    onClick={() => {/* Add to cart logic */}}
                    className="bg-purple-700 text-white px-4 py-2 rounded-full
                      hover:bg-berry-darkred transition-colors"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <FaLeaf className="text-4xl text-purple-700 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">100% Organic</h3>
            <p className="text-gray-600">Locally sourced ingredients</p>
          </div>
          <div className="text-center p-6">
            <FaClock className="text-4xl text-purple-700 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Order Online</h3>
            <p className="text-gray-600">Skip the Line</p>
          </div>
          <div className="text-center p-6">
            <FaHeart className="text-4xl text-purple-700 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Customizable</h3>
            <p className="text-gray-600">Build your perfect combination</p>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default HomePage;