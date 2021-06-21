import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import landingPage from 'pages/landingPage';

import "assets/scss/bootstrap.css";


function App() {
  return (
    <div className="App">
      <Router><Route path="/" component={landingPage}></Route></Router>
    </div>
  );
}

export default App;
