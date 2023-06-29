import React, { useEffect, useRef } from 'react';
import { Typewriter } from 'react-simple-typewriter'
import { motion } from 'framer-motion';
import './Mine.css';
import { Link } from 'react-scroll';
import animation from '../../../public/hello.json';
import lottie from 'lottie-web';



const Mine = () => {

    const container = useRef(null);

    useEffect(() => {

        const anim = lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            autoplay: true,
            loop: false,
            animationData: animation
        })

        return () => {
            anim.destroy();
        };

    }, [])


    return (
        <div className='pt-36 md:flex justify-center items-center mx-8 md:mx-36'>

            <div className='ms-5 md:ms-0'>
                <div className='ms-10 md:ms-0 md:me-0 w-48 md:w-[400px]' ref={container}></div>
                <h1 className='text-xl md:text-6xl md:ms-3 text-center md:text-left font-extrabold mb-3 italic'>Md. Asik Reza Tasin</h1>
                <span className='mb-10 md:mb-0 text-xl md:text-4xl md:ms-3 font-bold text-[#B27300] italic'>
                    <Typewriter
                        words={['Specialized in React.js', 'MERN stack Web Developer']}
                        loop={20}
                        cursor
                        cursorStyle='|'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </span>
                <br />

                <div>

                    <div class="social-buttons">
                        <a href="https://github.com/Tasinpronoy26" class="social-button github">
                            <svg class="cf-icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="-2.5 0 19 19"><path d="M9.464 17.178a4.506 4.506 0 0 1-2.013.317 4.29 4.29 0 0 1-2.007-.317.746.746 0 0 1-.277-.587c0-.22-.008-.798-.012-1.567-2.564.557-3.105-1.236-3.105-1.236a2.44 2.44 0 0 0-1.024-1.348c-.836-.572.063-.56.063-.56a1.937 1.937 0 0 1 1.412.95 1.962 1.962 0 0 0 2.682.765 1.971 1.971 0 0 1 .586-1.233c-2.046-.232-4.198-1.023-4.198-4.554a3.566 3.566 0 0 1 .948-2.474 3.313 3.313 0 0 1 .091-2.438s.773-.248 2.534.945a8.727 8.727 0 0 1 4.615 0c1.76-1.193 2.532-.945 2.532-.945a3.31 3.31 0 0 1 .092 2.438 3.562 3.562 0 0 1 .947 2.474c0 3.54-2.155 4.32-4.208 4.548a2.195 2.195 0 0 1 .625 1.706c0 1.232-.011 2.227-.011 2.529a.694.694 0 0 1-.272.587z"></path></svg>
                        </a>
                        <a href="https://www.linkedin.com/in/md-asik-reza-tasin-989463280/" class="social-button linkedin">
                            <svg viewBox="0 -2 44 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                                <g id="Icons" stroke="none" stroke-width="1">
                                    <g transform="translate(-702.000000, -265.000000)">
                                        <path d="M746,305 L736.2754,305 L736.2754,290.9384 C736.2754,287.257796 734.754233,284.74515 731.409219,284.74515 C728.850659,284.74515 727.427799,286.440738 726.765522,288.074854 C726.517168,288.661395 726.555974,289.478453 726.555974,290.295511 L726.555974,305 L716.921919,305 C716.921919,305 717.046096,280.091247 716.921919,277.827047 L726.555974,277.827047 L726.555974,282.091631 C727.125118,280.226996 730.203669,277.565794 735.116416,277.565794 C741.21143,277.565794 746,281.474355 746,289.890824 L746,305 L746,305 Z M707.17921,274.428187 L707.117121,274.428187 C704.0127,274.428187 702,272.350964 702,269.717936 C702,267.033681 704.072201,265 707.238711,265 C710.402634,265 712.348071,267.028559 712.41016,269.710252 C712.41016,272.34328 710.402634,274.428187 707.17921,274.428187 L707.17921,274.428187 L707.17921,274.428187 Z M703.109831,277.827047 L711.685795,277.827047 L711.685795,305 L703.109831,305 L703.109831,277.827047 L703.109831,277.827047 Z" id="LinkedIn">
                                        </path>
                                    </g>
                                </g>
                            </svg>
                        </a>
                        <a href="https://www.facebook.com/tasin.pronoy/" class="social-button facebook">
                            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 0 310 310" space="preserve">
                                <g id="XMLID_834_">
                                    <path id="XMLID_835_" d="M81.703,165.106h33.981V305c0,2.762,2.238,5,5,5h57.616c2.762,0,5-2.238,5-5V165.765h39.064
    c2.54,0,4.677-1.906,4.967-4.429l5.933-51.502c0.163-1.417-0.286-2.836-1.234-3.899c-0.949-1.064-2.307-1.673-3.732-1.673h-44.996
    V71.978c0-9.732,5.24-14.667,15.576-14.667c1.473,0,29.42,0,29.42,0c2.762,0,5-2.239,5-5V5.037c0-2.762-2.238-5-5-5h-40.545
    C187.467,0.023,186.832,0,185.896,0c-7.035,0-31.488,1.381-50.804,19.151c-21.402,19.692-18.427,43.27-17.716,47.358v37.752H81.703
    c-2.762,0-5,2.238-5,5v50.844C76.703,162.867,78.941,165.106,81.703,165.106z"></path>
                                </g>
                            </svg>
                        </a>

                    </div>

                </div>


                <div>

                    <Link to='contact' spy={true} smooth={true} offset={-200} duration={800}>

                        <button class="btn-hire">
                            HIRE ME
                        </button>

                    </Link>
                    <Link to='about' spy={true} smooth={true} offset={-130} duration={800}>
                        <button className='btn-hire'>
                            ABOUT ME
                        </button>
                    </Link>
                </div>
            </div>
            <div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                >
                    <img className='mt-12 md:mt-0 w-[500px] ' src="./17546705_1671577429811968_6227381158536932072_o.jpg" alt="" />
                </motion.div>



            </div>
        </div>
    );
};

export default Mine;