import React, { useState, useEffect } from 'react';
import './Main.css'
import styled, { keyframes } from 'styled-components'
// import keyframes from 'styled-components'

function Main() {
  const adjectives = ['Interactive', 'Professional', 'Beautiful', 'Functional', 'Innovative']
  let [text, setText] = useState('')
  let i = 0

  useEffect(() => {
    changeTxt(adjectives[0])
  }, []);

  const changeTxt = () => {
    var interval = setInterval(function () {
      setText(adjectives[i++ % adjectives.length]);
    }, 2000);
    setTimeout(function () { clearInterval(interval); }, 10000);
  }

  const AnimateOnChange = keyframes`
  from {
    color: black;
  }
  to {
    color: white;
  }
  `;

  const AnimateMainTxt = styled.h1`
  animation: ${AnimateOnChange};
  animation-delay: 0s
  `;

  return (
    <div className="main-content-container">
      <h1 className="main-h1">You Too Deserve A Website That's</h1>

      <AnimateMainTxt className="main-h1 display-1" id="text-state">{text}</AnimateMainTxt>
      <h3 className="main-h3">Web Development by Jared Seefried</h3>
    </div>
  );
}

export default Main;