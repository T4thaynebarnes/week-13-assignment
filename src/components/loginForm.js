import React, { Component } from "react";
// creating class component to use in app.js
// written in JSX it will render the username and pw form to the dom
export default class LoginForm extends Component {
  render() {
    return (
      <div className="form-container">
        <h4>Enter username and password</h4>
        <input className="text-boxes" type="text" placeholder="Username:" />
        <br></br>
        <input className="text-boxes" type="text" placeholder="Password" />
        <br></br>
        <button className="button-login">Login</button>
        <button className="button-forgot-password">Forgot Password</button>
      </div>
    );
  }
}
