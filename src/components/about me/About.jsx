import React from 'react'
import './About.css'
import main2 from '../../assets/images/deer.png'
const About = () => {
  return (
    <>
 
    <div className='about ' id='about'>
    <div className='end'></div>
      <h3 className='abt-text'>About
        <small className="text-body-light"> Me</small>
        </h3>
        {/* <div class="image_about"> */}
                <img class="image_about" src={main2} alt="Profile"/>
                <img class="image_about" src={main2} alt="Profile"/>
                <img class="image_about" src={main2} alt="Profile"/>
            {/* </div> */}
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
    Skills used - Python,Tkinter. <br/><br/>

     Rakesh Bakery shop website ( Duration August 2024 - November 2024 )
    Project Description: This project is a visually stunning and fully responsive bakery shop website designed to captivate users with its vibrant colors, mouth- watering imagery, and seamless functionality. Built using HTML, CSS, JavaScript, and Bootstrap, the website ensures an exceptional browsing experience across all screen resolutions, from mobile devices to desktops. This project demonstrates a blend of creativity and technical skills, resulting in a bakery shop website that is not only functional but also irresistibly delightful to explore. <br/> Skills used - HTML,CSS,Javascript,Bootstrap,Bootstrap CSS Framework.
    
    {/* <a class="link" href="https://rak0722.github.io/Rakesh-bakery-website/#">Project link - https://rak0722.github.io/Rakesh-bakery-website/#</a> */}
  
</dd>


<dt class="col-sm-3 left "></dt>
<dd class="col-sm-9 right"><a class="link" href="https://rak0722.github.io/Rakesh-bakery-website/#">Project link - https://rak0722.github.io/Rakesh-bakery-website/#</a></dd>
  
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
