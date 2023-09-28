import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className='contact'>
            <form className='contactForm'>
                <input type='text' className='name font-Mooli mt-2' placeholder='Your Name' /><br />
                <input type='email' className='email font-Mooli' placeholder='Your Email' /><br />
                <textarea name='message' className='msg font-Mooli' cols={30} rows={10} placeholder='Your Message'></textarea><br />
                <button value='Send' type='submit' className='submitBtn font-Martian' onClick={(e) => {
                    e.preventDefault();
                }}>Submit</button>
            </form>
        </div>
    )
}

export default Contact
