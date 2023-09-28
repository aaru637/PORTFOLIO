import React from 'react';
import './ContactMeStyle.css';
import Contact from './Contact/Contact';

const ContactMe = () => {
    return (
        <div className='contactBody flex flex-col pt-8 pb-8' id='contactme'>
            <h1 className=' mb-5 font-extrabold font-Mooli sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center text-white'>
                Contact Me
            </h1>
            <p className=' mt-3 font-normal font-Mooli sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center text-white'>Please fill out the form below to contact myself.</p>
            <Contact />
        </div>
    )
}

export default ContactMe
