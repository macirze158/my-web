import React from 'react'
import './contact.css'
import {MdOutlineMailOutline} from 'react-icons/md'
import {BsInstagram} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Message me</h5>
      <h2>Contact</h2>

      <div className="container contact__container">
        <div className="contact__options">

          <a href="mailto:maciej.rzeznikk@gmail.com" target="_blank" rel="noreferrer">
            <article className="contact__option">
              <MdOutlineMailOutline className="contact__option-icon"/>
              <h4>Email</h4>
              <h5>maciej.rzeznikk@gmail.com</h5>
            </article>
          </a>

          <a href="https://ig.me/m/maciekmrz" target="_blank" rel="noreferrer">
            <article className="contact__option">
              <BsInstagram className="contact__option-icon"/>
              <h4>Instagram</h4>
              <h5>maciekmrz</h5>
            </article>
          </a>

          <a href="https://api.whatsapp.com/send?phone=+48795702234" target="_blank" rel="noreferrer">
            <article className="contact__option">
              <BsWhatsapp className="contact__option-icon"/>
              <h4>WhatsApp</h4>
              <h5>Maciej Rzeźnik</h5>
            </article>
          </a>

        </div>
      </div>
    </section>
  )
}

export default Contact