import React from 'react'
import './navigation.css'
import {FaHome} from 'react-icons/fa'
import {SiAboutdotme} from 'react-icons/si'
import {GiOpenBook} from 'react-icons/gi'
import {AiFillProject} from 'react-icons/ai'
import {AiFillMessage} from 'react-icons/ai'
import { useState } from 'react'

const Navigation = () => {
  return (
    <nav> 
      <a href="#"><FaHome /></a>
      <a href="#about"><SiAboutdotme /></a>
      <a href="#skills"><GiOpenBook /></a>
      <a href="#projects"><AiFillProject /></a>
      <a href="#contact"><AiFillMessage /></a>
    </nav>
  )
}

export default Navigation 