import React from 'react'
import jaredPic from '../images/jared.png'

function Footer() {
  return (
    <div className="footer-container">
      <div className="row">
        <div className="col-5 about-section">
          <img className="jared-img" src={jaredPic} alt="..." />
          <p className="footer-text">this is some text</p>
        </div>
        <div className="col-3">
          <ul>
            <li>Link</li>
            <li>Link</li>
            <li>Link</li>
            <li>Link</li>
          </ul>
        </div>
        <div className="col-3">
          <ul>
            <li>Link</li>
            <li>Link</li>
            <li>Link</li>
            <li>Link</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer