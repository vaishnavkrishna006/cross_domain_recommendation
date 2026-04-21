import React from 'react';
import '../styles/Features.css';

const Features = () => {
  const features = [
    {
      id: 1,
      title: 'Real-time Price Comparison',
      description: 'Compare prices across 50+ platforms instantly',
      icon: '💹'
    },
    {
      id: 2,
      title: 'Smart Recommendations',
      description: 'AI-powered suggestions based on your preferences',
      icon: '🤖'
    },
    {
      id: 3,
      title: 'Cross-Domain Intelligence',
      description: 'Recommendations influenced by your behavior across categories',
      icon: '🧠'
    },
    {
      id: 4,
      title: 'One-Click Comparison',
      description: 'View side-by-side comparison of products and prices',
      icon: '⚖️'
    },
    {
      id: 5,
      title: 'Save & Track',
      description: 'Save items and get price drop notifications',
      icon: '💾'
    },
    {
      id: 6,
      title: 'User Reviews',
      description: 'Aggregated reviews from multiple platforms',
      icon: '⭐'
    }
  ];

  return (
    <section className="features" id="features">
      <div className="features-container">
        <div className="section-header">
          <h2>Why Choose RecommendHub?</h2>
          <p>Discover the features that make us your best shopping companion</p>
        </div>

        <div className="features-grid">
          {features.map(feature => (
            <div key={feature.id} className="feature-item">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
