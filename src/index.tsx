import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

import { ThemeProvider } from './app/providers/ThemeContext';

const root = createRoot(document.getElementById('root')!);
root.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
);
