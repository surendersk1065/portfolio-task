import React from 'react'
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

function Footer() {
  const date = new Date()
  const no = '+91 7397416604'
  const mail = 'surendersk1065@gmail.com'
  return (
    <div className='bg-dark text-center text-light mt-5 pt-5 pb-3'>
      <footer className=' '>
        <p className=' fs-4'>Get in Touch</p>
        <p>{no}</p>
        <a className='d-inline-block mb-2 text-decoration-none text-light' href="mailto:surendersk1065@gmail.com">surendersk1065@gmail.com</a><br></br>
        <a className='d-inline-block mb-2 text-decoration-none text-light' href='http://www.linkedin.com/in/surender-s-a1097a207' target='_blank'><span className='fs-4 me-2'><CiLinkedin /></span>Linked in</a><br></br>
        <a className='d-inline-block mb-2 text-decoration-none text-light' href='https://github.com/surendersk1065' target='_blank'><span className='fs-4 me-2'><FaGithub /></span>GitHub</a><br></br>
        <a href="resume.pdf" download
          className='text-decoration-none rounded bg-danger p-2 text-white d-inline-block mb-2'
        >Download my Resume</a>
        
        </footer>
        <p className='mt-4'>Copyright &copy; {date.getFullYear()} @Surender | All Rights Reserved</p>
    </div>

  )
}

export default Footer
