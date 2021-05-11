import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HashRouter } from 'react-router-dom';
import AuthProvider from './providers/AuthProvider';

ReactDOM.render(
  <HashRouter>
    <AuthProvider>      
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </AuthProvider>
  </HashRouter>,document.getElementById('root')
);