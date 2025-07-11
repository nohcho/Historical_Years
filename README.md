# Historical Years Timeline

A React TypeScript application for displaying historical events in an interactive timeline format.

## Features

- Interactive timeline with historical events
- Responsive design for mobile and desktop
- Theme switching (light/dark mode)
- Modal popups for detailed event information
- Swiper navigation for timeline segments
- Circular year navigation

## Development Setup

### Prerequisites

- Node.js (version 18.16.0 or higher)
- npm (version 8.11.0 or higher)

### Installation

```bash
npm install
```

### Available Scripts

#### Development

```bash
npm start                
npm run build         
```

#### Code Quality

```bash
npm run lint            
npm run lint:fix        
npm run lint:check       
npm run format           
npm run check-format     
npm run type-check      
```

#### Testing

```bash
npm test               
npm run test:watch     
npm run test:coverage   
```

#### Validation

```bash
npm run validate        ч
```

## Project Structure

```
src/
├── app/
│   ├── components/      # React components
│   │   ├── Modal/       # Modal component
│   │   ├── SectionTitle/# Section title component
│   │   ├── SwiperTimeLine/# Timeline swiper component
│   │   ├── Timeline/    # Timeline item component
│   │   ├── ToggleTheme/ # Theme toggle component
│   │   └── YearCircle/  # Year circle navigation
│   ├── data/           # Data files
│   └── pages/          # Page components
├── context/            # React contexts
├── styles/             # Global styles
└── types/              # TypeScript type definitions
```

## Technologies Used

- **React 19** - UI framework
- **TypeScript** - Type safety
- **SCSS** - Styling
- **Swiper** - Touch slider
- **GSAP** - Animations
- **Webpack** - Build tool
- **Jest** - Testing framework
- **ESLint** - Code linting
- **Prettier** - Code formatting

## Code Quality Standards

This project follows modern React development practices:

- **TypeScript** for type safety
- **ESLint** for code quality
- **Prettier** for consistent formatting
- **Jest + React Testing Library** for testing
- **Conventional commits** for commit messages

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Run validation (`npm run validate`)
4. Commit your changes (`git commit -m 'Add some amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request
