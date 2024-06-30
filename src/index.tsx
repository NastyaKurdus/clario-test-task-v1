import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.scss';
import { AuthorizationPage } from './components/AuthorizationPage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <AuthorizationPage />
  </React.StrictMode>
);
