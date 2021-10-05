import React from 'react';
import Cart from './Cart';
import Course from './Course/Course';
import Footer from './Footer/Footer';
import Header from './Header/Header';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Cart></Cart>
            <Footer></Footer>
        </div>
    );
};

export default Home;