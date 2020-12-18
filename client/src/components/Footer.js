import React from 'react'
import jaredPic from '../images/jared.png'

function Footer() {
  return (
    <div className="footer-container">
      <div className="row">
        <div className="col-5 about-section">
          <img className="jared-img" src={jaredPic} alt="..." />
          <p className="footer-text">Hi, I'm Jared! I'm a Full Stack Developer with a certification from the University of Denver and hold my Bachelors of Science in Business Marketing.</p>
        </div>
        <div className="col-3">
          <ul>
          <a href="https://github.com/jaredseefried"><li>GitHub</li></a>
          <a href="https://linkedin.com/in/jaredseefried"><li>LinkedIn</li></a>
          </ul>
        </div>
        <div className="col-3">
          <ul>
            <a href="/"><li>Home</li></a>
            <a href="/portfolio"><li>Portfolio</li></a>
            <a href="/contact"><li>Contact</li></a>
            
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer