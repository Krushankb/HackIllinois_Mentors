import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import 'array-flat-polyfill';
import 'unfocus';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactGA.initialize('G-2D2S4GLZPR', {
  testMode: process.env.NODE_ENV !== 'production',
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
reportWebVitals();
