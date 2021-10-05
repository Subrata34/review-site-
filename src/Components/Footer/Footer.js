import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    return (
        <div className="bg-dark text-font">
        
        <Row>
          <Col>
          <h4>Company Address</h4>
          <h5><i class="fas fa-map-marker-alt"></i>Ashulia,Dhaka</h5>
          <h3><i class="fas fa-phone"></i>+88015698888525</h3>
          </Col>
          <Col>
          <ul >
              <li>coustomer number</li>
              <li> Help service </li>
              <li>Review</li>
              <li>Other documents</li>
              <li>About difference comands</li>
          </ul>
          </Col>
          <Col className="text-center" >
              <div className="footer-text"> 
             <h2> 
               <i  class="fab fa-facebook-f"></i>
               <i class="fab fa-instagram"></i>
               <i  class="fab fa-youtube"></i></h2>
             </div>
          </Col>
        </Row>
         </div>
     );
 };
 


export default Footer;