import React, { useState, useEffect, useRef } from 'react'
// import mernImg from '../images/mern-stack-development.png'
import WAVES from 'vanta/dist/vanta.waves.min'
import MERNheader from './MERNheader'


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

    <div ref={myRef} className="header-container container-fluid col-12"><MERNheader /></div>
  )
}

export default Header