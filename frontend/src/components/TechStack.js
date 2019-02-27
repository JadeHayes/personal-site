import React, { Component } from 'react';
import os

// TODO: in production, try using docker.for.mac.host.internal
// host.docker.internal

class TechStack extends Component {
  render() {
    return (
      <div className='main' id='tech-stack'>
        <iframe width="100%" height="100%" src="https://jadehayes.herokuapp.com:8081/tech-stack/"/>
     </div>
    )}
  }

export default TechStack