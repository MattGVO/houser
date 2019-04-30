import React, { Component } from 'react'
import './House.css'

export default class House extends Component {
    render(){
        return(
            <div className="House">
                <div className="X">X</div>
                <p>Property Name:</p>
                <p>Address:</p>
                <p>City:</p>
                <p>State:</p>
                <p>Zip:</p>
            </div>
        )
    }
}