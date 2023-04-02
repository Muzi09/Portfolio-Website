import React from 'react'
import './Home.css'
import Navbar from '../Navbar/Navbar'

export default function Home() {


  return (
    <div className='main'>
      <Navbar></Navbar>

      <h1 className='greet'>Hello,</h1>
      <h2 className='about'>My name is Muzammil Khan and I am a Full stack web developer.</h2>
      <p className='para'>I am passionate & quick learning software engineer having good knowledge of Javascript
        & MERN stack development. I am good at creating RESTfull API's using technologies like
        Express JS, Node JS, MongoDB. I can also create responsive web pages using React JS.
        I am also good at Data structures & Algorithms and Problem solving.
      </p>
    </div>
  )
}
