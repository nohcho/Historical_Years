# Historical Years Timeline

A React TypeScript application for displaying historical events in an interactive timeline format.

## Features

- Interactive timeline with historical events
- Responsive design for mobile and desktop
- Theme switching (light/dark mode)
- Modal popups for detailed event information
- Segment navigation for timeline periods
- Circular year navigation

## Development Setup

### Prerequisites

- Node.js (version 18.20.0 or higher)
- npm (version 9.0.0 or higher)

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
npm run validate
```

## Technologies Used

- **React 19** - UI framework
- **TypeScript** - Type safety
- **SCSS** - Styling
- **Webpack** - Build tool
- **Jest** - Testing framework
- **ESLint** - Code linting
- **Prettier** - Code formatting

## Repository Hygiene

The current source tree is small, but older Git history contains committed `node_modules`
objects. A normal cleanup commit cannot shrink clone size because Git still downloads those
historical objects.

To reduce clone time on the remote repository, rewrite history with a tool such as
`git filter-repo` or BFG, remove `node_modules` from all historical commits, and then
force-push the rewritten branch. Coordinate this before doing it because every contributor
will need to re-clone or reset their local copy.

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
