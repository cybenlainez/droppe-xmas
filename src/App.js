import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route , Switch} from 'react-router-dom';
import Navbar from "./Navbar";
import Cart from "./Cart";
import Thankyou from "./Thankyou";

function App () {

  return(
    <Router>
      <div className="page">
        <Navbar />
        <div className="content">
          <Switch>
              <Route exact path="/">
                  <Cart />
              </Route>
              <Route path="/Thankyou">
                  <Thankyou />
              </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
