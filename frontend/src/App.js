import React, { Component } from 'react';
import css from './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { StickyContainer, Sticky } from 'react-sticky';
import { Grid, Col, Row, Clearfix } from 'react-bootstrap';


class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
      </div> )
  }
}

export default App;
