import React, { Component } from 'react';

import css from './../images/CSS.png';
import html from './../images/HTML5.png';
import js from './../images/javascript.png';
import nodejs from './../images/nodejs.png';
import react from './../images/react.png';
import docker from './../images/docker.png';

class Technologies extends Component {
    render() {
        return (          
        <div className='main created text-center'>
            <h4>This site was created using</h4>
            <img src={ react } alt='react' className='logos'/>
            <img src={ docker } alt='docker' className='logos'/>
            <img src={ js } alt='js' className='logos'/>
            <img src={ nodejs } alt='nodejs' className='logos'/>
            <img src={ html } alt='html' className='logos'/>
            <img src={ css } alt='css' className='logos'/>
        </div>
    )}
};

export default Technologies;
               
               
               
               
               
               
               
   