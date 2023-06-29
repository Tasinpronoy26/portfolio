import React, { useEffect, useRef } from 'react';
import './Home.css';
import { Link } from 'react-scroll';
import lottie from 'lottie-web';
import logo from '../../../public/logo.json'





const Home = () => {


    const container = useRef(null);

    useEffect(() => {
        const anim = lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            autoplay: true,
            loop: true,
            animationData: logo
        });

        return () => {
            anim.destroy();
        };
    }, []);



    const item =

        <>

            <Link className='link' activeClass="active" to='/' spy={true} smooth={true} offset={-130} duration={800}>Home</Link >
            <Link className='link' activeClass="active" to="about" spy={true} smooth={true} offset={-130} duration={800}>About</Link >
            <Link className='link' activeClass="active" to='skill' spy={true} smooth={true} offset={-90} duration={800}>Skill</Link >
            <Link className='link' activeClass="active" to='portfolio' spy={true} smooth={true} offset={-90} duration={800}>Portfolio</Link >
            <Link className='link' activeClass="active" to='contact' spy={true} smooth={true} offset={-220} duration={800}>Contact</Link >

        </>

    const handleDownloadResume = () => {
        const link = document.createElement('a');
        link.href = './Md. Asik Reza Tasin (RESUME).pdf';
        link.download = 'Md. Asik Reza Tasin (RESUME).pdf';
        link.click();
    };


    return (


        <div id='/'>

            <div className="navbar bg-white h-24 border shadow-md fixed z-50 max-w-sm md:max-w-screen-2xl">

                <div className="navbar-start lg:ms-36">
                    <div className="dropdown">
                        <label tabIndex={0} className="lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="dropdown-content grid grid-cols-1 font-serif mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {item}
                        </ul>
                    </div>

                    <div className='me-20 md:me-0 md:mb-0 md:w-24' ref={container}></div>
                    <p className=' text-2xl font-bold italic'>Tas<span className='text-[#B27300]'>in</span></p>

                </div>
                <div className="navbar-center  hidden lg:flex">
                    <ul className="lg:flex gap-6 font-serif px-1">

                        {item}

                    </ul>
                </div>
                <div className="navbar-end lg:me-36">
                    <button id='button-download' onClick={handleDownloadResume}>Download Resume</button>
                </div>
            </div>


        </div>






    );
};

export default Home;