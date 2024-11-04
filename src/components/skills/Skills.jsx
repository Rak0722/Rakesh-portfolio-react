import React from 'react'
import './Skills.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
// import {ProgressBar} from "ProgressBar"


import ProgressBar from 'react-bootstrap/ProgressBar';


const Skills = () => {
  return (
    <>
         <div className='skills ' id='skills'>
    <div className='end'></div>
      <h3 className='abt-text'>Programming
        <small class="text-body-light"> Skills</small>
        </h3>
<div class="box">
      <div className="text">
        <ul class="text1">
          <li class="text2"><p>HTML-5</p></li>
          <li class="text2"><p>CSS-3</p></li>
          <li class="text2"><p>JavaScript</p></li>
          <li class="text2"><p>Bootstrap</p></li>
          <li class="text2"><p>React JS</p></li>
          <li class="text2"><p>Python</p></li>
          <li class="text2"><p>MySQL</p></li>

        </ul>
      </div>
        <div class ='progressbox'>
          <div>
      <ProgressBar class='progress' animated now={98} label={`${98}%`} striped variant="dark" />
      </div>
      <div>
      < ProgressBar  class='progress' animated now={95} label={`${95}%`} striped variant="dark"  />
      </div>
      <div>
      <ProgressBar class='progress' animated now={75} label={`${75}%`} striped variant="dark" />
      </div>
      <div>
      <ProgressBar class='progress' animated now={85} label={`${85}%`} striped variant="dark"  />
    </div>
    <div>
      <ProgressBar class='progress' animated now={90} label={`${90}%`}  striped variant="dark" />
      </div>
      <div>
      <ProgressBar class='progress' animated now={80} label={`${80}%`} striped variant="dark" />
      </div>
      <div>
      <ProgressBar class='progress' animated now={60} label={`${60}%`} striped variant="dark" />
      </div>
    </div>
    </div>
</div>
      

    </>
  )
}

export default Skills
