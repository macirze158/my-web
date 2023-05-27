import React from 'react'
import './about.css'
import ABOUT_PHOTO from '../../assets/aboutPhoto.jpg'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2> About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ABOUT_PHOTO} alt="aboutPhoto" />
          </div>
        </div>
        
        <div className="about__content">
          
        </div>

      </div>
    </section>
  )
}

export default About