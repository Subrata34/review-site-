import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Items from './Item/Items';
import './Carts.css';


const Cart = () => {
    const[Person,setPerson]=useState([])
    
    useEffect(()=>{
        fetch(`./api.json`)
        .then(res=>res.json())
        .then(data=>setPerson(data))

    },[])
   
    return (

        
         <div className="cart-size">
             <div className ="bg-warning ">
            <h1>Our Honerable Cheif Ghest </h1>
        </div>
            <Row xs={1} md={3} className="g-4">
  
                {
                  Person.map(persons=><Items 
                    person={persons}
                   ></Items>)

                }

            </Row>
            
           </div>
    );
};

export default Cart;