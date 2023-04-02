import React from 'react'
import Navbar from '../Navbar/Navbar'
import linkedin from '../../assets/image'
import gitlogo from '../../assets/github-logo.png'
import gmail from '../../assets/Gmail_logo_PNG6.png'
import '../Contact/Contact.css'




export default function Contact() {

  const email = "amzikhan711@gmail.com"
  const subject = ""
  const body = ""
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`

  function handleClick() {
    window.open(gmailUrl, "Compose Email", "height=400,width=600")
    console.log("object")
  }

  return (
    <div className='main'>
      <Navbar/>

      <img src={linkedin} id='linkedin' />
      <a id='linked-in-link' href="www.linkedin.com/in/MuzammilKhan19" target='_blank'>Linked In</a>

      <img src={gitlogo} id='git-hub' />
      <a id='git-hub-link' href="https://github.com/Muzi09" target='_blank'>Git Hub</a>

      <img src={gmail} id='gmail' />
      <a id='gmail-link' href='#' onClick={handleClick}>Gmail</a>
      

      

      
    </div>
  )
}
