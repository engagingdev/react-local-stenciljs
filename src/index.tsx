import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { useCustomElementRef, fluid } from './fluid'; // Replaced by @lmig/fluid-react-utils
import { useEffect, useRef } from 'react';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
  // ---- Initialise FLUID
// let env = fluid.environments.test;
// useEffect(() => fluid.init(env), []);
// ---- Start Building
);


root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
