import React, { Component } from "react";
import { Link } from 'react-router-dom'
import "./Wizard.css";

export default class Step2 extends Component {
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
          <p className="Label">Image URL</p>
          <input onChange={this.handleChange} name="propertyName" maxLength={30} type="text" />
        </div>
        
        <Link to="/wizard/step1">
          <button className="Previous Step">Previous Step</button>
        </Link>
        <Link to="/wizard/step3">
          <button className="Step">Next Step</button>
        </Link>
      </div>
    );
  }
}
