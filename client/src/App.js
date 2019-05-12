import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    <div className="App">
      <Header />

      {/* Routes for the application */}
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/login" />} />
        <Route path="/login" component={PageNotFound} />
        <Route path="/dashboard" component={PageNotFound} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
