import React from 'react'
import './projects.css'
import {BsGithub} from 'react-icons/bs'
import {BsYoutube} from 'react-icons/bs'
import APP1 from '../../assets/app1.png'
import APP2 from '../../assets/app2.png'
import APP3 from '../../assets/app3.png'
import APP4 from '../../assets/app4.jpg'
import APP5 from '../../assets/app5.png'
import APP6 from '../../assets/app6.1.png'

const data = [
  {
    id: 1,
    image: APP1,
    title: 'VR Plane Simulator (in progress...)',
    github: 'https://github.com/Maxthon72/PlaneSimulator-yawVR',
    youtube: ''
  },
  {
    id: 2,
    image: APP2,
    title: 'GOJI Ticketing System (in progress...)',
    github: 'https://github.com/Kadekk3939/goji-ticketing-system',
    youtube: ''
  },
  {
    id: 3,
    image: APP3,
    title: 'LOW vs HIGH Level Language Comparison',
    github: 'https://github.com/macirze158/JezykiAsemlerowe-Projekt',
    youtube: ''
  },
  {
    id: 4,
    image: APP4,
    title: 'Line Follower',
    github: 'https://github.com/macirze158/Line-Follower-Arduino-Uno',
    youtube: 'https://youtu.be/eemaDbeKJC8'
  },
  {
    id: 5,
    image: APP5,
    title: 'Tower Defense SFML',
    github: 'https://github.com/macirze158/Tower-Defense-SFML',
    youtube: ''
  },
  {
    id: 6,
    image: APP6,
    title: 'Portfolio Website',
    github: 'https://github.com/macirze158/my-web.git',
    youtube: ''
  }
]
const Projects = () => {
  return (
    <section id='projects'>
      <h5>Some of my recent</h5>
      <h2>Projects</h2>

      <div className="container projects__container">
        {
          data.map(({id, image, title, github, youtube}) => {
            return (
              <article key={id} className="project__item">
                <div className="project__item-img">
                  <img src={image} alt={title}/>
                </div>
                <h3>{title}</h3>
                <div className="project__item-cta">
                  {github!=='' ? (
                    <a href={github}className='btn' target="_blank" rel="noreferrer"><BsGithub /> Github</a>
                  ) : (
                    <div></div>
                  )}
                  {youtube!=='' ? (
                    <a href={youtube}className='btn btn-primary' target="_blank" rel="noreferrer"><BsYoutube /> YouTube</a>
                  ) : (
                    <div></div>
                  )}
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Projects