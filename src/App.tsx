import React from "react";
import Routes from "./routes";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        {Routes.map((item, index) => (
          <Route
            key={index + 1}
            path={item.path}
            exact={item.exact}
            render={(props) => <item.page {...props} />}
          />
        ))}
      </Switch>
    </Router>
  );
}

export default App;
