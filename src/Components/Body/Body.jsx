import React from 'react';
import Mine from '../Mine/Mine';
import About from '../About/About';
import Skill from '../Skill/Skill';
import Portfolio from '../Portfolio/Portfolio';
import Contact from '../../Contact/Contact';

const Body = () => {
    return (
        <div className=' bg-gray-50'>

            <Mine></Mine>
            <About></About>
            <Skill></Skill>
            <Portfolio></Portfolio>
            <Contact></Contact>

        </div>
    );
};

export default Body;