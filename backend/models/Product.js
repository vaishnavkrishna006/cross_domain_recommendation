// Product Model
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
      enum: ['Groceries', 'Food Delivery', 'E-commerce', 'Bus Tickets', 'Flight Bookings'],
    },
    description: String,
    price: {
      type: Number,
      required: true,
    },
    originalPrice: Number,
    platforms: [
      {
        name: String,
        price: Number,
        url: String,
        availability: Boolean,
      },
    ],
    rating: {
      type: Number,
      min: 0,
      max: 5,
    },
    reviews: Number,
    image: String,
    specifications: mongoose.Schema.Types.Mixed,
  },
  { timestamps: true }
);

module.exports = mongoose.model('Product', productSchema);
