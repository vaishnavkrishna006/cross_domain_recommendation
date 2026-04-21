# Quick Start Guide - RecommendHub

Get the RecommendHub system up and running in minutes!

## Prerequisites

Before starting, ensure you have:
- **Node.js** v14+ ([Download](https://nodejs.org/))
- **Python** 3.8+ ([Download](https://www.python.org/))
- **MongoDB** ([Local](https://docs.mongodb.com/manual/installation/) or [Atlas Cloud](https://www.mongodb.com/cloud/atlas))
- **Git** ([Download](https://git-scm.com/))

## Quick Start (5 minutes)

### Option 1: Manual Setup

#### 1. Start Frontend
```bash
cd frontend
npm install
npm start
```
✅ Frontend runs at http://localhost:3000

#### 2. Start Backend (in new terminal)
```bash
cd backend
npm install
npm run dev
```
✅ Backend runs at http://localhost:5000

#### 3. Setup Python Engine (optional, in new terminal)
```bash
cd recommendation_engine
python -m venv venv
# On Windows:
venv\Scripts\activate
# On macOS/Linux:
source venv/bin/activate

pip install -r requirements.txt
```

### Option 2: Docker Compose (Recommended)

If you have Docker installed:
```bash
docker-compose up
```

This starts:
- ✅ Frontend: http://localhost:3000
- ✅ Backend: http://localhost:5000
- ✅ MongoDB: mongodb://localhost:27017

## Configuration

### Backend (.env file)
Create `backend/.env`:
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/recommendhub
FRONTEND_URL=http://localhost:3000
NODE_ENV=development
```

## First Steps

1. **Access Frontend**
   - Open http://localhost:3000 in your browser
   - You should see the RecommendHub homepage

2. **Test API**
   - Open http://localhost:5000/api/health in your browser
   - Should return: `{"status":"Server is running"}`

3. **Get Categories**
   - Visit http://localhost:5000/api/categories
   - Should return list of 5 categories

## Directory Overview

```
cross_domain_recommendation_system/
├── frontend/              # React app (Port 3000)
├── backend/               # Express server (Port 5000)
├── recommendation_engine/ # Python module
└── README.md             # Full documentation
```

## Common Tasks

### Starting Fresh Development

```bash
# Clean installations
rm -rf frontend/node_modules backend/node_modules
npm install --prefix frontend
npm install --prefix backend

# Start services
npm start --prefix frontend &
npm run dev --prefix backend
```

### Stopping Services

```bash
# Ctrl+C in each terminal, or if using Docker:
docker-compose down
```

### Viewing Logs

```bash
# Frontend logs
npm start --prefix frontend

# Backend logs
npm run dev --prefix backend

# Docker logs
docker-compose logs -f backend
```

## Troubleshooting

### Port Already in Use
```bash
# Find and kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Find and kill process on port 5000
lsof -ti:5000 | xargs kill -9
```

### MongoDB Connection Error
- Ensure MongoDB is running locally or check your MONGO_URI
- For MongoDB Atlas, use connection string from your cluster

### Module Not Found Errors
```bash
# Clear node_modules and reinstall
rm -rf node_modules
npm install
```

### Python Version Issues
```bash
# Check Python version
python --version  # Should be 3.8+

# Use python3 if needed
python3 -m venv venv
```

## API Endpoints for Testing

### Health Check
```bash
curl http://localhost:5000/api/health
```

### Get Categories
```bash
curl http://localhost:5000/api/categories
```

### Search Products
```bash
curl -X POST http://localhost:5000/api/search \
  -H "Content-Type: application/json" \
  -d '{"query":"milk","category":"Groceries"}'
```

## Frontend Features to Explore

1. **Homepage**: Hero section with search
2. **Search Bar**: Try searching in different categories
3. **Categories**: Browse all available categories
4. **Features Section**: Learn about platform capabilities
5. **Responsive Design**: Resize browser to test mobile view

## Next Steps

1. **Explore Backend API**
   - Check `backend/README.md` for detailed API docs
   - Review `backend/server.js` for endpoint implementations

2. **Understand Frontend**
   - Check `frontend/README.md` for component structure
   - Review React components in `frontend/src/components/`

3. **Recommendation Engine**
   - Check `recommendation_engine/README.md`
   - Review `engine.py` for recommendation logic

4. **Full Documentation**
   - Read `ARCHITECTURE.md` for system design
   - Check individual README files in each folder

## Database Initialization

First time using the system? No setup needed! MongoDB will create collections automatically.

To seed sample data (coming soon):
```bash
# Will be available in backend/scripts/seed.js
npm run seed --prefix backend
```

## Development Tools

### Recommended VS Code Extensions
- REST Client (for testing APIs)
- MongoDB for VS Code
- Python
- ES7+ React/Redux/React-Native snippets

### Useful Commands

```bash
# Start frontend dev server
npm start --prefix frontend

# Start backend with auto-reload
npm run dev --prefix backend

# Build frontend for production
npm run build --prefix frontend

# Format Python code
black recommendation_engine/

# Lint Python code
pylint recommendation_engine/
```

## Production Deployment

### Build for Production
```bash
# Frontend
cd frontend
npm run build

# Backend is production-ready as-is
```

### Using Docker
```bash
docker-compose -f docker-compose.yml up --build
```

### Environment Setup for Production
```env
PORT=5000
MONGO_URI=mongodb+srv://user:pass@cluster.mongodb.net/recommendhub
FRONTEND_URL=https://yourdomain.com
NODE_ENV=production
```

## Performance Tips

1. **MongoDB Indexing**: Already configured in models
2. **Caching**: Implement Redis caching for frequent queries
3. **CDN**: Use CDN for frontend assets
4. **Code Splitting**: Frontend is optimized for code splitting
5. **Database Queries**: Use pagination for large result sets

## Support & Help

- Check individual README files in each folder
- Review ARCHITECTURE.md for system design
- Check console logs for error messages
- Open GitHub issues for problems

## Next: Learn More

- [Full README](./README.md)
- [Architecture Guide](./ARCHITECTURE.md)
- [Frontend Docs](./frontend/README.md)
- [Backend Docs](./backend/README.md)
- [Engine Docs](./recommendation_engine/README.md)

---

**Ready to code?** Start with the development environment above! 🚀
