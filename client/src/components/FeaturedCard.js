import React from 'react';
import Card from 'react-bootstrap/Card';

function FeaturedCard(props) {
  return (
    <Card border="dark" className="col-4" style={{ width: '24rem' }}>
      <Card.Img
        variant="top"
        src={props.src}
        alt={props.alt}
        className={props.className}
        id={props.className + '-' + props.id} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.text}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default FeaturedCard;