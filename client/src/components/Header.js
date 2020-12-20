import React from 'react'
import mernImg from '../images/mern-stack-development.png'


function Header() {
  return (

    <div className="header-container container-fluid col-12">
      <div className="row">
        <div className="col-xs-12 col-md-8 header-box mx-auto">
          <h1 className="header-h1 display-3">Full Stack Development</h1>
          <table>
            <tbody>
              <tr>
                <td><h2 className="header-info">Mongo Database</h2></td>
                <td><h2 className="header-info">Express API Routing</h2></td>
              </tr>
              <tr>
                <td><h2 className="header-info">React.js User Interface</h2></td>
                <td><h2 className="header-info">Built with Node.js</h2></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-xs-12 col-md-4">
          <img className="main-img" src={mernImg} alt="..." />
        </div>
      </div>
    </div>
  )
}

export default Header