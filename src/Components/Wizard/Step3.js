import React, { Component } from "react";
import { Link } from 'react-router-dom'
import store, { STEP_3 } from '../../ducks/store'
import "./Wizard.css";
import axios from "axios";

export default class Step3 extends Component {
  state={
     mortgage:"",
     rent: ""
  }

  handleChange = e =>{
      const {value, name} = e.target
      this.setState({
          [name]:value
      })
  }

  complete = () =>{
    store.dispatch({
      type: STEP_3,
      payload: this.state
    })
    let 
    axios
  }
    
  render() {
      let reccomendedRent = (this.state.mortgage * 1.25)
    return (
      <div className="Wizard"> 
        <p>Reccomended Rent: ${reccomendedRent}</p>
        <div className="Input">
          <p className="Label">Mortgage</p>
          <input onChange={this.handleChange} className="Long" name="mortgage" min={0} type="number" />
        </div>
        <div className="Input">
          <p className="Label">Rent</p>
          <input onChange={this.handleChange} className="Long" name="rent" min={0} type="number" />
        </div>
        
        <Link to="/wizard/step2">
            <button className="Previous Step">Previous Step</button>
        </Link>
        <Link to="/">
            <button onClick={this.complete} className="Complete">Complete</button>
        </Link>
      </div>
    );
  }
}
