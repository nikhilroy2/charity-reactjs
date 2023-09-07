import React from 'react';
import Carousel from './Carousel';
import MainContent from './MainContent';
function Homepage(props) {
    return (
        <div id='Homepage'>
            <Carousel></Carousel>
            <MainContent></MainContent>
        </div>
    );
}

export default Homepage;