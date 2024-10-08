import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'
import {ChakraProvider} from '@chakra-ui/react'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <ChakraProvider>
    <React.StrictMode>
    <App />
    </React.StrictMode>
  </ChakraProvider>
  </BrowserRouter>
);
reportWebVitals();
