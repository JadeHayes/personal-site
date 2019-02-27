import React, { Component } from 'react';

// TODO: in production, try using host.docker.internal


class TechStack extends Component {
  render() {
    return (
      <div className='main' id='tech-stack'>
        <iframe width="100%" height="100%" src="http://0.0.0.0:8080/tech-stack/"/>
        <script>document.write()</script>
     </div>
    )}
  }

export default TechStack