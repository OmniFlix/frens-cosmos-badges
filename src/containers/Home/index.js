import React from 'react';
import './index.css';
import NavBar from '../NavBar';
import Header from './Header';
import FutureGroup from './FutureGroup';
import Footer from './Footer';
import Section1 from './Section1';
import Section2 from './Section2';

const Home = () => {
    return (
        <div className="content_div home">
            <NavBar />
            <Header />
            <div className="cards">
                <Section1 />
                <Section2 />
            </div>
            <FutureGroup />
            <Footer />
        </div>
    );
};

export default Home;
