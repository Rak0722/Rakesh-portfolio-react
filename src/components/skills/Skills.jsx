import React from 'react'
import './Skills.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
// import {ProgressBar} from "ProgressBar"


import ProgressBar from 'react-bootstrap/ProgressBar';


const Skills = () => {
  return (
    <>
     <div className='contact' id='contact'>
     <div className='end'></div>
      <h3 className='abt-text'>My
        <small class="text-body-dark"> Skills</small>
        </h3>
 
    <div class="container">
        <div class="skill-box">
            <span class="title">HTML</span>

            <div class="skill-bar">
                <span class="skill-per html">
                    <span class="tooltip">50%</span>
                </span>
            </div>
        </div>

        <div class="skill-box">
            <span class="title">CSS</span>

            <div class="skill-bar">
                <span class="skill-per css">
                    <span class="tooltip">70%</span>
                </span>
            </div>
        </div>
        <div class="skill-box">
            <span class="title">JavaScript</span>

            <div class="skill-bar">
                <span class="skill-per javascript">
                    <span class="tooltip">50%</span>
                </span>
            </div>
        </div>
        <div class="skill-box">
            <span class="title">Bootstrap</span>

            <div class="skill-bar">
                <span class="skill-per bootstrap">
                    <span class="tooltip">30%</span>
                </span>
            </div>
        </div>

        <div class="skill-box">
            <span class="title">React js</span>

            <div class="skill-bar">
                <span class="skill-per bootstrap">
                    <span class="tooltip">30%</span>
                </span>
            </div>
        </div>
    </div>
    </div>
      

    </>
  )
}

export default Skills
