import React, { Component } from 'react';

// TODO: in production, try using docker.for.mac.host.internal


class TechStack extends Component {
  render() {
    return (
      <div id='tech-stack'>
        <iframe width="100%" height="100%" border="0" margin="0" src="http://docker.for.mac.host.internal:8080/tech-stack/"/>
     </div>
    )}
  }

export default TechStack