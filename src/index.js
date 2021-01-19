import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Catalog from './Pages/Catalog';
import Header from './Components/Header';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Catalog />
  </React.StrictMode>,
  document.getElementById('root')
);