import React, { useEffect, useState } from 'react';
import {  Row } from 'react-bootstrap';
import Box from '../Box/Box';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';


const Course = () => {
    const[count,setCount ]=useState([])
    useEffect(()=>{
        fetch(`./fakedata.json`)
        .then(res=>res.json())
        .then(data=>setCount(data));
    },[])
    
    return (
        <div>
            <Header></Header> 
        <div>
        <Row xs={1} md={2} className="g-4">
          { 
            count.map(course=><Box 
                courses={course}>

                </Box>)
           }
        </Row>
        </div>
        <Footer></Footer>
      </div>
    );
};

export default Course;