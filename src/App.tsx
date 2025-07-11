import React from 'react';

import { HistoryPage } from './pages/history-page';
import '@/styles/_global.scss';

const App: React.FC = () => {
  return (
    <div className={'container'}>
      <HistoryPage />
    </div>
  );
};

export default App;
