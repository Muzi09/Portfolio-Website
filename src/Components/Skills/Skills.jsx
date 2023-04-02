import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import './Skills.css'

export default function Skills() {
  const [displayDiv, setDisplayDiv] = useState(false)
  const [divContent, setDivContent] = useState("")
  const [divColor, setDivColor] = useState('')


  const handleIn = (event) => {
    const contentMap = {
      js: "I possess a strong command of JavaScript concepts like Object-oriented programming, Asynchronous programming, Control flow etc. Additionally, I am proficient in utilizing JavaScript as both a client-side and server-side programming language, making me comfortable in developing full-stack applications",
      dsa: "I am well-acquainted with the most frequently utilized data structures in programming such as Arrays, Maps, Linked Lists, Binary Trees, Stacks, Queues and Graphs. Furthermore, I possess a solid understanding of various Algorithms including Sorting and Searching algorithms",
      html: "I possess a strong aptitude for creating website structures using HTML and i am proficient in utilizing all of the most commonly used HTML tags",
      css: "Not a professional UI designer, But I am well-versed in CSS and have the ability to provide websites with a visually pleasing and intuitive design. Furthermore, I am skilled in creating responsive websites that adapt seamlessly to different screen sizes, ensuring a consistent user experience across all devices",
      react: "I possess a high level of proficiency in creating dynamic and modern web pages using the JavaScript library React. With React, I am able to build complex user interfaces using reusable components, resulting in efficient and maintainable code. React also enables me to efficiently manage application state and provide real-time updates to the user interface, resulting in a highly responsive and engaging user experience",
      node: "I possess a deep understanding of Node.js, including its built-in modules such as Fs, Http, Os etc. With Node.js, I am able to develop server-side applications using JavaScript, allowing for seamless integration with client-side JavaScript frameworks like React",
      express: "I am proficient in creating RESTful APIs using the Express.js framework and have extensive experience in developing multiple projects using this technology",
      mongo: "I have extensive experience working on projects that utilize a MongoDB cluster as the database. As a result, I have gained in-depth knowledge of how to use MongoDB effectively as a database technology",
      mysql: "I possess a strong understanding of SQL and its fundamental concepts, as well as practical experience in using it as a database technology in several projects",
      github: <>I have extensive experience using GitHub as a version control tool in my projects. I am well-versed in the core concepts of Git, including creating and managing repositories, branching, merging, and resolving conflicts. <br /> <br /> Moreover, I have experience working collaboratively with team members using GitHub, and I am skilled in using GitHub's collaboration features, such as pull requests and code review</>,
    }

    const buttonId = event.target.id
    setDivContent(contentMap[buttonId])


    if (event.target.id === 'js' || event.target.id === 'html' || event.target.id === 'react' || event.target.id === 'express' || event.target.id === 'mysql') {
        setDivColor('lightgreen')
    }  
    else if (event.target.id === 'dsa' || event.target.id === 'css' || event.target.id === 'node' || event.target.id === 'mongo' || event.target.id === 'github') {
      setDivColor('lightcoral')
    }

    setDisplayDiv(true)
  }

  console.log(divColor)


  const handleOut = () => {
    setDisplayDiv(false)
  }

  return (

    <div className='main'>
      <Navbar />
      <div className='skill-div'>
        <button className='skill' onMouseOut={handleOut} id='js' onMouseOver={handleIn}>Javascript</button>
        <button className='skill' onMouseOut={handleOut} id='dsa' onMouseOver={handleIn}>Data Structures & Algorithms</button>
        <button className='skill' onMouseOut={handleOut} id='html' onMouseOver={handleIn}>HTML5</button>
        <button className='skill' onMouseOut={handleOut} id='css' onMouseOver={handleIn}>CSS3</button>
        <button className='skill' onMouseOut={handleOut} id='react' onMouseOver={handleIn}>React JS</button>
        <button className='skill' onMouseOut={handleOut} id='node' onMouseOver={handleIn}>Node JS</button>
        <button className='skill' onMouseOut={handleOut} id='express' onMouseOver={handleIn}>Express JS</button>
        <button className='skill' onMouseOut={handleOut} id='mongo' onMouseOver={handleIn}>Mongo DB</button>
        <button className='skill' onMouseOut={handleOut} id='mysql' onMouseOver={handleIn}>MY SQL</button>
        <button className='skill' onMouseOut={handleOut} id='github' onMouseOver={handleIn}>Git Hub</button>

        <div className={`info-div ${displayDiv ? 'fade-in' : 'fade-out'} ${(divColor === 'lightcoral') ? 'lightcoral' : 'lightgreen'} `}>
        {divContent}
        </div>
      </div>



    </div>
  )
}
