import React from 'react';
import './Skills.css';
import Flutter from '../../assets/icons/about_page_icons/flutter.png';
import ReactLogo from '../../assets/icons/about_page_icons/react.png';
import API from '../../assets/icons/about_page_icons/api.png';

const SkillContent = () => {
    return (
        <div className='skills flex flex-wrap gap-4 mt-8 justify-center sm:gap-4 md:gap-8 lg:gap-12 xl:gap-16 2xl:gap-20'>
            <div className='Department flex flex-col justify-center cursor-default m-2 p-4'>
                <img src={Flutter} alt='Flutter Logo' className=' m-auto' width={50} height={50} />
                <div className=''>
                    <h2 className='sm:text-lg 
                     font-bold md:text-3xl text-center text-white font-Roboto_Slab'>App Design</h2>
                    <p className='sm:text-sm  md:text-2xl text-center font-Bree_Serif tracking-wide'>I developed 2 android apps using flutter.</p>
                </div>
            </div>
            <div className='Department flex flex-col justify-center cursor-default m-2 p-4'>
                <img src={ReactLogo} alt='React Logo' className=' m-auto' width={50} height={50} />
                <div className=''>
                    <h2 className='sm:text-lg  md:text-3xl font-bold text-center text-white  font-Roboto_Slab'>Web Design</h2>
                    <p className='sm:text-sm md:text-2xl text-center font-Bree_Serif  tracking-wide '>I developed this website using React.</p>
                </div>
            </div>
            <div className='Department flex flex-col justify-evenly cursor-default m-2 p-4'>
                <img src={API} alt='API Logo' className=' m-auto' width={60} height={60} />
                <div className=''>
                    <h2 className='sm:text-lg font-bold md:text-3xl text-center text-white  font-Roboto_Slab '>API Design</h2>
                    <p className='sm:text-sm   md:text-2xl font-normal text-center font-Bree_Serif  tracking-wide'>I still developing one API using Spring Boot.</p>
                </div>
            </div>
        </div>
    )
}

export default SkillContent
