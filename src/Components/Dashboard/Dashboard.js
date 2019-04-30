import React, { Component } from 'react'
import './Dashboard.css'
import House from '../House/House';

export default class Dashboard extends Component {
    render(){
        return(
            <div class="Dashboard">
                <div class="Dash-Header">
                    <h1>Dashboard</h1>
                    <button>Add New Property </button>
                </div>
                <h3>Home Listings</h3>
                <House/>
            </div>
        )
    }
}