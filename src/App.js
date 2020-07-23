import React, { Component } from 'react';
import NavBar from './components/NavBar'
import SouvenirList from './components/SouvenirList'

import './App.css';

class App extends Component {
  render() {
      const text = '텍스트표현';
      const a = 1;
    return (
      <div>
        <NavBar/>
        <SouvenirList/>
          <h2>{text}</h2>
          <h2>{a < 1 ? '작나' : '크거나 같다'}</h2>
      </div>

    );
  }
}

export default App;
