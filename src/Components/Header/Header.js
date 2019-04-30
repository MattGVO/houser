import React, { Component } from "react";
import Logo from "../../houser_logo.png";
import "./Header.css";

export default class Header extends Component {
  render() {
    return (
      <header>
        <div>
          <img src={Logo} alt="Houser Logo" />
          <h1>Houser</h1>
        </div>
      </header>
    );
  }
}
