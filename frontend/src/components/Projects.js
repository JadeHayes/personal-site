import React, { Component } from 'react';
import '../App.css';
import mtn from './../images/mtn.png';
import Modal from 'react-responsive-modal';
import { Container, Row, Col } from 'react-grid-system';




class Projects extends Component {
    state = {
        open: false,
      };

      onOpenModal = () => {
        this.setState({ open: true });
      };

      onCloseModal = () => {
        this.setState({ open: false });
      };


        render() {
            const { open } = this.state;
            return (<div className='main'  id='projects'>
                <div className="jumbotron">
                    <img alt="mtn" src={mtn} className='mtn-photo text-center'></img>
                    <h2 className="text-center" id="whistler-title">WhistlerMTN</h2>
                    <p id="whistler-info">WBMTN is a tool for snow sports enthusiasts, to help
                    navigate their mountain adventure at Whistler Resort. After registering
                    with their skiing/riding preferences,  an algorithm calculates the users
                    personalized ride report that recommends which ski lifts and trails to explore
                    depending on weather conditions, trail status, ability and riding category preference.
                    <br/>
                    <br/>
                    Through an interactive lifts D3 tree map, users can view the mountain and locate which trails they
                    can access from specific ski lifts. For a birds eye view of the mountain, we have a full trail map
                    created with the library elevate zoom. Users can post comments, favorite & rate trails.
                    After they've picked their favorites, users can text that list using the Twilio API.</p>
                    <hr/>
                    <Container>
                      <Row>
                        <Col xs={8} className='text-center'><h5>Technologies Used</h5></Col>
                        <Col xs={4}><h5>APIs</h5></Col>
                      </Row>

                      <Row>
                        <ul>
                            <Col xs={12}><li> Python </li></Col>
                            <Col xs={12}><li> JavaScript </li></Col>
                            <Col xs={12}><li> SQLAlchemy </li></Col>
                            <Col xs={12}><li> PostgreSQL </li></Col>
                            <Col xs={12}><li> HTML/CSS </li></Col>
                        </ul>

                        <ul>
                            <Col xs={12}><li> D3 </li></Col>
                            <Col xs={12}><li> React </li></Col>
                            <Col xs={12}><li> Scrapy </li></Col>
                            <Col xs={12}><li> Elevate Zoom </li></Col>
                            <Col xs={12}><li> Bootstrap </li></Col>
                        </ul>
                        <div className='apis'>
                            <ul>
                                <Col xs={12}><li> Reddit </li></Col>
                                <Col xs={12}><li> Twilio </li></Col>
                                <Col xs={12}><li> Reddit </li></Col>
                            </ul>
                        </div>
                      </Row>
                    </Container>
                    <hr/>

                          <div className="text-center" id="demo-button">
                            <button className="btn btn-primary btn-lg" onClick={this.onOpenModal}> Demo </button>
                            <Modal open={open} onClose={this.onCloseModal} center>
                              <iframe title="whistler-project" width="750" height="500" src="https://www.youtube.com/embed/6bfzZjoMN3k" frameborder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                            </Modal>
                          </div>
                        </div>
            </div>
    )}
};

export default Projects;