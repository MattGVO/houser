import React, { Component } from 'react'
import './House.css'

export default class House extends Component {
    render(){
        const {name, address,city,state,zip,img} = this.props.house
        return(
            <div className="House">
                <div className="X">X</div>
                <p>Property Name: {name}</p>
                <p>Address: {address}</p>
                <p>City: {city}</p>
                <p>State: {state}</p>
                <p>Zip:{zip}</p>
                <img src={img} alt={name}/>
            </div>
        )
    }
}