import React from 'react'
import mongo from '../images/mongoDB-logo.png'
import express from '../images/ExpressJS.png'
import reactLogo from '../images/react-logo.png'
import node from '../images/node-logo.png'

function MERNheader(){
  return (
<div className="header-box">
        <div className="row">
          <h1 className="header-h1 display-3 text-center">FULL STACK DEVELOPMENT</h1>
        </div>
        <div className="col-12">
          <div className="row">
            <div className="col-3 mern-logos">
              <img src={mongo} alt="..." />
            </div>
            <div className="col-3 mern-logos">
            <img src={express} alt="..." />
            </div>
            <div className="col-3 mern-logos">
            <img src={reactLogo} alt="..." />
            </div>
            <div className="col-3 mern-logos">
            <img src={node} alt="..." />
            </div>
          </div>
        </div>
      </div>

  )
}

export default MERNheader