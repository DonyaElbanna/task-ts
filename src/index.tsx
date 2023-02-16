// import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./constants/i18n";

const rootElement = document.getElementById('root')
const root = ReactDOM.createRoot(rootElement as Element);
root.render(
    <App />
);

