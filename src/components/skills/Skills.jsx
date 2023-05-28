import React from 'react'
import './skills.css'
import {GoPrimitiveDot} from 'react-icons/go'

const Skills = () => {
  return (
    <section id='skills'>
      <h5>Technologies I worked with</h5>
      <h2>My Skills</h2>
      <div className="container skills__container">
        
        <div className="skills__languages">
          <h3>Programming Langugaes</h3>
          <div className="skills__content">
            <article className="skills__details">
              <GoPrimitiveDot className="skills__details-icon"/>
              <div>
                <h4>Java</h4>
              </div>
            </article>
            <article className="skills__details">
              <GoPrimitiveDot className="skills__details-icon"/>
              <div>
                <h4>C/C++</h4>
              </div>
            </article>
            <article className="skills__details">
              <GoPrimitiveDot className="skills__details-icon"/>
              <div>
                <h4>C#</h4>
              </div>
            </article>
            <article className="skills__details">
              <GoPrimitiveDot className="skills__details-icon"/>
              <div>
                <h4>JavaScript</h4>
              </div>
            </article>
          </div>
        </div>

        <div className="skills__technologies">
          <h3>Other Technologies</h3>
            <div className="skills__content">
              <article className="skills__details">
                <GoPrimitiveDot className="skills__details-icon"/>
                <div>
                  <h4>SQL</h4>
                </div>
              </article>
              <article className="skills__details">
                <GoPrimitiveDot className="skills__details-icon"/>
                <div>
                  <h4>HTML/CSS</h4>
                </div>
              </article>
              <article className="skills__details">
                <GoPrimitiveDot className="skills__details-icon"/>
                <div>
                  <h4>JUnit</h4>
                </div>
              </article>
              <article className="skills__details">
                <GoPrimitiveDot className="skills__details-icon"/>
                <div>
                  <h4>Selected Design Patterns</h4>
                </div>
              </article>
              <article className="skills__details">
                <GoPrimitiveDot className="skills__details-icon"/>
                <div>
                  <h4>React</h4>
                </div>
              </article>
              <article className="skills__details">
                <GoPrimitiveDot className="skills__details-icon"/>
                <div>
                  <h4>Spring</h4>
                </div>
              </article>
            </div>
        </div>

        <div className="skills__tools">
          <h3>Tools</h3>
              <div className="skills__content">
                <article className="skills__details">
                  <GoPrimitiveDot className="skills__details-icon"/>
                  <div>
                    <h4>Git</h4>
                  </div>
                </article>
                <article className="skills__details">
                  <GoPrimitiveDot className="skills__details-icon"/>
                  <div>
                    <h4>Jira</h4>
                  </div>
                </article>
                <article className="skills__details">
                  <GoPrimitiveDot className="skills__details-icon"/>
                  <div>
                    <h4>IntelliJ</h4>
                  </div>
                </article>
                <article className="skills__details">
                  <GoPrimitiveDot className="skills__details-icon"/>
                  <div>
                    <h4>Visual Studio Code</h4>
                  </div>
                </article>
                <article className="skills__details">
                  <GoPrimitiveDot className="skills__details-icon"/>
                  <div>
                    <h4>Unity</h4>
                  </div>
                </article>
              </div>
        </div>

      </div>
    </section>
  )
}

export default Skills