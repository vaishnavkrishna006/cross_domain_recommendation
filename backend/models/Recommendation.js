// Recommendation Model
const mongoose = require('mongoose');

const recommendationSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
      required: true,
    },
    category: String,
    score: Number, // Recommendation score
    reason: String, // Why this recommendation was made
    crossDomainInfluence: [
      {
        fromCategory: String,
        influence: Number,
      },
    ],
    userInteraction: {
      viewed: Boolean,
      clicked: Boolean,
      purchased: Boolean,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Recommendation', recommendationSchema);
