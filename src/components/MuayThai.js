import React, { Component } from 'react';

import { Grid, Col, Row } from 'react-bootstrap';



class MuayThai extends Component {
    render() {
        return (
            <div className='main jumbotron' id='muaythai'><br/>
                <h2> Jade Hayes<small> | Muay Thai </small></h2>
                    <div  className='mtvideo text-center'>
                        <iframe title="fight-video" width="560" height="315" src="https://www.youtube.com/embed/h8e1G1h6U_I?start=70" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                    </div>
                <p>
                    As Muay Thai competitor, I had the fortune of traveling and competing against talented
                    woman from different parts of the world.  I've learned countless lessons from this art and am greatful
                    for the adventure and amazing community Muay Thai brought into my life.<br/>

                </p>

                    <Grid>
                        <Row>
                            <Col xs={4}>
                                <img alt="jade" className='muaythai-news' id='sfawakening' src='https://sfbay.ca/home/wp-content/uploads/2013/10/131015_JadeHayes0150_1.jpg'/>
                            </Col>

                            <Col xs={5}>
                                <img alt="jade" className='muaythai-news' id='usavchina'src='https://www.awakeningfighters.com/wp-content/uploads/2017/12/jinlan-gong-vs-jade-hayes-at-wck-muay-thai-01-11-14.jpg'/>
                            </Col>


                            <Col xs={3}>
                                <img alt="jade" className='muaythai-news' id='teamusa' src='http://worldteamusa.com/wp-content/uploads/2017/07/jade-Hayes-1.jpg'/><br/>
                           </Col>
                       </Row>

                       <Row>
                            <Col className='text-center titles' xs={4}>
                                <a className='newstitle' href='https://sfbay.ca/2013/10/21/jade-hayes-ready-to-throw-down-in-pro-debut/'> SfBay</a>
                            </Col>

                            <Col className='text-center titles' xs={5}>
                                <a className='newstitle' href='https://www.awakeningfighters.com/wp-content/uploads/2017/12/jinlan-gong-vs-jade-hayes-at-wck-muay-thai-01-11-14.jpg'> Awakening Fighters</a>
                            </Col>

                            <Col className='text-center titles' xs={3}>
                                <a className='newstitle' href='https://sfbay.ca/2013/10/21/jade-hayes-ready-to-throw-down-in-pro-debut/'>Team USA</a>
                            </Col>
                       </Row>
                   </Grid>
            </div>
    )}
};

export default MuayThai;