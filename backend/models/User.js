// User Model
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    preferences: {
      categories: [String],
      priceRange: {
        min: Number,
        max: Number,
      },
    },
    searchHistory: [
      {
        query: String,
        category: String,
        timestamp: { type: Date, default: Date.now },
      },
    ],
    savedItems: [
      {
        productId: String,
        category: String,
        platform: String,
        savedAt: { type: Date, default: Date.now },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);
