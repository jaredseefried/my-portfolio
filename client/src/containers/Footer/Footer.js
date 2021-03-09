import React from 'react';

// Containers
import Container from '../../components/Container/Container';

//Components

//Images
import Jared from '../../images/jared.png'

//CSS 
import './Footer.css'

function Footer(props) {
  return (
    <Container className='footer-container col-12'>
      <div className='row'>
        <div className='about-me col-4'></div>
        <img src={Jared} alt='...' />
        <p className='about-me-text'>About Me</p>
        <div className='social-links col-4'></div>
        <a href='' target='_blank'></a>
        <a href='' target='_blank'></a>
        <a href='' target='_blank'></a>
        <div className='pages-links col-4'></div>
        <a href='' target='_blank'></a>
        <a href='' target='_blank'></a>
        <a href='' target='_blank'></a>
      </div>
    </Container>
  );
}

export default Footer;