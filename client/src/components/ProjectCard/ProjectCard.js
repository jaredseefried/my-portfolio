import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Tilt from 'react-parallax-tilt';
import Modal from 'react-bootstrap/Modal'

import './ProjectCard.css'

function ProjectCard(props) {
  const [modalShow, setModalShow] = useState(false);

  return (
    <Tilt className='tilt'>
      <Card className='project-card' onClick={() => setModalShow(true)}>

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
      <Modal
        description={props.description}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </Tilt>
  );
}

export default ProjectCard;