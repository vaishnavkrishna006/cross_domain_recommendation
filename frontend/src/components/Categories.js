import React from 'react';
import '../styles/Categories.css';

const Categories = () => {
  const categories = [
    {
      id: 1,
      name: 'Groceries',
      icon: '🛒',
      description: 'Compare prices from multiple online grocery stores',
      color: '#FF6B6B'
    },
    {
      id: 2,
      name: 'Food Delivery',
      icon: '🍕',
      description: 'Find the best food options from all platforms',
      color: '#4ECDC4'
    },
    {
      id: 3,
      name: 'E-commerce',
      icon: '📦',
      description: 'Shop across multiple marketplaces',
      color: '#FFE66D'
    },
    {
      id: 4,
      name: 'Bus Tickets',
      icon: '🚌',
      description: 'Compare bus routes and prices',
      color: '#95E1D3'
    },
    {
      id: 5,
      name: 'Flight Bookings',
      icon: '✈️',
      description: 'Find the best flight deals instantly',
      color: '#C7CEEA'
    },
  ];

  return (
    <section className="categories" id="categories">
      <div className="categories-container">
        <div className="section-header">
          <h2>Explore All Categories</h2>
          <p>Search across multiple domains and get the best recommendations</p>
        </div>

        <div className="categories-grid">
          {categories.map(category => (
            <div key={category.id} className="category-card">
              <div className="card-icon" style={{ backgroundColor: category.color }}>
                <span>{category.icon}</span>
              </div>
              <h3>{category.name}</h3>
              <p>{category.description}</p>
              <button className="btn-explore">Explore →</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
