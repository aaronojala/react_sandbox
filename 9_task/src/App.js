import React from 'react';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import './App.css';

import {BrowserRouter as Router} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Router>
      <Header /> 
      <Main /> 
    </Router>
  );
};

export default App;