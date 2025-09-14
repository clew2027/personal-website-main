// src/index.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';      // make sure App has a default export
import './index.css';

const container = document.getElementById('app'); // your HTML uses id="app"
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
