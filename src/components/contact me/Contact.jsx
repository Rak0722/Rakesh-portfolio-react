import React from 'react'
import './Contact.css'
import './contact.js'
// import '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossorigin="anonymous" referrerpolicy="no-referrer" />'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
// import { faHouse } from '@awesome.me/kit-KIT_CODE/icons/classic/solid'


const Contact = () => {

   


  return (
    <div>
        <FontAwesomeIcon icon="fa-solid fa-envelope" />
        {/* <FontAwesomeIcon icon={faHouse} /> */}
       

        <meta charSet='UTF-8'/>
     <div className='contact' id='contact'>
     <div className='end'></div>
      <h3 className='abt-text'>Get in
        <small class="text-body-light"> Touch</small>
        </h3>

{/* card */}
<div className="card_details">
        <div class="card  ">contact:9028929292<br/> email:rakes.ramalingam22@gmail.com
  {/* <img src="src\assets\images\redcube.png" class="card-img" alt="backie"/> */}
  <div class="card-img-overlay">
   
  </div>
</div>

{/* form */}
        <form class="row form gy-2 gx-3 align-items-center">
<div class="form-floating mb-3">
  <input type="text" class="form-control" id="floatingtextarea" placeholder="Your Name"/>
  <label for="floatingtextarea">Name</label>
  <div class="valid-feedback">
      Looks good!
    </div>
</div>
<div class="form-floating mb-3">
  <input type="email" class="form-control" id="floatingInput" placeholder="@Email address"/>
  <label for="floatingInput">Email address</label>
  <div class="valid-feedback">
      Looks good!
    </div>
</div>



<div class="form-floating mb-3">
  <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2 "></textarea>
  <label for="floatingTextarea2">Comments</label>
</div>
{/* form ends */}






{/* <!-- Button trigger modal - */}
<button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Send
</button>

{/* <!-- Modal --> */}
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title title-dark fs-5" id="exampleModalLabel">Message sent successfully</h1>
        <button type="button" class="btn-close " data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        Thanks for sending a Message...&#128172;
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
        {/* <button type="button" class="btn btn-primary">Save changes</button> */}
      </div>
    </div>
  </div>
</div>
  
  </form>

  </div>

  
  <div class="credit">
      Created by <span id='rights'> &nbsp;Rakesh Ramalingam&nbsp;</span>all rights reserved!
    </div>


    </div>

    </div>
  )
}

export default Contact
