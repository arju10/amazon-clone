import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Checkbox } from "@material-ui/core";
import Checkout from "./Components/Checkout/Checkout";

function App() {
  return (
    <Router>
      <div className="app">
        <Header/>
        <Switch>
        <Route exact path ="/checkout">
           
           <Checkout/>
          </Route>
          <Route exact path ="/">
            
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
