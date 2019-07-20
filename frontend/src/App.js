import React, { Component } from 'react';
import Navbar from './components/Navbar';

import Technologies from './components/Technologies';
import Home from './components/Home';
import Resume from './components/Resume';
import MuayThai from './components/MuayThai';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import { Grid, Row } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
        <Grid>
          <Row className="show-grid">
            <Navbar/>
          </Row>
          <Technologies/>
          <Row>
            <Home/>
            <hr/>
          </Row>
          <Row>
            <TechStack/>
            <hr/>
          </Row>
          <Row>
            <Resume/>
            <hr/>
          </Row>
          <Row>
            <Projects/>
            <hr/>
          </Row>
          <Row>
            <MuayThai/>
          </Row>
        </Grid> )
  }
}

export default App;
