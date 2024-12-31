import React from 'react'
import './Navbar.css'
import main1 from '../../assets/images/rak.jpg'

// import 'bootstrap/dist/css/bootstrap.min.css'
const Navbar = () => {
  return (
   
    // navbar-light bg-light ----------!

    <div>
    <nav class="navbar fixed-top navbar-expand-lg ">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Portfolio</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="#"> <button class="button" data-text="Awesome">
    <span class="actual-text">&nbsp;Home&nbsp;</span>
    <span aria-hidden="true" class="hover-text">&nbsp;Home&nbsp;</span>
</button></a>
        <a class="nav-link" href="#about"><button class="button" data-text="Awesome">
    <span class="actual-text">&nbsp;About&nbsp;</span>
    <span aria-hidden="true" class="hover-text">&nbsp;About&nbsp;</span>
</button></a>

<a class="nav-link" href="#skills"><button class="button" data-text="Awesome">
    <span class="actual-text">&nbsp;Skills&nbsp;</span>
    <span aria-hidden="true" class="hover-text">&nbsp;Skills&nbsp;</span>
</button></a>
<a class="nav-link" href="#contact"><button class="button" data-text="Awesome">
    <span class="actual-text">&nbsp;Contact&nbsp;</span>
    <span aria-hidden="true" class="hover-text">&nbsp;Contact&nbsp;</span>
</button></a>


        {/* <button class="button" data-text="Awesome">
    <span class="actual-text">&nbsp;uiverse&nbsp;</span>
    <span aria-hidden="true" class="hover-text">&nbsp;uiverse&nbsp;</span>
</button> */}



        {/* <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a> */}
      </div>
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
                    <a href="./Rakesh latest resume.pdf" download="./Rakesh latest resume.pdf">
                    <button class="portfolio">
                    Download CV</button>
                    </a>
                </div>
            </div>
            <div class="image">
                <img src={main1} alt="Profile"/>
            </div>
        </div>
    </section>

   
</div>


  )
}

export default Navbar
