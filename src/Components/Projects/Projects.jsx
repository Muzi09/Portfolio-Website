import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Projects.css'

export default function Projects() {
  return (
    <div className='main'>
      <Navbar />

      <div className='project-container'>


        <div className="project">

          <h2 className='heading'>Contacts Manager</h2>

          <p className='para-pro'>Developed a contacts manager website where user can Login/Signup, Import contacts using a CSV file, Delete or Search specific contact.
          </p><br />

          <p className='tech'>
            <span>Technology used</span> : Javascript | Node JS | React Js | Express JS | MongoDB Atlas | Json Web Token | Bcrypt | HTML | CSS | Multer | Csv Parser
          </p><br />

          <div className='links'>
            <a href="https://github.com/Muzi09/Contacts-Manager" target="_blank">Git Hub Link</a>
          </div>
        </div>


        <div className="project">

          <h2 className='heading'>Note Taker</h2>

          <p className='para-pro'>Note taker app where user can Login/Signup. Add notes, View previously posted notes, Delete specific note.
          </p><br />

          <p className='tech'>
            <span>Technology used</span> : Javascript |Node JS | React Js | Express JS | MongoDB | Json Web Token | Bcrypt | HTML | CSS
          </p><br />

          <div className='links'>
            <a href="https://note-taker-f.onrender.com/" target="_blank">Project Link</a><br />
            <a href="https://github.com/Muzi09/Note-Taker" target="_blank">Git Hub Link</a>
          </div>

        </div>
        <div className="project">
          <h2 className='heading'>Insta Clone</h2>

          <p className='para-pro'>Basic insta clone application where user can create posts using a form and can also view previously made posts.
          </p><br />

          <p className='tech'>
            <span>Technology used</span> : Javascript | Node JS | React Js | Express JS | MongoDB | HTML | CSS
          </p><br />

          <div className='links'>
            <a href="#" target="_blank">Project Link</a><br />
            <a href="https://github.com/Muzi09/Contacts-Manager" target="_blank">Git Hub Link</a>
          </div>
        </div>

        <div className="project">

          <h2 className='heading'>Tik Tac Toe Game</h2>

          <p className='para-pro'>Created a Tik Tak Toe game using Dom Manipulation, Plain Javascript, HTML, CSS.
          </p><br />

          <p className='tech'>
            <span>Technology used</span> : Javascript | HTML | CSS
          </p><br />

          <div className='links'>
            <a href="#" target="_blank">Project Link</a><br />
            <a href="https://github.com/Muzi09/Tik-Tic-Toe-Game" target="_blank">Git Hub Link</a>
          </div>


        </div>
        <div className="project">
          <h2 className='heading'>Movies Library</h2>

          <p className='para-pro'>A basic react application which search movies and shows relevant results using OMDB Api.
          </p><br />

          <p className='tech'>
            <span>Technology used</span> : Javascript | React | Axios | HTML | CSS
          </p><br />

          <div className='links'>
            <a href="#" target="_blank">Project Link</a><br />
            <a href="https://github.com/Muzi09/Day-1/tree/main/Task-3" target="_blank">Git Hub Link</a>
          </div>
        </div>

        <div className="project">
          <h2 className='heading'>Rock Paper Scissors Game</h2>

          <p className='para-pro'>Developed a Rock Paper Scissors game using plain Javascript where user can play against computer.
          </p><br />

          <p className='tech'>
            <span>Technology used</span> : Javascript | HTML | CSS
          </p><br />

          <div className='links'>
            <a href="#" target="_blank">Project Link</a><br />
            <a href="#" target="_blank">Git Hub Link</a>
          </div>
        </div>


        <div className="project">
          <h2 className='heading'>Countdown Timer</h2>

          <p className='para-pro'>A simple countdown timer where user can set time in seconds and start the timer.
          </p><br />

          <p className='tech'>
            <span>Technology used</span> : Javascript | React | HTML | CSS
          </p><br />

          <div className='links'>
            <a href="#" target="_blank">Project Link</a><br />
            <a href="#" target="_blank">Git Hub Link</a>
          </div>
        </div>


        <div className="project">
          <h2 className='heading'>Calculator</h2>

          <p className='para-pro'>A calculator with basic operations like Addition, Subtraction, Multiplication & Division.
          </p><br />

          <p className='tech'>
            <span>Technology used</span> : Javascript | HTML | CSS
          </p><br />

          <div className='links'>
            <a href="#" target="_blank">Project Link</a><br />
            <a href="#" target="_blank">Git Hub Link</a>
          </div>
        </div>

        <div className="project">
          <h2 className='heading'>Snapshot</h2>

          <p className='para-pro'>An application which fetches images and present them on screen based on the user input using flickrr Api
          </p><br />

          <p className='tech'>
            <span>Technology used</span> : Javascript | React | HTML | CSS
          </p><br />

          <div className='links'>
            <a href="#" target="_blank">Project Link</a><br />
            <a href="#" target="_blank">Git Hub Link</a>
          </div>
        </div>

        <div className="project"><h2 className='heading'>Students Portal</h2>

          <p className='para-pro'>Developed backend for a student portal to manage the students details. Described endpoints for Adding new students details, Updating student details, Deleting students detail, Get all students details or a specific student details. 
          </p><br />

          <p className='tech'>
            <span>Technology used</span> : Javascript | Node Js | Express JS | Mongoose
          </p><br />

          <div className='links'>
            <a href="#" target="_blank">Project Link</a><br />
            <a href="#" target="_blank">Git Hub Link</a>
          </div>
        </div>
        
      </div>

    </div>
  )
}
