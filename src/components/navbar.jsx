import React, { Component } from 'react';
import Dropdown from "react-dropdown";

export default class Navbar extends Component {
  render() {
    return (

      <div className="navbar navbar-expand-lg fixed-top is-white is-dark-text">
        <div className="navbar-brand h1 mb-0 text-large font-medium">
          Your Dashboard
        </div>
        <div className="navbar-divml-auto">
          <div className="user-detail-section">
            <span className="pr-2">Hi, Justin</span>
            <span className="img-Container">
            </span>
          </div>
        </div>
      </div>

    )
  }
}
