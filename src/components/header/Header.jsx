import React from 'react'
import './header.css'
import CTA from './CTA'
import HEADER_PHOTO from '../../assets/headerPhoto3.png'
import HeaderSocials from './HeaderSocials'
const Header = () => {
  return (
    <header>
      <div className="container header__container">
      <h5>Hello I'm</h5>
      <h1>Maciej Rzeźnik</h1>
      <h5 className="text-light">Fullstack Developer</h5>
      <CTA />
      <HeaderSocials />
        <div className='headerPhoto'>
          <img src={HEADER_PHOTO} alt="headerPhoto3" />
        </div>
      </div>
    </header>
  )
}

export default Header