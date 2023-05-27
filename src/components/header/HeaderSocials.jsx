import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
         <a href="https://www.instagram.com/maciekmrz/" target="_blank" rel="noreferrer"><BsInstagram/></a>
        <a href="https://www.linkedin.com/in/maciej-rze%C5%BAnik-407384205/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/macirze158" target="_blank" rel="noreferrer"><BsGithub/></a>
    </div>
  )
}

export default HeaderSocials