import React,{ useState } from 'react';
import './portfolio.css';
import Figma1 from '../images/Figma-1.png';
import Figma2 from '../images/Figma-2.png';
import Figma3 from '../images/Figma-3.png';
import Html1 from '../images/html-1.png'
import Html2 from '../images/html-2.png'
import Html3 from '../images/html-3.png'
import Reactjs1 from '../images/Reactjs-1.png'
import Reactjs2 from '../images/Reactjs-2.png'
import Reactjs3 from '../images/Reactjs-3.png'


const Portfolio = () => {
    const [toggle, setToggle] = useState(1);

    const toggleTab = (index) =>{

      setToggle(index);

    }

  return (
    <div className='porfolio__personal pages__padding' id='portfolio'>
        <div className="personal__info">
            <div className="personal__portfolio">
                Personal Portfolio
            </div>
              <div className="personal__portfolio-categories">
                  <li className={toggle === 1 ? "active-content":"content"} onClick={() => toggleTab(1)}>Figma</li>
                  <li className={toggle === 2 ? "active-content":"content"}  onClick={() => toggleTab(2)}>HTML, CSS and Javascript</li>
                  <li className={toggle === 3 ? "active-content":"content"}  onClick={() => toggleTab(3)}>ReactJs</li>
              </div>
            <div className={toggle === 1 ? "personal__portfolio-content1" : "content-hide"}>
              <div className="personal__portfolio-project1">
                <img src={Figma1} alt='figma-image1' className="personal__portfolio-project1_image"/>
                <div className="personal__portfolio-project1_info">
                  <a target="_blank" rel="noreferrer" href='https://www.figma.com/file/Y5flRFBTJJR8kpgJhfCAFx/Untitled?type=design&node-id=0%3A1&t=rDRUNTSuxpHxdQmy-1'>Project 1</a>
                  <a target="_blank" rel="noreferrer" href='https://www.figma.com/file/Y5flRFBTJJR8kpgJhfCAFx/Untitled?type=design&node-id=0%3A1&t=rDRUNTSuxpHxdQmy-1'>Food App Design</a>
                  <p>A mobile App design about Food App, I prototyped the design using figma for the better User Experience. A personal project using Figma. </p>
                </div>
              </div>
              <div className="personal__portfolio-project2">
                <div className="personal__portfolio-project2_info">
                  <a target="_blank" rel="noreferrer" href='https://www.figma.com/file/CmBEe7SOUcl99yAxQkJpM7/Furniture-shop?type=design&t=rDRUNTSuxpHxdQmy-1'>Project 2</a>
                  <a target="_blank" rel="noreferrer" href='https://www.figma.com/file/CmBEe7SOUcl99yAxQkJpM7/Furniture-shop?type=design&t=rDRUNTSuxpHxdQmy-1'>Furniture Website Design</a>
                  <p>A Minimalistic design website using figma and a sample of my UI Design.A personal project using Figma. </p>
                </div>
                <img src={Figma2} alt='figma-image2' className="personal__portfolio-project2_image"/>
              </div>
              <div className="personal__portfolio-project3">
              <img src={Figma3} alt='figma-image3' className="personal__portfolio-project3_image"/>
                <div className="personal__portfolio-project3_info">
                  <a target="_blank" rel="noreferrer" href='https://www.figma.com/file/fBqqbYyeugbTKcZzScbHia/Untitled?type=design&t=rDRUNTSuxpHxdQmy-1'>Project 3</a>
                  <a target="_blank" rel="noreferrer" href='https://www.figma.com/file/fBqqbYyeugbTKcZzScbHia/Untitled?type=design&t=rDRUNTSuxpHxdQmy-1'>A Gamer website Design</a>
                  <p>My sample of UI Design about gaming website. A personal project using Figma. </p>
                </div>
              </div> 
            </div>


            <div className={toggle === 2 ? "personal__portfolio-content2" : "content-hide"}>
              <div className="personal__portfolio-project1">
                <img src={Html1} alt='html-image1' className="personal__portfolio-project1_image"/>
                <div className="personal__portfolio-project1_info">
                  <a target='_blank' rel="noreferrer" href='https://jaronjr26.github.io/Ocean-Floor/'>Project 1</a>
                  <a target='_blank' rel="noreferrer" href='https://jaronjr26.github.io/Ocean-Floor/'>Ocean Floor</a>
                  <p>A Website about the creatures that you 
                    can see in every floor of the oceans. A sample of my personal project using CSS,
                    HTML and Javascript  </p>
                </div>
              </div>
              <div className="personal__portfolio-project2">
                <div className="personal__portfolio-project2_info">
                  <a target='_blank' rel="noreferrer" href='https://jaronjr26.github.io/NeonLight/' >Project 2</a>
                  <a target='_blank' rel="noreferrer" href='https://jaronjr26.github.io/NeonLight/' >Neon Lights</a>
                  <p>A Website about turning on and off of lights with a simple animation. A sample of my personal project using CSS,
                    HTML and Javascript.</p>
                </div>
                <img src={Html2} alt='html-image2' className="personal__portfolio-project2_image"/>
              </div>
              <div className="personal__portfolio-project3">
              <img src={Html3} alt='html-image3' className="personal__portfolio-project3_image"/>
                <div className="personal__portfolio-project3_info">
                  <a target='_blank' rel="noreferrer" href='https://jaronjr26.github.io/Random-Quotes/' >Project 3</a>
                  <a target='_blank' rel="noreferrer" href='https://jaronjr26.github.io/Random-Quotes/' >Random Quotes</a>
                  <p>A Website about Generating random Quotes. A sample of my personal project using CSS,
                    HTML and Javascript. </p>
                </div>
              </div> 
            </div>


            <div className={toggle === 3 ? "personal__portfolio-content3" : "content-hide"}>
              <div className="personal__portfolio-project1">
                <img src={Reactjs1} alt='react-image1'  className="personal__portfolio-project1_image"/>
                <div className="personal__portfolio-project1_info">
                  <a target='_blank' rel="noreferrer" href='https://jaronjr26.github.io/panda-react/' >Project 1</a>
                  <a target='_blank' rel="noreferrer" href='https://jaronjr26.github.io/panda-react/' >Panda Website</a>
                  <p>A Website about Blogs, News and Environmental protection for pandas. A sample of my personal project using Reactjs. </p>
                </div>
              </div>
              <div className="personal__portfolio-project2">
                <div className="personal__portfolio-project2_info">
                  <a target='_blank' rel="noreferrer" href='https://jaronjr26.github.io/Travel-React/'>Project 2</a>
                  <a target='_blank' rel="noreferrer" href='https://jaronjr26.github.io/Travel-React/'>Travel Website</a>
                  <p>A Website about epic destination in the world A sample of my personal project using Reactjs. </p>
                </div>
                <img src={Reactjs2} alt='react-image2' className="personal__portfolio-project2_image"/>
              </div>
              <div className="personal__portfolio-project3">
              <img src={Reactjs3} alt='react-image3' className="personal__portfolio-project3_image"/>
                <div className="personal__portfolio-project3_info">
                  <a href='/'>Project 3</a>
                  <a href='/'>My Website Portfolio</a>
                  <p>This Website Portfolio contains my personal information, skills and contacts. A sample of my personal project using Reactjs </p>
                </div>
              </div> 
            </div>

            
        </div>
      
    </div>
  )
}

export default Portfolio
