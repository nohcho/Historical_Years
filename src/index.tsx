import { createRoot } from 'react-dom/client';

import App from './App';
import { LanguageProvider } from './app/providers/LanguageContext';
import { ThemeProvider } from './app/providers/ThemeContext';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element #root was not found');
}

const root = createRoot(rootElement);
root.render(
  <LanguageProvider>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </LanguageProvider>,
);
