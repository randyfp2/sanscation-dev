import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import landingPage from "pages/landingPage";
import HalamanDetail from "pages/halamanDetail";
import test from "pages/testing";

import "assets/scss/bootstrap.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={landingPage}></Route>
        <Route exact path="/properties/:id" component={HalamanDetail}></Route>
      </Router>
    </div>
  );
}

export default App;
