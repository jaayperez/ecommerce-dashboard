import React, { Component } from "react";

import './App.css';
import Dashboard from './components/dashboard';

import config from './components/config';

const url = `https://sheets.googleapis.com/v4/spreadsheets/${ config.spreadsheetId }/values:batchGet?ranges=Sheet1&majorDimension=ROWS&key=${config.apiKey}`;

class App extends Component {
  render() {
    return (

      <Dashboard></Dashboard>

    );
  }
}

export default App;
