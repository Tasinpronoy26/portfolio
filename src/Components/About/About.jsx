import React, { useEffect, useRef } from 'react';
import './About.css';
import lottie from 'lottie-web';
import animation from '../../../public/about.json';
import { Link } from 'react-router-dom';



const About = () => {
    
    
    const container = useRef(null);

    useEffect(() => {

        const anim = lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            autoplay: true,
            loop: true,
            animationData: animation
        })

        return () => {
            anim.destroy();
        };

    }, [])

    return (
        <div className='my-16 mx-10 md:ms-32 md:mx-36 md:flex justify-center items-center gap-24' id='about'>
            <div className='mb-10 md:me-32 md:mb-0 md:w-[600px]' ref={container}></div>
             
            <div className='md:w-96'>
                <h1 className='text-xl md:text-2xl mb-10 font-extrabold italic'>Hello <span className='text-[#B27300]'>Everyone</span></h1>
                <p className='text-2xl font-semibold italic md:text-left'>I'm an aspiring front-end developer with a strong desire to learn and grow in the field. I have a keen eye for detail and a passion
                    for creating user-friendly web experiences. I'm eager to contribute my skills and bring innovative ideas to the table as I embark on
                    my professional journey in web development.
                </p>
                <Link to="/moreinfo">
                    <button className='btn-more-info mx-10 md:mx-0'> MORE INFO
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default About;