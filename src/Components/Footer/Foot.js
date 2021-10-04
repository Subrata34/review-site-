import React from 'react';
import { Col,  Row } from 'react-bootstrap';
import './Foot.css';

const Foot = () => {
    return (
        <div className="bg-warning ">
        
       <Row>
         <Col>
         <h2>This is world wide setisfraction </h2>
         </Col>
         <Col>
         <ul className="li-decoration">
             <li>coustomer number</li>
             <li> Help service </li>
             <li>Review</li>
             <li>Other documents</li>
             <li>About difference comands</li>
         </ul>
         </Col>
         <Col>
         <h1>Company Address</h1>
         <h3>Ashulia,Dhaka</h3>
         <h3>Office Phone :+88015698888525</h3>
         </Col>
       </Row>
        </div>
    );
};

export default Foot;