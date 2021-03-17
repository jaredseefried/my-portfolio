import React from 'react';
import Card from 'react-bootstrap/Card';
import Tilt from 'react-parallax-tilt';
import MyModal from 'react-bootstrap/Modal'

import './ProjectCard.css'

function ProjectCard(props) {

  return (
    <>
      <Tilt className='tilt'>
        <Card className='project-card' onClick={props.onClick}>
          <Card.Img
            variant="top"
            src={props.src}
            alt={props.alt}
            className={props.className}
            id={props.className + '-' + props.id} />
          <div className="overlay"></div>
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
          </Card.Body>
        </Card>
      </Tilt>
      <MyModal
        {...props}
      />
    </>
  );
}

export default ProjectCard;