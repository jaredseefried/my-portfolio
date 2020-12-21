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
          <p className="footer-text">Hi, I'm Jared! I'm a Full Stack Developer with a certification from the University of Denver and hold my Bachelors of Science in Business Marketing.</p>
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
            
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer