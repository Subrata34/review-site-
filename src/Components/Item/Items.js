import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Items/Items.css';

const Items = (props) => {
    const{img,name,Occupation,nationality}=props.person;
    
    
    return (
        <div>
    <Col>
      <Card className="card-radius">
        <Card.Img className="img-size" variant="top" src={img} />
        <Card.Body className="cards-size">
          <Card.Title>Name:{name}</Card.Title>
          <h5>Passion:{Occupation}</h5>
          <h5>Nationality:{nationality}</h5>
          <Card.Text><span className="dark">Discription:</span>
            This is one of the best suceess person in the word .
          </Card.Text>
          <button className="btn btn-success">Detail Visit</button>
        </Card.Body>
      </Card>
    </Col>
  

        </div>
    );
};

export default Items;
