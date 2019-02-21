import React, { Component } from 'react';

import landing from './../images/landing.png';
import email from './../images/social/email.png';
import linkedin from './../images/social/linkedin.png';
import github from './../images/social/github.png';
import instagram from './../images/social/instagram.png';

import Home from './Home';
import Resume from './Resume';
import MuayThai from './MuayThai';
import Projects from './Projects';
import Footer from './Footer';

import { Grid, Col, Row } from 'react-bootstrap';
import { HashLink as Link } from 'react-router-hash-link';




class Navbar extends Component {
  render() {
    return (
            <div className="App">
                <div className='sideNav'>
                  <Grid>
                    <Row className="show-grid">
            <Col sm={4} md={3}>
                <div className="wrapper text-center container-fluid" id="sidebar">
                <div className="sidebar-wrapper">
                    <div className="profile-container">
                        <img alt="jade-headshot" className="headshot"src={ landing } width="150" height="150"/>
                        <h1 className="name">Jade Hayes</h1>
                        <h3 className="tagline">Full Stack Developer</h3>
                    </div>

                    <div className="Nav-container container-block">
                        <ul className='navs'>
                            <li className='navNames'><Link smooth to="/#home">Home</Link></li>
                            <li className='navNames'><Link smooth to="/#resume">Resume</Link></li>
                            <li className='navNames'><Link smooth to="/#projects">Projects</Link></li>
                            <li className='navNames'><Link smooth to="/#muaythai">Muay Thai</Link></li>
                        </ul>
                    </div>

                    <div className="contact-container container-block">
                        <ul>
                            <li className="contactme"><a href="mailto: Jade.e.Hayes@gmail.com"><img  alt="email" src={email}></img></a>
                            <a href="https://www.linkedin.com/in/jade-hayes"><img  alt="linkedin" src={linkedin}></img></a>
                            <a href="https://github.com/JadeHayes"><img  alt="github" src={github}></img></a>
                            <a href='https://www.instagram.com/spacecadethayes/'><img alt="instagram" src={instagram}></img></a></li>
                        </ul>
                 </div>
                </div>
            </div>

            </Col>
                <Home />
                <hr/>
                <Resume />
                <hr/>
                <Projects />
                <hr/>
                <MuayThai />
                <hr/>
                <Footer />
                </Row>
              </Grid>
            </div>
      </div> )
  }
}


export default Navbar;