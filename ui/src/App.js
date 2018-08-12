import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RouterComponent from "./component/router/router";
import Navigation from "./component/UI/navigation";
class App extends Component {
  render() {
    
    return (
      <React.Fragment> 
        <div className="App">
        <Navigation />
        <RouterComponent />
        </div>    
      </React.Fragment>
    );
  }
}

export default App;
