import React, { Component } from "react";
import { Link } from 'react-router-dom'
import store, { STEP_2 } from '../../ducks/store'
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

  next = () =>{
    store.dispatch({
      type: STEP_2,
      payload: this.state
    })
  }
    
  render() {
    return (
      <div className="Wizard"> 
        <div className="Input">
          <p className="Label">Image URL</p>
          <input className="Long" onChange={this.handleChange} name="img" maxLength={30} type="text" />
        </div>
        
        <Link to="/wizard/step1">
          <button className="Previous Step">Previous Step</button>
        </Link>
        <Link to="/wizard/step3">
          <button onClick={this.next} className="Step">Next Step</button>
        </Link>
      </div>
    );
  }
}
