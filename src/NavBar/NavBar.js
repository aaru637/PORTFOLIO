import Logo from '../assets/logos/DK_LOGO_TRANSPARENT.png';
import './NavStyles.css';
import { Link } from 'react-scroll';

const NavBar = () => {
    return (
        <>
            <nav className='navbar'>
                <Link to='home' activeClass='active' offset={-50} duration={500} spy={true} smooth={true} className='links ml-4 cursor-pointer'><img src={Logo} alt='Logo start' width={50} height={50} className='logo' /></Link>

                <div className='menu flex  text-black justify-evenly flex-row gap-16'>
                    <Link to='home' activeClass='active' offset={-50} duration={500} spy={true} smooth={true} className='links font-Mooli font-bold hover:border-b-2 hover:text-yellow-500 hover:border-yellow-500 active:border-yellow-500 active:border-b-2 cursor-pointer'>Home</Link>
                    <Link to='about' activeClass='active' offset={-50} duration={500} spy={true} smooth={true} className='links font-Mooli font-bold hover:border-b-2 hover:text-yellow-500 hover:border-yellow-500 active:border-yellow-500 active:border-b-2 cursor-pointer'>About</Link>
                    <Link to='projects' activeClass='active' offset={-50} duration={500} spy={true} smooth={true} className='links font-Mooli font-bold hover:border-b-2 hover:text-yellow-500 hover:border-yellow-500 active:border-yellow-500 active:border-b-2 cursor-pointer'>Projects</Link>
                    <Link to='contactme' activeClass='active' offset={-50} duration={500} spy={true} smooth={true} className='links font-Mooli font-bold hover:border-b-2 hover:text-yellow-500 hover:border-yellow-500 active:border-yellow-500 active:border-b-2 cursor-pointer'>Contact Me</Link>
                </div>
                <Link to='home' activeClass='active' offset={-50} duration={500} spy={true} smooth={true} className='links mr-4 cursor-pointer'><img src={Logo} alt='Logo start' width={50} height={50} className='logo' /></Link>
            </nav>
        </>
    )
}
export default NavBar
