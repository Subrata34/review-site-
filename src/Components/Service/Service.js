import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import Course from '../Course/Course';
import Header from '../Header/Header';
import Cart from '../Cart';

const Services = () => {
    const [courses,setCourses]=useState([]);
    useEffect(()=>{
            fetch('fakdedata.json')
            .then(res=>res.json())
            .then(data=>setCourses(data))
    },[])
    return (
        <div>
            <Header></Header>
               <Cart></Cart>
                <h3 className="text-center my-3">
                    Education refers to the discipline that is
                     concerned with methods of teaching </h3>
                     <h1>this is good service in this world </h1>
                    
            <div className="  row">
               {  
                    courses.map(course=><Course
                        course={course}
                    ></Course>)
               }
           </div>
           <Footer></Footer>
       </div>
          
            
         
        
    );
};

export default Services;