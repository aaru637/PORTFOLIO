import React from 'react';
import Ben from '../../assets/images/Ben2.png';
import './ContentStyles.css';
import Location from '../../assets/icons/home_page_icons/Location.png';
import Instagram from '../../assets/icons/home_page_icons/Instagram.png';
import LinkedIn from '../../assets/icons/home_page_icons/LinkedIn.png';
import GitHub from '../../assets/icons/home_page_icons/GitHub.png';

const Content = () => {
    return (
        <>
            <section id='intro'>
                <div className='introContent '>
                    <span className='hello mt-2 sm:text-2xl md:text-5xl 2xl:text-6xl font-Mooli text-sky-600  tracking-wide'>
                        Hello,
                    </span><br />
                    <div className='introName font-Mooli tracking-wider'><span className=' iam sm:text-2xl md:text-5xl text-sky-600 overflow-clip '>I'm  <span className='  sm:text-yellow-500 tracking-wide md:text-5xl xl:text-6xl sm:text-lg'>Dhineshkumar D.</span></span></div><br />
                    <span className='sm:text-3xl md:text-5xl  xl:text-6xl text-green-500 font-Josefin tracking-wide overflow-clip'>Java Developer</span><br />

                    <div className=' location'>
                        <img src={Location} width={30} height={30} alt='Location' />
                        <span className='sm:text-xl text-black md:text-2xl sm:text-yellow-500 lg:text-4xl font-Roboto_Slab tracking-wider overflow-clip'> Krishnagiri, TamilNadu, India
                        </span>
                    </div>
                    <div className='links'>
                        <a href='https://instagram.com/dhineshkumar_d_2002?utm_source=qr&igshid=OGIxMTE0OTdkZA==' target='blank'><img className='link cursor-pointer  overflow-clip' src={Instagram} alt='Instagram' width={40} height={40} /></a>
                        <a href='https://www.linkedin.com/in/dhineshkumar-dhandapani-178334202' target='blank'><img className='link cursor-pointer  overflow-clip' src={LinkedIn} alt='LinkedIn' width={40} height={40} /></a>
                        <a href='https://github.com/aaru637' target='blank'><img className='link cursor-pointer  overflow-clip' src={GitHub} alt='GitHub' width={40} height={40} /></a>
                    </div>
                </div>
                <img src={Ben} alt='Profile' className='bg' />
            </section>
        </>
    )
}

export default Content
