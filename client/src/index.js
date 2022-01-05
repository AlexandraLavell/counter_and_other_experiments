import React from 'react';
import ReactDOM from 'react-dom';

// style
import './index.css';
import GlobalStyle from './GlobalStyles';

// components
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

