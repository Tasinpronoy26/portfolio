import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import './Main.css';
import Home from '../Components/Home/Home';
import Footer from '../Footer/Footer';

const Main = () => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);


        return () => clearTimeout(timer);
    }, []);

    if (loading) {

        return <>

            <div className='flex justify-center my-80'>


                <div class="loader">
                    <svg viewBox="0 0 80 80">
                        <circle id="test" cx="40" cy="40" r="32"></circle>
                    </svg>
                </div>

                <div class="loader triangle">
                    <svg viewBox="0 0 86 80">
                        <polygon points="43 8 79 72 7 72"></polygon>
                    </svg>
                </div>

                <div class="loader">
                    <svg viewBox="0 0 80 80">
                        <rect x="8" y="8" width="64" height="64"></rect>
                    </svg>
                </div>





            </div>

        </>

    }

    return (
        <div>
            <Home></Home>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );


};

export default Main;