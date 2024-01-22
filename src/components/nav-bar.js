import React, { Component } from "react";
// creating class component to call in app.js
// this will render the html inside howing the navbar at the top
export default class NavBar extends Component {
  render() {
    return (
      <nav className="nav-bar1">
        <ul className="nav-bar-items">
          <li className="nav-bar-text">Home </li>
          <li className="nav-bar-text">Inventory </li>
          <li className="nav-bar-text">Contact </li>
        </ul>
      </nav>
    );
  }
}
