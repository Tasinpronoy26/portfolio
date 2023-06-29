import React, { useEffect, useRef } from 'react';
import './Contact.css';
import lottie from 'lottie-web';
import email from '../../public/email.json';
import emailjs, { sendForm } from '@emailjs/browser';
import Swal from 'sweetalert2'

const Contact = () => {

    const container = useRef(null);
    const form = useRef(null);

    const sendEmail = (e) => {
        e.preventDefault();

        const email = e.target.from_email.value;
        const name = e.target.from_name.value;
        const message = e.target.message.value;

        console.log(email);

        if (email && name && message) {
            emailjs.sendForm('service_t4v8tid', 'template_zgnwshg', form.current, 'MTNYO6P7IB6m5Ldvv')
                .then((result) => {


                    console.log(result);
                    Swal.fire({
                        title: 'Successfully Sent!',
                        text: 'Thank You!',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })


                })
        }


    };

    useEffect(() => {

        const anim = lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            autoplay: true,
            loop: true,
            animationData: email
        })

        return () => {
            anim.destroy();
        };

    }, [])
    return (

        <div className='mt-24'>
            <div className='md:mb-12 text-2xl text-center md:text-6xl font-extrabold italic'>Contact <span className='text-[#B27300]'>Us</span></div>
            <div className='md:flex justify-center items-center mb-24 md:gap-36' id='contact'>
                <div>

                    <div className='mx-auto md:mx-0 mb-10 me-32 md:me-0 md:mb-0 w-52 mt-5 md:mt-0 md:w-96 ' ref={container}></div>

                </div>
                <div className=' divider divider-horizontal'>

                </div>
                <div>
                    <div className="container">
                        <form className="form" ref={form} onSubmit={sendEmail}>
                            <div className="input">
                                <input required="" autoComplete="off" placeholder='Name' type="text" name='from_name' />
                                
                            </div>
                            <div className="input">
                                <input required="" autoComplete="off" placeholder='Email' name="from_email" type="email" />
                                
                            </div>
                            <div className="input">
                                <textarea required="" cols="30" rows="1" placeholder='Message' id="message" name='message'></textarea>
                                
                            </div>
                            <button >Send message →</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
