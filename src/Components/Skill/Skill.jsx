import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import animation from '../../../public/skill.json'
import { CircularProgressBar } from "@tomickigrzegorz/react-circular-progress-bar";


const Skill = () => {
    const container = useRef(null);

    useEffect(() => {
        const anim = lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            autoplay: true,
            loop: true,
            animationData: animation
        });

        return () => {
            anim.destroy();
        };
    }, []);






    // available control variables
    const config = {
        percent: 90,
        colorSlice: "#E34F26",
        colorCircle: "#f1f1f1",
        fontWeight: 50,
        size: 100,
        fontSize: "1rem",
        textPosition: "1.5em" // needed element to move the percentage animation lower
    };
    const config2 = {
        percent: 90,
        colorSlice: "#1572B6",
        colorCircle: "#f1f1f1",
        size: 100,
        fontWeight: 50,
        fontSize: "1rem",
        textPosition: "1.5em" // needed element to move the percentage animation lower
    };
    const config3 = {
        percent: 85,
        colorSlice: "#F7DF1E",
        colorCircle: "#f1f1f1",
        size: 100,
        fontWeight: 50,
        fontSize: "1rem",
        textPosition: "1.5em" // needed element to move the percentage animation lower
    };
    const config4 = {
        percent: 90,
        colorSlice: "#61DAFB",
        colorCircle: "#f1f1f1",
        fontWeight: 50,
        size: 100,
        fontSize: "1rem",
        textPosition: "1.5em" // needed element to move the percentage animation lower
    };
    const config5 = {
        percent: 50,
        colorSlice: "#339933",
        colorCircle: "#f1f1f1",
        fontWeight: 50,
        size: 100,
        fontSize: "1rem",
        textPosition: "1.5em" // needed element to move the percentage animation lower
    };
    const config6 = {
        percent: 55,
        colorSlice: "#000000",
        colorCircle: "#f1f1f1",
        fontWeight: 50,
        size: 100,
        fontSize: "1rem",
        textPosition: "1.5em" // needed element to move the percentage animation lower
    };
    const config7 = {
        percent: 40,
        colorSlice: "#3FA036",
        colorCircle: "#f1f1f1",
        fontWeight: 50,
        size: 100,
        fontSize: "1rem",
        textPosition: "1.5em" // needed element to move the percentage animation lower
    };
    const config8 = {
        percent: 50,
        colorSlice: " #FFA726",
        colorCircle: "#f1f1f1",
        fontWeight: 50,
        size: 100,
        fontSize: "1rem",
        textPosition: "1.5em" // needed element to move the percentage animation lower
    };


    return (
        <div className='mt-16'>
            <h1 className='text-center mb-10 md:mb-0 text-2xl md:text-6xl font-extrabold italic'>Ski<span className='text-[#B27300]'>lls</span></h1>
            <div className='mx-12 md:mx-36 md:flex justify-center items-center' id='skill'>


                <div className='md:border-e mx-5 md:mx-0'>
                    <div className='grid grid-cols-2 md:flex md:px-10 gap-2 md:gap-10'>

                        <CircularProgressBar  {...config}>
                            <div className='flex justify-center items-center mb-5'> 
                                <img
                                    src="./Image of skill/html.png"
                                    style={{
                                        width: "40px",
                                        borderRadius: "50%",
                                        padding: "2px",

                                    }}

                                />
                                <p className='font-bold'>HTML</p>
                            </div>
                        </CircularProgressBar>

                        <CircularProgressBar  {...config2}>
                            <div className='flex justify-center items-center mb-5'>
                                <img
                                    src="./Image of skill/css-3.png"
                                    style={{
                                        width: "40px",
                                        borderRadius: "50%",
                                        padding: "2px",

                                    }}
                                    alt="Random image"
                                />
                                <p className='font-bold'>CSS</p>
                            </div>
                        </CircularProgressBar>
                        <CircularProgressBar  {...config3}>
                            <div className='flex justify-center items-center mt-20 md:mt-0 mb-5 gap-2'>
                                <img
                                    src="./Image of skill/JS.png.png"
                                    style={{
                                        width: "40px",
                                        borderRadius: "50%",
                                        padding: "2px",

                                    }}
                                    alt="Random image"
                                />
                                <p className='font-bold'>JS</p>
                            </div>
                        </CircularProgressBar>
                        <CircularProgressBar  {...config4}>
                            <div className='flex justify-center items-center mt-20 md:mt-0 mb-5'>
                                <img
                                    src="./Image of skill/physics.png"
                                    style={{
                                        width: "40px",
                                        borderRadius: "50%",
                                        padding: "2px",

                                    }}
                                    alt="Random image"
                                />
                                <p className='font-bold'>React</p>
                            </div>
                        </CircularProgressBar>


                    </div>
                    <div className='grid grid-cols-2 md:flex mt-24 md:px-10 gap-4 md:gap-10'>

                        <CircularProgressBar  {...config5}>
                            <div className='flex justify-center items-center mt-20 md:mt-0 mb-5'>
                                <img
                                    src="./Image of skill/node-js.png"
                                    style={{
                                        width: "40px",
                                        borderRadius: "50%",
                                        padding: "2px",

                                    }}

                                />
                                <p className='font-bold'>NodeJS</p>
                            </div>
                        </CircularProgressBar>

                        <CircularProgressBar  {...config6}>
                            <div className='flex justify-center items-center mt-20 md:mt-0 mb-5 md:gap-2'>
                                <img
                                    src="./Image of skill/express js.png"
                                    style={{
                                        width: "40px",
                                        borderRadius: "50%",
                                        padding: "2px",

                                    }}
                                    alt="Random image"
                                />
                                <p className='font-bold'>ExpressJS</p>
                            </div>
                        </CircularProgressBar>
                        <CircularProgressBar  {...config7}>
                            <div className='flex justify-center items-center mt-36 md:mt-0 mb-5'> 
                                <img
                                    src="./Image of skill/mongodb (2).png"
                                    style={{
                                        width: "40px",
                                        borderRadius: "50%",
                                        padding: "2px",

                                    }}
                                    alt="Random image"
                                />
                                <p className='font-bold'>MongoDB</p>
                            </div>
                        </CircularProgressBar>
                        <CircularProgressBar  {...config8}>
                            <div className='flex justify-center items-center mt-36 md:mt-0 mb-5'>
                                <img
                                    src="./Image of skill/firebase.png"
                                    style={{
                                        width: "40px",
                                        borderRadius: "50%",
                                        padding: "2px",

                                    }}
                                    alt="Random image"
                                />
                                <p className='font-bold'>Firebase</p>
                            </div>
                        </CircularProgressBar>



                    </div>
                </div>
                <div>
                    <div className='mb-10 mt-48 md:mt-0 me-20 md:me-0 md:mb-0 w-full' ref={container}></div>
                </div>

            </div>
        </div>

    );
};

export default Skill;