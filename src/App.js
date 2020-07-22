import React from "react";
import Home from "./Home";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Students from "./Students";

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Aboutus" component={Students} />
      </Switch>
    </div>
  );
}
export default App;
