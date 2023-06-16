import React, { useState }  from 'react';
import { Link } from 'react-scroll';
import './home.css';
import image1 from '../images/image1.png';
import LightButton from '../images/LightButton.png'
import DarkButton from '../images/DarkButton.png';
import * as faIcon from 'react-icons/fa'; 
import Resume from '../images/CV-John Aaron-Pineda.pdf';




const Home = ( {toggle, setToggle }) => {

    const [click,setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);
    
  return (
    <div className='portfolio__home pages__padding' id='home'>
        <div className='home__header'>
            <div className='home__header-logo'>My Portfolio</div>
            <div className='home__header-navbar'>
                <Link to="home" spy={true} smooth={true} offset={0} duration={500} onClick={closeMobileMenu}>Home</Link>
                <Link to="about" spy={true} smooth={true} offset={0} duration={500} onClick={closeMobileMenu}>About</Link>
                <Link to="portfolio" spy={true} smooth={true} offset={50} duration={500} onClick={closeMobileMenu}>Portfolio</Link>
                <Link to="contact" spy={true} smooth={true} offset={50} duration={500} onClick={closeMobileMenu}>Contact</Link>      
            </div>
            <div className="home__header-navbar-menu">
            {toggle ? <img src={LightButton} className='light_button' alt="lightbutton" onClick={()=> setToggle(false)}/>: <img src={DarkButton} className='dark_button' alt="darkbutton" onClick={()=> setToggle(true)} />}
                <div className="menu-icon" onClick={handleClick}>
                    {click ? <faIcon.FaTimes /> : <faIcon.FaBars />}
                </div>
                {click && (<div className='home__header-navbar-active'>
                <Link to="home" spy={true} smooth={true} offset={0} duration={500} onClick={closeMobileMenu}>Home</Link>
                <Link to="about" spy={true} smooth={true} offset={0} duration={500} onClick={closeMobileMenu}>About</Link>
                <Link to="portfolio" spy={true} smooth={true} offset={50} duration={500} onClick={closeMobileMenu}>Portfolio</Link>
                <Link to="contact" spy={true} smooth={true} offset={50} duration={500} onClick={closeMobileMenu}>Contact</Link>      
            </div>)}  
            </div>
        </div>

        <div className="home__body">
            <div className="home__body-text">
                <p>Hello</p>
                <p>My name is Aaron!</p>
                <p>I’m a graduate of BS Industrial Engineering 
                and I’m a developer and UX/UI Designer Aspirant</p>
                <a href={Resume} download className='download'>Download CV</a>
            </div>
            <img src={image1} alt='myphoto' className="home__body-image" />
        </div> 
    </div>
  )

}
export default Home
