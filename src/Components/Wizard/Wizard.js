import React, { Component } from "react";
import { Link, Switch, Route } from 'react-router-dom'
import "./Wizard.css";
import Step1 from './Step1'
import Step2 from "./Step2";
import Step3 from "./Step3";

export default class Wizard extends Component {
  render() {
    return (
      <div className="Wizard">
        <div className="Wizard-Head">
          <h1>Add New Listing</h1>
          <Link to="/">
          <button className="Cancel">Cancel</button>
          </Link>
        </div>
      <Switch>
          <Route path="/wizard/step1" component={Step1}/>
          <Route path="/wizard/step2" component={Step2}/>
          <Route path="/wizard/step3" component={Step3}/>
      </Switch>
      </div>
    );
  }
}
