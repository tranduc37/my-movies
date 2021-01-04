import React from 'react';
import Header from './component/header';
import Popular from './component/popular';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';
import {LoadingContextProvider} from './context/loadingContext';

function App() {
  return (
    <LoadingContextProvider>
      <div className="App">
        <BrowserRouter>
          <Header />
          <Routes />
        </BrowserRouter>
      </div>
    </LoadingContextProvider>
  );
}

export default App;
