import React from 'react';
import './Languages.css'

function Languages(props) {

  return <img
    src={props.src}
    className='language-logo'
    alt={props.alt}
    id={props.alt} />

}



export default Languages;