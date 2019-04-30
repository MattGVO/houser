import React, { Component } from "react";
import { Link } from 'react-router-dom'
import "./Wizard.css";

export default class Step3 extends Component {
  state={
     img:""
  }

  handleChange = e =>{
      const {value, name} = e.target
      this.setState({
          [name]:value
      })
  }
    
  render() {
    return (
      <div className="Wizard"> 
        <div className="Input">
          <p className="Label">Mortgage</p>
          <input onChange={this.handleChange} name="propertyName" maxLength={30} type="text" />
        </div>
        <div className="Input">
          <p className="Label">Rent</p>
          <input onChange={this.handleChange} name="propertyName" maxLength={30} type="text" />
        </div>
        
        <Link to="/wizard/step2">
            <button className="Previous Step">Previous Step</button>
        </Link>
        <Link to="/">
            <button className="Complete">Complete</button>
        </Link>
      </div>
    );
  }
}
