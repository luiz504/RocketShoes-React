import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';

export default function App() {
  return (
    <BrowserRouter>
      {/** <Header/> */}
      <Routes />
    </BrowserRouter>
  );
}
/**
 * Use the <BrowserRouter/> here to the <Header /> be able to access the routes
 * <Header/> will be clicabel doing some functions and interaction with all app
 */
