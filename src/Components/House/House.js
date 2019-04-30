import React, { Component } from 'react'
import './House.css'

export default class House extends Component {
    render(){
        const {id, name, address,city,state,zip,img,mortgage,rent} = this.props.house
        const {deleteHouse} = this.props
        return(
            <div className="House">
                <div onClick={deleteHouse} id={id} className="X">X</div>
                <img src={img} alt={name}/>
                <p>Property Name: {name}</p>
                <p>Address: {address}</p>
                <p>City: {city}</p>
                <p>State: {state}</p>
                <p>Zip:{zip}</p>
                <p>Monthly Mortgage: ${mortgage}</p>
                <p>Desired Rent: ${rent}</p>
            </div>
        )
    }
}