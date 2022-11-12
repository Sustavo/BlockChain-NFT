import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyle from './globaStyle'
import { App } from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
    <GlobalStyle />
  </React.StrictMode>
);