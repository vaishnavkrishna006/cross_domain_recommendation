# RecommendHub - Recommendation Engine

Python-based recommendation engine for cross-domain suggestions.

## Project Structure

```
recommendation_engine/
├── engine.py           # Main recommendation engine
├── requirements.txt    # Python dependencies
└── README.md          # This file
```

## Features

- **Cross-Domain Recommendations**: Generate suggestions influenced by user behavior across multiple categories
- **User Preference Analysis**: Analyze user preferences and behavior patterns
- **Recommendation Scoring**: Calculate recommendation scores based on user preferences
- **Search History Analysis**: Identify patterns and trends in user search behavior
- **Personalized Suggestions**: Generate personalized recommendations for each user

## Installation

### Prerequisites
- Python 3.8 or higher
- pip package manager

### Setup

1. Create a virtual environment:
```bash
python -m venv venv
```

2. Activate virtual environment:
```bash
# On Windows
venv\Scripts\activate

# On macOS/Linux
source venv/bin/activate
```

3. Install dependencies:
```bash
pip install -r requirements.txt
```

## Usage

### Basic Usage

```python
from engine import create_recommendation_engine

# Create engine instance
engine = create_recommendation_engine()

# Get recommendations for a user
recommendations = engine.get_user_recommendations(
    user_id='user_123',
    category='Groceries',
    limit=10
)

# Analyze search history
search_history = [
    {'category': 'Groceries', 'query': 'milk'},
    {'category': 'Food Delivery', 'query': 'pizza'},
    {'category': 'E-commerce', 'query': 'laptop'}
]
analysis = engine.analyze_search_history(search_history)
```

### Core Methods

#### `get_user_recommendations(user_id, category, limit=10)`
Returns personalized recommendations for a user in a specific category.

#### `cross_domain_influence(user_id, source_category)`
Calculates influence scores showing how user behavior in one category affects recommendations in others.

#### `calculate_recommendation_score(product, user_preferences)`
Calculates a recommendation score (0-1) for a product based on user preferences.

#### `analyze_search_history(search_history)`
Analyzes user search history to identify patterns and trends.

#### `generate_personalized_recommendations(user_id, user_data)`
Generates personalized recommendations across all categories.

## Algorithm Overview

### Recommendation Scoring
The engine calculates recommendation scores based on:
- **Price Range Matching** (0.2 points): Product price falls within user's preferred range
- **Rating Matching** (0.15 points): Product rating meets user's minimum requirements
- **Base Score** (0.5 points): Default scoring foundation

### Cross-Domain Influence
User behavior in one category (e.g., searching for groceries) can influence recommendations in other categories (e.g., food delivery suggestions).

### Personalization
The system creates personalized recommendations by:
1. Analyzing user search history
2. Identifying preferred categories and price ranges
3. Calculating cross-domain influences
4. Generating scores for candidate products
5. Ranking and returning top recommendations

## Integration with Backend

This module can be integrated with the Node.js backend via:
1. **Direct Integration**: Import and use in Node.js (via child process)
2. **API Service**: Run as a separate microservice
3. **REST Wrapper**: Expose recommendation functions as REST endpoints

## Future Enhancements

- Machine learning models (collaborative filtering, content-based filtering)
- Deep learning for complex pattern recognition
- Real-time recommendation updates
- A/B testing framework
- Recommendation explainability
- Performance optimization with caching

## Technologies Used

- **NumPy** - Numerical computing
- **Pandas** - Data manipulation and analysis
- **Scikit-learn** - Machine learning library
- **PyMongo** - MongoDB integration
- **Requests** - HTTP client

## Contributing

Follow PEP 8 coding standards and include docstrings for all functions.

## License

MIT License
