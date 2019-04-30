import React, { Component } from "react";
import { Link } from 'react-router-dom'
import "./Wizard.css";

export default class Step1 extends Component {
  state={
      propertyName:"",
      address:"",
      city:"",
      state:"",
      zip: 0

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
          <p className="Label">Property Name</p>
          <input onChange={this.handleChange} name="propertyName" maxLength={30} type="text" />
        </div>
        <div className="Input">
          <p className="Label">Address</p>
          <input onChange={this.handleChange} name="address" maxLength={100} className="Address" type="text" />
        </div>
        <div className="Input">
          <p className="Label">City</p>
          <input onChange={this.handleChange} name="city" maxLength={100} type="text" />
        </div>
        <div className="State-Zip">
          <div className="Input">
            <p className="Label">State</p>
            <input onChange={this.handleChange} name="state" maxLength={2} className="State" type="text" />
          </div>
          <div className="Input">
            <p className="Label">Zip</p>
            <input onChange={this.handleChange} name="zip" min={0} max={99999} className="Zip" type="number" />
          </div>
        </div>
        <Link to="/wizard/step2">
          <button className="Step">Next Step</button>
        </Link>
      </div>
    );
  }
}
