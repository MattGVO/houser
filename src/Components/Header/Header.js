import React, { Component } from "react";
import Logo from "../../houser_logo.png";
import { Link } from 'react-router-dom'
import "./Header.css";

export default class Header extends Component {
  render() {
    return (
      <header>
        <Link to="/">
          <img src={Logo} alt="Houser Logo" />
          <h1>Houser</h1>
        </Link>
      </header>
    );
  }
}
