import React from 'react';
import './contact.css';
import * as ioIcons from 'react-icons/io';
import * as hiIcons from 'react-icons/hi';
import * as bsIcons from 'react-icons/bs';
import { Link } from 'react-scroll';


const Contact = () => {
  return (
    <div className='portfolio__contact pages__padding' id='contact'>
        <div className="portfolio__contact-content">
            <div className="portfolio__contact-content_quotes">
            The only thing we know about the future is that it will be different.
            </div>
            <div className="portfolio__contact-content_info">
                <div className="portfolio__contact-content_info-personal">
                    <p>Contact Information</p>
                    <div className="portfolio__contact-content_info-personal_number">
                        <ioIcons.IoMdContact fontSize={"20px"}/>
                        <p>Contact:</p>
                        <p>09202404575</p>
                    </div>

                    <div className="portfolio__contact-content_info-personal_email">
                        <hiIcons.HiOutlineMail fontSize={"20px"}/>
                        <p>Email:</p>
                        <p>jaronjr26@gmail.com/<br/>aaronpineda91@gmail.com</p>
                    </div>

                    <div className="portfolio__contact-content_info-personal_github">
                        <bsIcons.BsGithub fontSize={"20px"}/>
                        <p>Github:</p>
                        <p>jaronjr26@gmail.com</p>
                    </div>

                    <div className="portfolio__contact-content_info-personal_address">
                        <hiIcons.HiHome fontSize={"20px"}/>
                        <p>Address:</p>
                        <p>Culiat Quezon City</p>
                    </div>
                </div>

                <div className="portfolio__contact-content_portfolio-content">
                        <p>Content</p>
                        <Link to="home" spy={true} smooth={true} offset={0} duration={500}>Home</Link>
                        <Link to="about" spy={true} smooth={true} offset={0} duration={500}>About</Link>
                        <Link to="portfolio" spy={true} smooth={true} offset={50} duration={500}>Portfolio</Link>
                        <Link to="contact" spy={true} smooth={true} offset={50} duration={500}>Contact</Link>
                </div>

            </div>

            <div className="portfolio__contact-copyright"><strong>My portfolio 2023</strong>, All Rights Reserved.</div>
        </div>     
    </div>
  )
}

export default Contact
