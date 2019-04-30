import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import Wizard from "./Components/Wizard/Wizard";
import Header from "./Components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <section>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/wizard" component={Wizard} />
          </Switch>
        </section>
      </main>
    </div>
  );
}

export default App;
