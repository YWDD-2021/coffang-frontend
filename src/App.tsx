import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './Router';
import Header from './component/Header';

const App: React.FC = () => {
  const [user, setUser] = useState<string | null>(null);
  return (
    <>
      <BrowserRouter>
        <Header user={user} />
        <Router user={user} />
      </BrowserRouter>
    </>
  );
};

export default App;
