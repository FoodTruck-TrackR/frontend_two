import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Form from "./components/Form";
import home from './components/home'

export default function App() {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={props => (
            <Form
              onSubmit={value => {
                props.history.push("/home");
              }}
            />
          )}
        />
        <Route exact path="/home" component={home} />
      </Switch>
    </Router>
  );
}