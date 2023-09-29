import React, { useRef } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_fnkub66', 'template_n67gsxj', form.current, 'HOKQycW8LTRFWU_EH')
            .then((result) => {
                alert("Email Sent Successfully");
            }, (error) => {
                alert("Please Try again later.");
            });
    };
    return (
        <div className='contact'>
            <form className='contactForm' ref={form} onSubmit={sendEmail}>
                <input type='text' className='name font-Mooli mt-2' placeholder='Your Name' name="user_name" required /><br />
                <input type='email' className='email font-Mooli' placeholder='Your Email' name="user_email" required /><br />
                <textarea name='message' className='msg font-Mooli' cols={30} rows={10} required placeholder='Your Message'></textarea><br />
                <button value='Send' type='submit' className='submitBtn font-Martian'>Submit</button>
            </form>
        </div>
    )
}

export default Contact
