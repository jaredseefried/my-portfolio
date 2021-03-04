import React from 'react'
import jaredPic from '../images/jared.png'
import { AiFillGithub } from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'

function Footer() {
  return (
    <div className="footer-container col-12">
      <div className="row">
        <div className="col-xs-12 col-md-5 about-section">
          <img className="jared-img" src={jaredPic} alt="..." />
          <p className="footer-text">With a certificate in Full Stack Web Development, focusing on JavaScript and Node.js, this experienced technical engineer has 10+ years of experience working within Agile development life cycles as an active team contributor, result driven problem solver with a desire to master Object-Oriented Programming. </p>
        </div>
        <div className="col-xs-12 col-md-3">
          <ul>
            <a href="https://github.com/jaredseefried"><li className="footer-list-item"><AiFillGithub className="footer-icon github-icon" /></li></a>
            <a href="https://linkedin.com/in/jaredseefried"><li className="footer-list-item"><FaLinkedinIn className="footer-icon linkedin-icon" /></li></a>
          </ul>
        </div>
        <div className="col-xs-12 col-md-3">
          <ul>
            <a href="/"><li className="footer-list-item">Home</li></a>
            <a href="/portfolio"><li className="footer-list-item">Portfolio</li></a>
            <a href="/contact"><li className="footer-list-item">Contact</li></a>
            <a href='/resume' ><li className="footer-list-item">Resume</li></a>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer