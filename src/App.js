import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import landingPage from "pages/landingPage";
import HalamanDetail from "pages/halamanDetail";
import Checkout from "pages/checkout";
import test from "pages/testing";

import "assets/scss/bootstrap.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={landingPage}></Route>
        <Route exact path="/properties/:id" component={HalamanDetail}></Route>
        <Route exact path="/checkout" component={Checkout}></Route>
      </Router>
    </div>
  );
}

export default App;
