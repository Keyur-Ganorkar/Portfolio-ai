import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Example: Toggle theme in React
document.documentElement.setAttribute('data-theme', 'dark'); // or 'light'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
