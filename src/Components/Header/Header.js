import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Header = () => {
    return (
        <div className="row bg-dark">
            <div class="col-md-2">
                <h1 className="text-front">Programming World in Bangladesh</h1>

            </div>
            <div className="col-md-10">
                <div className="manu-container">
                    <div className="d-flex align-items-end ">
                       <Link to="/home" className="items"> 
                       {""}
                       <li >  Home </li></Link>
                       <Link to="/about" className="items"> 
                       {""}
                       <li >About </li></Link>
                       <Link to ="/service" className="items">{""} 
                       <li >Service </li></Link>
                        <Link to="/course" className="items">
                            {""}
                            <li>Course</li></Link>
                      
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Header;