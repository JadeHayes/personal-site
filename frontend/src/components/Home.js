import React, { Component } from 'react';

import css from './../images/CSS.png';
import html from './../images/HTML5.png';
import js from './../images/javascript.png';
import nodejs from './../images/nodejs.png';
import react from './../images/react.png';

import { HashLink as Link } from 'react-router-hash-link';



class Home extends Component {
    render() {
        return (
            <div className='main'>
                    <h2> Jade Hayes<small> | FullStack Developer </small></h2>
                    <br/>
                    <div  className='aboutme' id='home'>
                        <p> Hey! I'm Jade and I like to build stuff with code.  I went to
                            Hackbright Academy in March 2018, a software engineering program
                            for women in San Francisco.  Here, I learned Python, Javascript,
                            React, SQL, Flask, Jquery, HTML, CSS and even a little D3. Now I'm an
                            Intern at <a className='quid' href='https://quid.com/'>Quid</a>, learning technologies like Docker, Elastic Search, Apache Spark,
                            Apache Kafka and oh so much more.</p>
                            <br/>
                        <p> Before I entered the wonderful world of tech, I built thriving communities who shared
                            a passion for inspiring a generation of self-directed learners. These small but mighty
                            learners built games with code, constructed robotic obstacle courses and produced a number
                            of short films. After seeing our technology move their motivation, I knew I wanted I
                            wanted to take the leap into software engineering.  So, I guess you can say I was inspired
                            by a community of over 1,000 kids to learn how to code. </p>
                            <br/>
                        <p> In my past life, I traveled & represented the U.S. competing the art of Muay Thai [mwei ˈtai].
                           Also known as the science of 8 limbs, it's a martial art with elbows, knees, kicks, and punches.
                           You can see some of my accomplishments from this part of my life in the <Link className='project-intro' smooth to="/#muaythai">Muay Thai section</Link> of this
                           site... Who knows, maybe I'll step back in that ring sometime soon. </p>
                            <br/>
                        <p>  Thanks for dropping by, let's connect! </p>

                    </div>
                    <br/>

                    <div className='text-center'>
                        <h4>This site was created using</h4>
                        <img src={ react } alt='react' className='logos'/>
                        <img src={ js } alt='js' className='logos'/>
                        <img src={ nodejs } alt='nodejs' className='logos'/>
                        <img src={ html } alt='html' className='logos'/>
                        <img src={ css } alt='css' className='logos'/>
                    </div>

            </div>

    )}
};

export default Home;