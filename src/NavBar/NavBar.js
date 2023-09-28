import React, { useState } from 'react';
import Logo from '../assets/logos/DK_LOGO_TRANSPARENT.png';
import './NavStyles.css';

const NavBar = () => {
    const [hamburger, setHamburger] = useState(false);
    const page = (page) => {
        const element = document.getElementById(page);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }
    return (
        <>
            <nav className='navbar'>
                <div>
                    <img src={Logo} alt='Logo start' width={45} height={45} className='logo' />
                </div>
                <div className='menu flex  text-black justify-evenly flex-row gap-16'>
                    <div onClick={() => {
                        page('home')
                    }} className='font-Mooli font-bold hover:border-b-2 pb-1 mt-3 hover:text-yellow-500 hover:border-yellow-500 active:border-yellow-500 active:border-b-2 cursor-pointer'>Home</div>
                    <div onClick={() => {
                        page('about')
                    }} className='font-Mooli font-bold hover:border-b-2 pb-1 mt-3 hover:text-yellow-500 hover:border-yellow-500 active:border-yellow-500 active:border-b-2 cursor-pointer'>About</div>
                    <div onClick={() => {
                        page('projects')
                    }} className='font-Mooli font-bold hover:border-b-2 pb-1 mt-3 hover:text-yellow-500 hover:border-yellow-500 active:border-yellow-500 active:border-b-2 cursor-pointer'>Projects</div>
                    <div onClick={() => {
                        page('contactme')
                    }} className='font-Mooli font-bold hover:border-b-2 pb-1 mt-3 hover:text-yellow-500 hover:border-yellow-500 active:border-yellow-500 active:border-b-2 cursor-pointer'>Contact Me</div>
                </div>
                <div>
                    <img src={Logo} alt='Logo' width={45} height={45} className='logo end' />
                </div>
                <div className='burger cursor-pointer ' onClick={(e) => {
                    e.preventDefault();
                    setHamburger(!hamburger);
                }}>
                    <div className='burger-menu'>
                        <div className={hamburger ? "burger-icon active" : "burger-icon inactive"}></div>
                        <div className={hamburger ? "burger-icon active" : "burger-icon inactive"}></div>
                        <div className={hamburger ? "burger-icon active" : "burger-icon inactive"}></div>
                    </div>
                </div>
            </nav>
            <div className={hamburger ? 'menu-bg view' : 'menu-bg unview'}>
                <div className={hamburger ? 'menu-card active' : 'menu-card inactive'}>
                    <div className='font-Mooli font-bold hover:border-b-2 pb-1 mt-3 hover:text-yellow-500 hover:border-yellow-500 active:border-yellow-500 active:border-b-2 cursor-pointer'>Home</div>
                    <div className='font-Mooli font-bold hover:border-b-2 pb-1 mt-3 hover:text-yellow-500 hover:border-yellow-500 active:border-yellow-500 active:border-b-2 cursor-pointer'>About</div>
                    <div className='font-Mooli font-bold hover:border-b-2 pb-1 mt-3 hover:text-yellow-500 hover:border-yellow-500 active:border-yellow-500 active:border-b-2 cursor-pointer'>Projects</div>
                    <div className='font-Mooli font-bold hover:border-b-2 pb-1 mt-3 hover:text-yellow-500 hover:border-yellow-500 active:border-yellow-500 active:border-b-2 cursor-pointer'>Contact Me</div>
                </div>
            </div>
        </>
    )
}
export default NavBar
