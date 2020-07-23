import React from "react";
import "./App.css";
import Home from "./Home";
import NavBar from "./components/NavBar";
import Students from "./Students";
import StudentDetail from "./components/StudentDetail";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Students" exact component={Students} />
          <Route path="/Students/:id" component={StudentDetail} />
        </Switch>
      </div>
    </Router>
  );
}
export default App;
