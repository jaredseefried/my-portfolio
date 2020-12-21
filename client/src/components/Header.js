import React, { useState, useEffect, useRef } from 'react'
import mernImg from '../images/mern-stack-development.png'
import WAVES from 'vanta/dist/vanta.waves.min'


function Header() {
  const [vantaEffect, setVantaEffect] = useState(0)
  const myRef = useRef(null)
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(WAVES({
        el: myRef.current,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x4a7f,

      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])
  return (

    <div ref={myRef} className="header-container container-fluid col-12">
      <div className="row">
        <div className="col-12 header-box mx-auto">
          <h1 className="header-h1 display-3 text-center">FULL STACK DEVELOPMENT</h1>
          <table className="table">
            <tbody>
              <tr>
                <td><h2 className="header-info info-text">Mongo Database</h2></td>
                <td><h2 className="header-info">Express API Routing</h2></td>
              </tr>
              <tr>
                <td><h2 className="header-info info-text">React.js User Interface</h2></td>
                <td><h2 className="header-info">Built with Node.js</h2></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-12">
          {/* <img className="main-img col-12" src={mernImg} alt="..." /> */}
        </div>
      </div>
    </div>
  )
}

export default Header