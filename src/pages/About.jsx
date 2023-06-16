import React from 'react';
import './about.css';
import image2 from '../images/image2.png'

const About = () => {
  return (
    <div className='portfolio__about pages__padding' id='about'>
        <div className="about__image">
            <img className='about__image-photo' src={image2} alt="graduationPhoto" />
        </div>
        <div className="about__info">
            <div className='about__info-aboutme'>About Me</div>
            <div className="about__info-intro"> My name is Aaron, I'd been in a planning and design industry for almost 1 year and 2 months. I really enjoy designing lane markings and traffic signal using AutoCad when i was in Metropolitan Manila Developement Authority as an Engineering Assistant. Due to my curiosity on exploring manufacturing industry, I decided to go in the different career path to experience more things. I'd been in Precision Crestec as a Management Trainee in Press Production for almost 5 months. As management trainee, I learned a lot on a different problem solving and communicating with executives and other management. Though my experiences there are great, I totally want an environment where can help me mentally and emotionally as well as a career that utilizes my skills and curiosity in technology. After I leave as a management trainee, I decided to self-study on Web Development and I more focus on a Front-End where I learned HTML, CSS, Javascript,ReactJS and Figma </div>
            <div className="about__info-data">
                <div className="about__info-data_categories">
                    <p>Name:</p>
                    <p>Date of Birth:</p>
                    <p>Address:</p>
                    <p>Email:</p>
                    <p>Phone Number:</p>
                </div>
                <div className="about__info-data_name">
                    <p>John Aaron Pineda</p>
                    <p>February 26, 1998 </p>
                    <p>Culiat Quezon City</p>
                    <p>jaronjr26@gmail.com</p>
                    <p>09202404575</p>
                </div>
            </div>
            <div className="about__skills">
                <p>Skills</p>
                <div className="about__skills-html">
                    <li>HTML</li>
                    <div className="about__skills-html_rate">
                        <div className="about__skills-html_ratings">80%</div>
                        <div className="about__skills-html_ratings-null"></div>
                    </div>
                </div>
                <div className="about__skills-css">
                    <li>CSS</li>
                    <div className="about__skills-css_rate">
                        <div className="about__skills-css_ratings">80%</div>
                        <div className="about__skills-css_ratings-null"></div>
                    </div>
                </div>
                <div className="about__skills-javascript">
                    <li>Javascript</li>
                    <div className="about__skills-javascript_rate">
                        <div className="about__skills-javascript_ratings">60%</div>
                        <div className="about__skills-javascript_ratings-null"></div>
                    </div>
                </div>
                <div className="about__skills-figma">
                    <li>Figma</li>
                    <div className="about__skills-figma_rate">
                        <div className="about__skills-figma_ratings">80%</div>
                        <div className="about__skills-figma_ratings-null"></div>
                    </div>
                </div>
                <div className="about__skills-reactjs">
                    <li>ReactJS</li>
                    <div className="about__skills-reactjs_rate">
                        <div className="about__skills-reactjs_ratings">40%</div>
                        <div className="about__skills-reactjs_ratings-null"></div>
                    </div>
                </div>

            </div>
            <div className="about__skills-others">
                <p>Other Skills</p>
                <li>Responsive Design</li>
                <li>Prototyping</li>
                <li>UX/UI Design</li>
                <li>Problem Solving</li>
                <li>Root Cause Analysis and Corrective Action</li>
            </div>
        </div>    
    </div>
  )
}

export default About
