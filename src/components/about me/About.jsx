import React from 'react'
import './About.css'
import main1 from '../../assets/images/deer.png'
const About = () => {
  return (
    <>
 
    <div className='about ' id='about'>
    <div className='end'></div>
      <h3 className='abt-text'>About
        <small className="text-body-light"> Me</small>
        </h3>
        <img src={main1} alt="image"/>
        <img src={main1} alt="image"/>
        <img src={main1} alt="image"/>
        {/* <img src="./src/assets/images/deer.png" class="img-thumbnail" alt="image"/>
        <img src="./src/assets/images/deer.png" class="img-thumbnail" alt="image"/>
      <img src="./src/assets/images/deer.png" class="img-thumbnail" alt="image"/> */}

        <hr />


        {/* description about me */}

        <dl class="row">
  <dt class="col-sm-3 left">Name :</dt>
  <dd class="col-sm-9 right">Rakesh R</dd>
<p></p>
  <dt class="col-sm-3 left">Role :</dt>
  <dd class="col-sm-9 right">
     Python FullStack Web Developer
  </dd>
<p></p>
  <dt class="col-sm-3 left ">Education :</dt>
  <dd class="col-sm-9 right">
    <>BCA (Bachelor of Computer Application)(2021-2023)in Pachaiyappas college for Men.
    <br/> Class XII with 80% in 2021
    <br/> Class X with 70% in 2019</>
    </dd>
    <p></p>
  <dt class="col-sm-3 left ">Experience :</dt>
  <dd class="col-sm-9 right">Intership on IZEON INNOVATIVE PVT,LTD as a Python FullStack developer.
  </dd>
  <p></p>
  <dt class="col-sm-3 left ">Projects:</dt>
  <dd class="col-sm-9 right">Pronounce Pro ( Duration January 2024 - April 2024 ).
    <br/>
    The project involves using the Python programming language and the tkinterframework to create a Pronounce pro (TTS) application. Users can input text using graphical user interface built with tkinter, and the application will convert the text into speech using a speech synthesis engine. The project combines elements of user interface design, text processing and audio output to create a functional TTS application in Python.<br/>
  Skills used - Python,Tkinter.
  </dd>
  <p></p>
  <dt class="col-sm-3 left ">Certification Course:</dt>
  <dd class="col-sm-9 right">HDCA (Honours Diploma in Computer Applications)( September 2022 - Present).
Certificate Course in Active Basic IT ( April 2024 - Present ).
Certificate Course in Spoken English and Personality Development ( May 2024 -
Present ).

  </dd>

  {/* <dd class="col-sm-9 right"></dd> */}
  {/* <dd class="col-sm-9 right">Intership on IZEON INNOVATIVE PVT,LTD as a FullStack developer</dd> */}


  {/* <dt class="col-sm-3 left ">Education :</dt>
  <dd class="col-sm-9 right">
    <p>BCA (Bachelor of Computer Application) (2021-2023) in Pachaiyappas college for Men</p>
    </dd> */}

  {/* <dt class="col-sm-3">Nesting</dt>
  <dd class="col-sm-9">
    <dl class="row">
      <dt class="col-sm-4">Nested definition list</dt>
      <dd class="col-sm-8">I heard you like definition lists. Let me put a definition list inside your definition list.</dd>
    </dl>
  </dd> */}
</dl>


</div>

    </>
  )
}

export default About
