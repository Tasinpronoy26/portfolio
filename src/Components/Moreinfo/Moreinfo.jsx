import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import '../About/About';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';


const Moreinfo = () => {

    const {toggle} = useContext(AuthContext);

    const handleDownloadResume = () => {
        const link = document.createElement('a');
        link.href = './Md. Asik Reza Tasin (RESUME).pdf';
        link.download = 'Md. Asik Reza Tasin (RESUME).pdf';
        link.click();
    };

    const animationVariants = {
        initial: { opacity: 0, scale: 0 },
        animate: { opacity: 1, scale: 1 },
    };


    return (
        <div>
            <div id='/' className={`${(!toggle) ? 'bg-[#181818] text-white transition-all duration-300' : 'bg-slate-50 transition-all duration-300'}`}>

                <div className="navbar bg-white h-24 border shadow-md md:max-w-screen-2xl">

                    <div className="navbar-start ms-5 lg:ms-36">
                        <Link to='/'><a className="normal-case text-xl font-extrabold"><span className='text-[#B27300]'>ABOUT</span> ME</a></Link>
                    </div>

                    <div className="navbar-end me-5 lg:me-36">
                        <button id='button-download' onClick={handleDownloadResume}>Download Resume</button>
                    </div>
                </div>

                <div className='mt-12 md:flex justify-center items-center gap-32 mx-auto md:mx-36 '>
                    <div className='w-80 md:w-96 mx-10 md:mx-0'>
                        <h2 className='text-2xl font-bold italic'>Hello <span className='text-[#B27300]'>I'm Tasin</span></h2>
                        <h2 className='text-normal mt-5 font-bold italic'>I'm a Web Developer</h2>
                        <p className='text-sm mt-10 italic font-semibold'>As a MERN web developer, I can create awesome websites and applications. With React.js, I can build user-friendly and interactive interfaces that make the website come alive. React's efficient rendering ensures that everything runs smoothly and quickly.

                            On the backend, I use Node.js and Express.js to handle requests and build APIs. This helps me create a strong foundation for the website's functionality and ensures a seamless experience for users.

                            When it comes to storing data, I rely on MongoDB. It's a versatile database that allows me to save and retrieve information easily. MongoDB's scalability means that as the website grows, it can handle the increasing amount of data effortlessly.

                            Overall, as a MERN web developer, I have the skills to build amazing websites with user-friendly interfaces, efficient backends, and reliable data storage.</p>

                        <img className='w-64 mt-10' src="./signature.png" alt="" />
                        <p className='border-t w-48 mt-4 text-center border-black'>Signature</p>
                    </div>
                    <motion.div
                        initial="initial"
                        animate="animate"
                        variants={animationVariants}
                        transition={{ duration: 1 }}
                    >

                        <div className='ms-10 me-10 md:me-0 mt-10 md:mt-0 md:ms-0 md:text-left'>

                            <ul className="steps steps-vertical">
                                <li className="step step-warning ">

                                    <div className="card w-48 md:w-96 mb-12 ms-5 mt-5 rounded-none bg-base-100 shadow-lg">
                                        <div className="card-body text-left">

                                            <p className={`${!toggle ? 'font-bold italic text-black' : 'font-bold italic'}`}>BSc in CSE</p>
                                            <p className={`${!toggle ? 'font-bold italic text-black' : 'font-bold italic'}`}>Daffodil International University</p>
                                        </div>
                                    </div>

                                </li>
                                <li className="step step-warning">


                                    <div className="card md:w-96 mb-12 ms-5 mt-5  rounded-none bg-base-100 shadow-lg">
                                        <div className="card-body">
                                            <p className={`${!toggle ? 'font-bold italic text-black' : 'font-bold italic'}`}>10/7,F Block, Banasree, Dhaka, Bangladesh</p>
                                        </div>
                                    </div>

                                </li>

                                <li className="step step-warning">


                                    <div className="card md:w-96 mb-12 ms-5 mt-5  rounded-none bg-base-100 shadow-lg">
                                        <div className="card-body">

                                            <p className={`${!toggle ? 'font-bold italic text-black' : 'font-bold italic'}`}>01533767026</p>

                                        </div>
                                    </div>

                                </li>

                            </ul>
                              
                            <br />

                            <Link to='/'>
                                <button className='btn-more-info mx-10 md:mx-0'>
                                    Go Back Home
                                </button>
                            </Link>

                        </div>


                    </motion.div>

                </div>

            </div>





        </div>
    );
};

export default Moreinfo;