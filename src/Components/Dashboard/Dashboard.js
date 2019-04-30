import React, { Component } from 'react'
import './Dashboard.css'
import { Link } from 'react-router-dom'
import House from '../House/House';
import axios from 'axios';

export default class Dashboard extends Component {
    state={
        houses:[]
    }

    async componentDidMount(){
        let res = await axios.get('/api/houses')
        this.setState({
            houses: res.data
        })
    }
    
    render(){
        let houses = this.state.houses.map( val =>(
            <House key={val.id} house={val} />
        ))
        return(
            <div class="Dashboard">
                <div class="Dash-Header">
                    <h1>Dashboard</h1>
                    <Link to="/wizard/step1">
                    <button>Add New Property </button>
                    </Link>
                </div>
                <h3>Home Listings</h3>
                {houses}
            </div>
        )
    }
}