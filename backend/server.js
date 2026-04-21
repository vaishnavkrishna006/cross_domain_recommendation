require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/recommendhub';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running', timestamp: new Date() });
});

app.get('/api/categories', (req, res) => {
  const categories = [
    { id: 1, name: 'Groceries', icon: '🛒' },
    { id: 2, name: 'Food Delivery', icon: '🍕' },
    { id: 3, name: 'E-commerce', icon: '📦' },
    { id: 4, name: 'Bus Tickets', icon: '🚌' },
    { id: 5, name: 'Flight Bookings', icon: '✈️' },
  ];
  res.json(categories);
});

app.post('/api/search', (req, res) => {
  const { query, category } = req.body;
  
  if (!query || !category) {
    return res.status(400).json({ error: 'Query and category are required' });
  }

  // Placeholder response - will integrate with recommendation engine
  res.json({
    query,
    category,
    results: [],
    message: 'Search endpoint - integration pending'
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server error' });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
