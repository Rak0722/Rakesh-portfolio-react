import React from 'react'
import './Navbar.css'

// import 'bootstrap/dist/css/bootstrap.min.css'
const Navbar = () => {
  return (
   
    <div>
       
  
    <nav className="navbar fixed-top navbar-expand-lg bg-body-success">
  <div className="container-fluid">
    <a className="navbar-brand mb-0 h1">PORTFOLIO</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link " aria-current="page" href="#about">About Me</a>
        </li>
        <li class="nav-item">
          <a class="nav-link " aria-current="page" href="#skills">My Skills</a>
        </li>
        <li class="nav-item">
          <a class="nav-link " aria-current="page" href="#contact">Contact</a>
        </li>
        {/* <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li> */}
      </ul>
    </div>
  </div>
</nav>

{/* <div class="container-fluid fixed-top body"> */}
<section class="section " >
        <div class="section_container">
            <div class="content">
                <p class="subtitle">HELLO</p>
                <h1 class="title">
                    I'm <span>RAKESH<br/>a</span> Python Fullstack Web Developer
                </h1>
                <p class="description">
                    I am a recent graduate with a focus on IT. Eager to expand my knowledge in software development and
                    contribute to innovative projects. Graduated with a BCA degree and proficient in English and Tamil
                    languages. I seek challenging opportunities whare i can fully use my skills for the success of the
                    organization.
                </p>
                <div class="action_btns">
                    <button class="hire_me">Hire Me</button>
                    <a href="/Rakesh updated resume.pdf" download="/Rakesh updated resume.pdf">
                    <button class="portfolio">
                    Download CV</button>
                    </a>
                </div>
            </div>
            <div class="image">
                <img src="src\assets\images\deer.png" alt="Profile"/>
            </div>
        </div>
    </section>

   
</div>


  )
}

export default Navbar
