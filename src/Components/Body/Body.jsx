import React, { useContext } from 'react';
import Mine from '../Mine/Mine';
import About from '../About/About';
import Skill from '../Skill/Skill';
import Portfolio from '../Portfolio/Portfolio';
import Contact from '../../Contact/Contact';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Body = () => {

    const {toggle} = useContext(AuthContext);


    return (
        <div className={`${(!toggle) ? 'bg-[#181818] text-white transition-all duration-300' : 'bg-white transition-all duration-300'} `}>

            <Mine></Mine>
            <About></About>
            <Skill></Skill>
            <Portfolio></Portfolio>
            <Contact></Contact>

        </div>
    );
};

export default Body;