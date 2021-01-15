import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FootNavigation from './FootNav/FootNavigation';
import {BrowserRouter as BRouter, HashRouter as HRouter, Route} from "react-router-dom"
import Nav from './Nav/IndexNav';

ReactDOM.render(
  <React.StrictMode>
    <BRouter>
      <Nav />
    </BRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

