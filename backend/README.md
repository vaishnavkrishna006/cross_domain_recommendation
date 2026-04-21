# RecommendHub Backend

Node.js/Express backend for the cross-domain recommendation system.

## Project Structure

```
backend/
├── models/
│   ├── User.js              # User model with preferences and history
│   ├── Product.js           # Product model with multi-platform pricing
│   └── Recommendation.js    # AI recommendations model
├── routes/
│   ├── auth.js             # Authentication routes
│   ├── products.js         # Product search routes
│   ├── recommendations.js  # Recommendation engine routes
│   └── users.js            # User profile routes
├── controllers/            # Business logic (to be created)
├── middleware/             # Custom middleware (to be created)
├── .env.example           # Environment variables template
├── .gitignore            # Git ignore rules
├── server.js             # Main server file
└── package.json          # Dependencies
```

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- npm or yarn

## Installation

```bash
npm install
```

## Setup

1. Create a `.env` file based on `.env.example`:
```bash
cp .env.example .env
```

2. Update the `.env` file with your MongoDB URI and other configurations

## Running the Server

### Development Mode
```bash
npm run dev
```

### Production Mode
```bash
npm start
```

The server will run on `http://localhost:5000` by default.

## API Endpoints

### Health Check
- `GET /api/health` - Check if server is running

### Categories
- `GET /api/categories` - Get all available categories

### Search
- `POST /api/search` - Search for products/services
  - Request body: `{ query: string, category: string }`

## Database Models

### User
- Stores user information and preferences
- Tracks search history
- Maintains saved items list
- Stores category preferences

### Product
- Stores product/service information
- Tracks prices across multiple platforms
- Maintains ratings and reviews
- Stores specifications

### Recommendation
- Stores AI-generated recommendations
- Tracks cross-domain influence
- Records user interaction (view, click, purchase)
- Stores recommendation score and reason

## Technologies Used

- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **Axios** - HTTP client for external APIs
- **CORS** - Cross-origin resource sharing
- **Dotenv** - Environment variables management

## Future Enhancements

- Implement JWT authentication
- Add recommendation engine (Python integration)
- Create API routes for all CRUD operations
- Implement data scraping for multiple platforms
- Add caching layer (Redis)
- Implement rate limiting
- Add comprehensive error handling

## Contributing

Follow the existing code structure and naming conventions.

## License

MIT License
