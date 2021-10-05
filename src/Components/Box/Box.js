import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Box.css';

const Box = (Props) => {
    const{name,duration,price,img}=Props.courses;
    return (
        <div className="course-container">
     <Col>
      <Card className="card-size">
        <Card.Img className="img-size" variant="top" src={img} />
        <Card.Body>
          <Card.Title> <h1>Course Name:{name}</h1></Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
          <h3> Coure Duration:{duration}</h3>
           <h3>Course Price :{price}</h3>
           <button className="btn btn-success">Parses</button>
        </Card.Body>
      </Card>
    </Col>
        </div>
    );
};

export default Box;