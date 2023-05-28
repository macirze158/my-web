import React from 'react'
import './about.css'
import ABOUT_PHOTO from '../../assets/aboutPhoto.jpg'
import {BsLinkedin} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

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
        <p>
          Hi! My name is Maciej Rzeźnik, and I'm a 22-year-old IT student at the Silesian University of Technology.
          With a strong determination and passion for technology, my ultimate goal is to become a skilled software developer.
          As I'm near the completion of my studies, <br />I'm actively seeking job opportunities that will allow me to apply and expand my knowledge in the field.
          In my free time, I enjoy sports and photography, which help me find balance and express my creativity. 
        </p>
          <div className='about__socials'>
            <a href='https://www.instagram.com/maciekmrz/' target="_blank" rel="noreferrer">
              <article className='about__social'>
                <h5>Instagram</h5>
                <small>Follow me!<br /></small>
                <BsInstagram className='about__icon' />
              </article>
            </a>
            <a href="https://www.linkedin.com/in/maciej-rze%C5%BAnik-407384205/" target="_blank" rel="noreferrer">
              <article className='about__social'>
                <h5>LinkedIn</h5>
                <small>View my profile<br /></small>
                <BsLinkedin className='about__icon' />
              </article>
            </a>
            <a href="https://github.com/macirze158" target="_blank" rel="noreferrer">
              <article className='about__social'>
                <h5>Github</h5>
                <small>See my projects<br /></small>
                <BsGithub className='about__icon' />
              </article>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About