import React, { useState, useEffect } from 'react';
import './Main.css'
import styled, { keyframes } from 'styled-components'
import mainWebDev from '../../images/mainWebDev.png'
import Button from '../../components/Button/Button'
import Container from '../../components/Container/Container'

function Main(props) {
  const adjectives = ['Interactive', 'Professional', 'Beautiful', 'Functional', 'Innovative']
  let [text, setText] = useState('Responsive')
  let i = 0

  useEffect(() => {
    changeTxt(adjectives[0])
  }, []);

  const changeTxt = () => {
    var interval = setInterval(function () {
      setText(adjectives[i++ % adjectives.length]);
    }, 2000);
    setTimeout(function () { clearInterval(interval); }, 11000);
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
    <Container className='main-container container-fluid col-12'>
      <div className='row col-12'>
        <div className="col-6">
          <h1 className="main-h1">You Too Deserve A Website That's</h1>
          <AnimateMainTxt className="main-h1 display-1" id="text-state">{text}</AnimateMainTxt>
          <h3 className="main-h3">Web Development by Jared Seefried</h3>
        </div>
        <div className='col-6'>
          <img id="mainwebdev" src={mainWebDev} alt="web development main image" />
        </div>
        <div className="buttons-container col-12">
          <div className="row row-container col-6">
            <Button type="button" variant='outline-primary'
              className="portfolio-button"
              id="portfolio-button" >
              Portfolio
              </Button>
            <Button type="button" variant='outline-secondary'
              className="contact-button"
              id="contact-button" >
              Contact
              </Button>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Main;