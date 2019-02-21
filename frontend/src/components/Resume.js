import React, { Component } from 'react';
import linkedin from './../images/social/linkedin.png';
import github from './../images/social/github.png';
import hackbright from './../images/hackbright.png';
import sfsu from './../images/SFSU.png';


import d3 from './../images/resume_langs/d3.png';
import flask from './../images/resume_langs/flask-sqlalchemy.png';
import html_css_js from './../images/resume_langs/HTML5_CSS_JavaScript.png';
import jquery from './../images/resume_langs/jquery.gif';
import postgres from './../images/resume_langs/postgresql-logo.png';
import python from './../images/resume_langs/python.png';
import react from './../images/resume_langs/react.png';

class Resume extends Component {
    render() {
        return (
                <div>
                <div className='main'>
                        <div className="sidebar-wrapper">
                            <div className="profile-container">

                                <a href='https://www.linkedin.com/in/jade-hayes/' className='linkedin-button'><span><img alt="Linkedin"  src={linkedin}/></span></a>
                                <a href='https://github.com/JadeHayes' className='github-button'><span><img alt="github" src={github}/></span></a>
                                <h3 className="tagline">
                                    Full Stack Developer</h3>
                            </div>

                        <div className="main-wrapper">

                            <section className="section summary-section">
                                <h2 className="section-title"><i className="fa fa-user"></i>Career Profile</h2>
                                <div className="summary">
                                    <p>My transition to software engineering started from my previous position as a
                                       Community Director for a tech-based youth program. At this program, kids created
                                       robotic obstacle courses, built their own apps and edited live movies all on their own.
                                       As Director of our flagship location, I managed an operation serving over 1,000 families,
                                        implemented communication technologies for staff and helped our tech team brainstorm
                                        improvements for our in-house photo uploading app. I enjoyed the process so much,
                                        I decided to make the move into software engineering full-time.
                                    </p>
                                </div>
                            </section>

                            <section className="section experiences-section">
                                <h2 id='resume' className="section-title"><i className="fa fa-briefcase"></i>Experience</h2>


                                <div className="item">
                                    <div className="meta">
                                        <div className="upper-row">
                                            <h3 className="job-title">Software Engineer Intern</h3>
                                            <div className="time">June 2018 - August 2018 </div>
                                        </div>
                                        <div className="company">Quid Inc, San Francisco</div>
                                    </div>
                                    <div className="details">
                                        <p> - Quid is a platform that searches, analyzes and visualizes the world’s collective intelligence to help answer strategic questions.   </p>
                                        <p> - Project focused 9 week software engineering internship </p>
                                        <p> - Technologies used include Docker, Python/Flask, Javascript/React/nodejs, ElasticSearch, Apache Spark, Apache Kafka </p>
                                    </div>
                                </div>


                                <div className="item">
                                    <div className="meta">
                                        <div className="upper-row">
                                            <h3 className="job-title">Community Director</h3>
                                            <div className="time">March 2015 - Jan 2018 </div>
                                        </div>
                                        <div className="company">Steve & Kate's, San Francisco</div>
                                    </div>
                                    <div className="details">
                                        <p> - Served as GM for a tech based summer program, connecting youth to coding, animation and robotics for a community of 1,000 different families.</p>
                                        <p> - Hired, trained and led 40 staff members towards a successful ten week tech focused summer program.</p>
                                        <p> - Expanded brand awareness through hosting and volunteering at community events.</p>
                                        <p> - Co-developed and led various training programs for seasonal staff (site-specific and regional).</p>
                                        <p> - Managed day-to-day operations for a camp of 250+ campers daily.</p>
                                        <p> - Strengthened relationships with families, campers and staff through both onsite conversations, phone and e-mail communication using platforms like groove, mailchimp and Line2.</p>
                                        <p> - Organized and prepared staff for camper behavior based situations.</p>
                                        <p> - Financial responsibilities included budget maintenance, expense reporting, check requests and vendor communications. </p>
                                        <p> - Maintained facilities to brand standards while caring for the property of our host school</p>
                                    </div>
                                </div>

                                <div className="item">
                                    <div className="meta">
                                        <div className="upper-row">
                                            <h3 className="job-title">Profesional Muay Thai Competitor</h3>
                                            <div className="time">2013 - 2016</div>
                                        </div>
                                        <div className="company">World Team USA, San Francisco</div>
                                    </div>
                                    <div className="details">
                                           <p> As a professional Muay Thai competitor, I traveled to international competitions to represent the United States. </p>
                                           <p> - Built a corporate structure Muay Thai Program at Club Genentech with goal of exceeding expectations of club members and participants.</p>
                                           <p> - Promoted Muay Thai through competition, modeling and film. </p>
                                           <p> - Instilled a passion for Muay Thai and served as a positive role model in a team atmosphere.</p>
                                           <p> - Evaluated program progress and responded to criticisms / feedback in positive manner.</p>
                                           <p> - Managed first aid, CPR and basic first response injury courses and requirements.</p>
                                           <p> - Expanded programs for strengthening our connection to the community.</p>
                                           <p> - WCSC Lightweight World Champion</p>
                                           <p> - IMTO California State Champion</p>

                                    </div>
                                </div>

                                <div className="item">
                                    <div className="meta">
                                        <div className="upper-row">
                                            <h3 className="job-title">Director of Summer Programs</h3>
                                            <div className="time">2009 - 2015</div>
                                        </div>
                                        <div className="company">San Francisco, CA</div>
                                    </div>
                                    <div className="details">
                                        <p> - Developed a youth summer program for 100+ participants and staff.</p>
                                        <p> - Scheduled employees and volunteers according to staff budget. </p>
                                        <p> - Created employee recognition program. </p>
                                        <p> - Negotiated and managed vendor relationships for events within the guidelines of Bay Club policy.</p>
                                        <p> - Planned weekly events within the guidelines of Bay Club policy of vendor relations.</p>
                                    </div>
                                </div>
                            </section>
                            <hr/>
                            <section className="skills-section section">
                                <h2 className="section-title"><i className="fa fa-rocket"></i>Skills &amp; Proficiency</h2>
                                <div className="skillset">
                                    <div className="item">

                                    <div className='text-center'>
                                        <img alt="python" id='python' className='langs' src= {python}/>
                                        <img alt="flask" id='flask' className='langs' src= {flask}/>
                                        <img alt="html_css_js" id='html_css_js' className='langs' src= {html_css_js}/>
                                        <img alt="d3" className='langs' src= {d3}/>
                                        <img alt="jquery" className='langs' src= {jquery}/>
                                        <img alt="postgres" className='langs' src= {postgres}/>
                                        <img alt="react" className='langs' src= {react}/>
                                    </div>
                                        <div className="education-container container-block">
                                            <h2 className="container-block-title ed">Education</h2>

                                            <div>
                                            <img alt="hackbright" id='hackbright-logo'src={hackbright}/>
                                            <div className="degree">
                                                <h4 className="school">Full-time Software Engineering Program </h4>
                                                <h5 className="meta">Hackbright Academy</h5>
                                                <div className="time">March 2018</div>
                                            </div>
                                            </div>

                                            <img alt="SFSU" id='sfsu-logo'src={sfsu}/>
                                            <div className="degree">
                                                <h4 className="school">BA in Recreation, Travel & Tourism Management</h4>
                                                <h5 className="meta">San Francisco State University</h5>
                                                <div className="time">2010</div>
                                            </div>

                                        </div>
                                        <div></div>

                                        <div className="interests-container container-block">
                                            <h2 className="container-block-title">Interests</h2>
                                            <ul className="interests list-unstyled interests-list">
                                                <li>❄️ Snowboarding ❄️ | 🌊 Surfing 🌊 | 🚤 Wakeboarding 🚤 | ⛺ Camping ⛺ | 🏔️ Climbing 🏔️ | 🌎 Travel 🌍</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                        </section>

                    </div>
                </div>
        </div>
    </div>
)}
};

export default Resume;
















