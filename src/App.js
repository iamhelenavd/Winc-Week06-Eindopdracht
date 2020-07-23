import React from "react";
import Home from "./Home";
import {
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import NavBar from "./components/NavBar";
import Students from "./Students";

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Students" component={Students} />
      </Switch>
    </div>
  );
}

export default App;
