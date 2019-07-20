import React, { Component } from 'react';
// import Technologies from './Technologies'

class Home extends Component {
    render() {
        return (
            <div className='main'>
                    <h2> Jade Hayes<small> | FullStack Developer </small></h2>
                    <br/>
                    <div  className='aboutme' id='home'>
                        <p> Hey! I'm Jade and I like to build stuff with code. </p>
                        <p> Before I entered the wonderful world of tech, I built thriving communities who shared
                            a passion for inspiring a generation of self-directed learners. These small but mighty
                            learners built games with code, constructed robotic obstacle courses and produced a number
                            of short films. After seeing our technology move their motivation, I knew I wanted I
                            wanted to take the leap into software engineering.  So, I guess you can say I was inspired
                            by a community of over 1,000 kids to learn how to code. </p>
                            <br/>
                        <p>  Thanks for dropping by, let's connect! </p>

                    </div>
            </div>

    )}
};

export default Home;