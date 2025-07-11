import React from 'react';

import { HistoryPage } from './app/pages/HistoryPage';
import '@/styles/_global.scss';

const App: React.FC = () => {
  return (
    <div className={'container'}>
      <HistoryPage />
    </div>
  );
};

export default App;
