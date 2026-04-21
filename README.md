# Cross-Domain Recommendation System

A web-based intelligent recommendation and comparison platform that allows users to search for products and services across multiple categories.

## 🌟 Features

- **Multi-Category Search**: Search across Groceries, Food Delivery, E-commerce, Bus Tickets, and Flight Bookings
- **Price Comparison**: Compare prices across 50+ platforms
- **Smart Recommendations**: AI-powered suggestions based on user preferences
- **Cross-Domain Intelligence**: Recommendations influenced by user behavior across categories
- **Real-time Updates**: Live price comparisons and product availability
- **User Profiles**: Track preferences and search history
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## 🏗️ Project Architecture

```
cross_domain_recommendation_system/
├── frontend/                 # React-based user interface
│   ├── src/
│   ├── public/
│   └── package.json
├── backend/                  # Node.js/Express API server
│   ├── models/              # MongoDB schemas
│   ├── routes/              # API endpoints
│   ├── server.js
│   └── package.json
├── recommendation_engine/   # Python recommendation logic
│   ├── engine.py
│   └── requirements.txt
└── README.md
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v14+)
- Python (3.8+)
- MongoDB (local or Atlas)
- Git

### Installation

1. **Clone the repository**
```bash
cd c:\Users\vaish\Music\cross domain recommadtion system
```

2. **Setup Frontend**
```bash
cd frontend
npm install
npm start
```
Frontend will run on `http://localhost:3000`

3. **Setup Backend**
```bash
cd ../backend
npm install
npm run dev
```
Backend will run on `http://localhost:5000`

4. **Setup Recommendation Engine**
```bash
cd ../recommendation_engine
python -m venv venv
# On Windows: venv\Scripts\activate
# On macOS/Linux: source venv/bin/activate
pip install -r requirements.txt
```

5. **Setup MongoDB**
   - Create a local MongoDB instance or use MongoDB Atlas
   - Update `.env` file in backend with MongoDB URI

## 📁 Directory Structure

### Frontend (`/frontend`)
React-based SPA with components for:
- Navigation bar
- Hero section with search
- Category showcase
- Features showcase
- Responsive footer

### Backend (`/backend`)
Express.js server with:
- REST API endpoints
- MongoDB integration
- CORS support
- Environment configuration

### Recommendation Engine (`/recommendation_engine`)
Python module with:
- Recommendation algorithms
- User preference analysis
- Cross-domain influence calculation
- Search history analysis

## 🔌 API Endpoints

### Health Check
```bash
GET /api/health
```

### Categories
```bash
GET /api/categories
```

### Search
```bash
POST /api/search
Content-Type: application/json

{
  "query": "search term",
  "category": "Groceries"
}
```

## 🎨 Frontend Features

- **Modern UI**: Clean and professional design inspired by StudyHub
- **Responsive Design**: Mobile-first approach
- **Interactive Components**: Smooth animations and transitions
- **Category Selection**: Easy category browsing
- **Search Functionality**: Intuitive search interface

## 🤖 Recommendation Engine

The Python-based recommendation engine provides:
- Personalized product recommendations
- Cross-domain influence analysis
- User preference learning
- Recommendation scoring algorithm

## 📊 Database Models

### User
```javascript
{
  name: String,
  email: String (unique),
  preferences: {
    categories: [String],
    priceRange: { min, max }
  },
  searchHistory: [...],
  savedItems: [...]
}
```

### Product
```javascript
{
  name: String,
  category: String,
  price: Number,
  platforms: [...],
  rating: Number,
  reviews: Number,
  image: String
}
```

### Recommendation
```javascript
{
  userId: ObjectId,
  productId: ObjectId,
  score: Number,
  reason: String,
  crossDomainInfluence: [...]
}
```

## 🛠️ Tech Stack

### Frontend
- React 18
- CSS3 (Flexbox, Grid)
- Responsive Design

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose ODM

### Recommendation Engine
- Python 3.8+
- NumPy
- Pandas
- Scikit-learn

## 📝 Configuration

### Frontend
Create `.env` file in `/frontend`:
```
REACT_APP_API_URL=http://localhost:5000
```

### Backend
Create `.env` file in `/backend`:
```
PORT=5000
MONGO_URI=mongodb://localhost:27017/recommendhub
FRONTEND_URL=http://localhost:3000
```

### Recommendation Engine
Environment variables are handled via backend configuration.

## 🚢 Deployment

### Using Docker Compose
```bash
docker-compose up
```

### Production Build
```bash
# Frontend
cd frontend
npm run build

# Backend is already production-ready
```

## 📚 Documentation

- [Frontend README](./frontend/README.md)
- [Backend README](./backend/README.md)
- [Recommendation Engine README](./recommendation_engine/README.md)

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Submit a pull request
4. Follow existing code style and conventions

## 📄 License

MIT License - feel free to use this project for personal or commercial purposes.

## 👤 Author

Vaishnav Krishna
- GitHub: [@vaishnavkrishna006](https://github.com/vaishnavkrishna006)

## 🎯 Roadmap

- [ ] User authentication and authorization
- [ ] Advanced recommendation algorithms
- [ ] Real-time data scraping for multiple platforms
- [ ] Mobile app development
- [ ] Admin dashboard
- [ ] Price tracking and notifications
- [ ] Social sharing features
- [ ] Wishlist functionality
- [ ] Review aggregation
- [ ] Payment integration

## 💡 Future Enhancements

- Machine learning models for better recommendations
- Real-time notifications for price drops
- Comparison charts and analytics
- Browser extension for in-site comparisons
- REST API documentation (Swagger)
- Unit and integration tests
- Performance optimization
- Caching layer (Redis)
- Load balancing

## 📞 Support

For issues, questions, or suggestions, please create an issue on GitHub.

## ⭐ Show your support

If you find this project helpful, please star the repository!