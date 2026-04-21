# RecommendHub Frontend

A modern React-based frontend for the cross-domain recommendation system.

## Project Structure

```
frontend/
├── public/
│   └── index.html          # Main HTML file
├── src/
│   ├── components/         # React components
│   │   ├── Navbar.js
│   │   ├── Hero.js
│   │   ├── Categories.js
│   │   ├── Features.js
│   │   └── Footer.js
│   ├── styles/            # CSS styles
│   │   ├── index.css
│   │   ├── Navbar.css
│   │   ├── Hero.css
│   │   ├── Categories.css
│   │   ├── Features.css
│   │   └── Footer.css
│   ├── App.js             # Main App component
│   └── index.js           # Entry point
└── package.json           # Dependencies
```

## Features

- **Responsive Design**: Mobile-first approach with full responsiveness
- **Modern UI**: Clean and professional interface inspired by StudyHub
- **Component-Based**: Modular React components for easy maintenance
- **Cross-Domain Search**: Search across multiple product/service categories
- **Real-time Comparison**: Compare prices and features instantly

## Available Categories

1. **Groceries** - Compare online grocery stores
2. **Food Delivery** - Find best food delivery options
3. **E-commerce** - Shop across multiple marketplaces
4. **Bus Tickets** - Compare bus routes and prices
5. **Flight Bookings** - Find the best flight deals

## Getting Started

### Installation

```bash
npm install
```

### Development Server

```bash
npm start
```

The app will open in your browser at `http://localhost:3000`.

### Build for Production

```bash
npm run build
```

This will create an optimized production build in the `build` folder.

## Technologies Used

- **React 18** - UI library
- **CSS3** - Styling with CSS Grid and Flexbox
- **Responsive Design** - Mobile-first approach

## Color Scheme

- Primary Color: `#1a6b5e` (Teal)
- Primary Dark: `#0f4c3f`
- Accent Color: `#2ecc71` (Green)
- Light Background: `#f0f5f3`

## Future Enhancements

- Add API integration with backend
- Implement user authentication
- Add product filtering and sorting
- Implement user reviews and ratings
- Add price tracking and notifications
- Mobile app development

## Contributing

Contributions are welcome! Please follow the existing code style and structure.

## License

MIT License
