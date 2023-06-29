import React, { useEffect, useRef } from 'react';
import './Portfolio.css';
import { Link } from 'react-router-dom';
import lottie from 'lottie-web';
import portfolio from '../../../public/portfolio.json';


const Portfolio = () => {

    const container = useRef(null);

    useEffect(() => {

        const anim = lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            autoplay: true,
            loop: true,
            animationData: portfolio
        })

        return () => {
            anim.destroy();
        };

    }, [])


    return (

        <div className='md:mt-10 mb-16' id='portfolio'>

            <div className='text-center md:flex justify-center items-center mb-6 md:mb-24'>
                <h1 className='text-2xl md:text-6xl font-extrabold italic'>My <span className='text-[#B27300]'>Portfolio</span></h1>
                <div className='mx-20 md:mx-0 mb-10 me-32 md:me-0 md:mb-0 w-52 mt-5 md:mt-0 md:w-48' ref={container}></div>
            </div>
            <div className='md:flex justify-center gap-6 mx-16 md:mx-0'>

                <div class="card-portfolio">
                    <img src='./Projects/Screenshot (256).png'  alt="" />
                    <div class="card-portfolio__content">
                        <p class="card-portfolio__title">Camp Champions School</p>
                        <p class="card-portfolio__description">Camp Champions School is an full-stack web application with an admin, instructor, student dashboard.
                            Students can select, pay for, and enroll in classes, while instructors have the ability to add new classes. Admins
                            can efficiently manage user roles and class administration.</p>
                        <div>
                            <Link to='https://648746dd0a8dcb53f29ba7cf--sparkly-pika-6c6eb4.netlify.app/'> <a className='mt-3 text-white  bg-[#B27300] btn-xs btn-outline px-3 py-1'>Live</a></Link>
                            <Link to='https://github.com/Tasinpronoy26/camp-champions-school-client'> <button className='mt-3 text-white  bg-[#B27300] btn-xs btn-outline px-3 py-1'>Client Site Code</button></Link>
                            <Link to='https://github.com/Tasinpronoy26/camp-champions-school-server'> <button className='mt-3 text-white  bg-[#B27300] btn-xs btn-outline px-3 py-1'>Server Site Code</button></Link>
                        </div>
                    </div>
                </div>

                <div class="card-portfolio">
                    <img src='./Projects/Screenshot (257).png' className='h-full w-full' alt="" />
                    <div class="card-portfolio__content">
                        <p class="card-portfolio__title">The Kitchen</p>
                        <p class="card-portfolio__description">The Kitchen is a user-friendly web application where users can explore chef profiles and access a wide range of recipes, providing a diverse culinary experience.
                            Users have the ability to mark recipes as favorites, customizing their recipe collection and enhancing their cooking
                            journey.

                        </p>
                        <div>
                            <Link to='https://the-kitchen-8da82.web.app/'> <a className='mt-3 text-white  bg-[#B27300] btn-xs btn-outline px-3 py-1'>Live</a></Link>
                            <Link to='https://github.com/Tasinpronoy26/the-kitchen-client'> <button className='mt-3 text-white  bg-[#B27300] btn-xs btn-outline px-3 py-1'>Client Site Code</button></Link>
                            <Link to='https://github.com/Tasinpronoy26/the-kitchen-server'> <button className='mt-3 text-white  bg-[#B27300] btn-xs btn-outline px-3 py-1'>Server Site Code</button></Link>
                        </div>
                    </div>
                </div>

                <div class="card-portfolio">
                    <img src='./Projects/Screenshot (258).png'  alt="" />
                    <div class="card-portfolio__content">
                        <p class="card-portfolio__title">Fun Car</p>
                        <p class="card-portfolio__description">Fun Car is a children's car shop website that offers a user-friendly environment with a lively toy marketplace featuring a
                            diverse range of listings from other users.Users can easily browse and explore various car categories and have the option to add their own toys for sale,
                            enhancing the interactive nature of the platform.
                        </p>
                        <div>
                            <Link to='https://646b623197a59d07b076dd6f--keen-halva-e37001.netlify.app/'> <a className='mt-3 text-white bg-[#B27300] btn-xs btn-outline px-3 py-1'>Live</a></Link>
                            <Link to='https://github.com/Tasinpronoy26/fun-cars-client'> <button className='mt-3 text-white  bg-[#B27300]  btn-xs btn-outline px-3 py-1'>Client Site Code</button></Link>
                            <Link to='https://github.com/Tasinpronoy26/fun-cars-server'> <button className='mt-3 text-white  bg-[#B27300] btn-xs btn-outline px-3 py-1'>Server Site Code</button></Link>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    );
};

export default Portfolio;
