import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App/App';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router basename="/goit-react-hw-05-movies/">
    <App />
  </Router>
);