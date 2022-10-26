import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';

export default class App extends Component {
  
  // Render is a life cycle method/ i.e, it compiles JSX and renders the html 
  render() {
    return (
      <div>
        <Navbar/>
      </div>
    )
  }
}

