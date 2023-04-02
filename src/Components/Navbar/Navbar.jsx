import React from 'react'
import './Navbar.css'
import { useNavigate } from 'react-router-dom'

export default function Navbar() {
    const navigate = useNavigate()


    const handleHome = () => {
        navigate('/')
    }

    const handleSkills = () => {
        navigate('/skills')
    }
    
    const handleProjects = () => {
        navigate('/projects')
    }

    const handleContact = () => {
        navigate('/contact')
    }


  return (
      <nav className='nav'>
            <button className='home' onClick={handleHome}>Home</button>
            <button className='skills' onClick={handleSkills}>Skills</button>
            <button className='projects' onClick={handleProjects}>Projects</button>
            <button className='contact' onClick={handleContact}>Contact</button>
        </nav>  
  )
}
