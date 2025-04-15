/*import React from 'react';
import ReactDOM from 'react-dom/client';
//import { BrowserRouter } from 'react-router-dom';
//import App from './App';
import './index.css';

// Render the React app into the root element
/*reactDOM.createRoot(document.getElementById('root')).render(
  <react.StrictMode>
   <BrowserRouter>
     <App />
    </BrowserRouter>
  </react.StrictMode>
);*/
/*const Test = () => <h1 style={{color: 'red'}}>VITE IS WORKING!</h1>

ReactDOM.createRoot(document.getElementById('root')).render(
  <react.StrictMode>
    <Test />
  </react.StrictMode>
)
*/

// SIMPLEST POSSIBLE TEST - NO REACT
/*document.getElementById('root').innerHTML = `

  <h1 style="color: red; font-size: 4rem;">
    RAW JS WORKS!
  </h1>
`;
console.log("Script executed!"); // Check browser console */

// src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
//import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

/*<BrowserRouter basename="/">
      <App />
    </BrowserRouter>*/