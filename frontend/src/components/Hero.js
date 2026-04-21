import React, { useState } from 'react';
import '../styles/Hero.css';

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const categories = [
    { id: 1, name: 'Groceries', icon: '🛒' },
    { id: 2, name: 'Food Delivery', icon: '🍕' },
    { id: 3, name: 'E-commerce', icon: '📦' },
    { id: 4, name: 'Bus Tickets', icon: '🚌' },
    { id: 5, name: 'Flight Bookings', icon: '✈️' },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery, 'in category:', selectedCategory);
  };

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Find the Best Deals
            <br />
            <span className="highlight">Across All Platforms</span>
          </h1>
          <p className="hero-subtitle">
            Compare prices, find recommendations, and save time and money with our intelligent cross-domain platform.
          </p>

          <form onSubmit={handleSearch} className="search-form">
            <div className="search-container">
              <select 
                className="category-select"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="">Select Category</option>
                {categories.map(cat => (
                  <option key={cat.id} value={cat.name}>{cat.name}</option>
                ))}
              </select>
              <input 
                type="text"
                placeholder="Search for anything..."
                className="search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit" className="search-btn">
                <span>🔍</span>
              </button>
            </div>
          </form>

          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">500K+</span>
              <span className="stat-label">Products Compared</span>
            </div>
            <div className="stat">
              <span className="stat-number">50+</span>
              <span className="stat-label">Platforms</span>
            </div>
            <div className="stat">
              <span className="stat-number">1M+</span>
              <span className="stat-label">Smart Users</span>
            </div>
          </div>
        </div>

        <div className="hero-image">
          <div className="illustration">
            <div className="floating-card card-1">
              <span>💰</span>
              <p>Save Up to 40%</p>
            </div>
            <div className="floating-card card-2">
              <span>⚡</span>
              <p>Compare in Seconds</p>
            </div>
            <div className="floating-card card-3">
              <span>✨</span>
              <p>Smart Recommendations</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
