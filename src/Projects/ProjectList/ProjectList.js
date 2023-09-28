
import React from 'react'
import Shield from '../../assets/icons/project_images/SHIELD.png';
import IceCream from '../../assets/icons/project_images/ICECREAM.png';
import Heart from '../../assets/icons/project_images/HEART.png';
import './ProjectListStyle.css';


const ProjectList = () => {
    return (
        <div className='parent'>
            <div className=' shield'>
                <img className='mr-3' alt='shield' src={Shield} width={100} height={100} />
                <div className='content'>
                    <h2 className=' mt-3 font-Martian'>SHIELD</h2>
                    <p className=' mt-2 font-Exo'>It is a Location Sender application running on Android Platform. It sends a user current location to his neighbours or any others that added contacts through SMS only. Whenever the mobile device get an internet connection, there it gets the location using internet<span>cell tower</span>. Otherwise it gets the location using gps.</p>
                    <p className='mt-2'><span className='font-Exo font-bold'>Source Code : </span><a href='https://github.com/aaru637/SHIELD.git' target="blank" className=' text-blue-900 font-extrabold'>Click Here</a></p>
                </div>
            </div>
            <div className=' icecream'>
                <img className='mr-3' alt='icecream' src={IceCream} width={100} height={100} />
                <div className='content'>
                    <h2 className=' mt-3 font-Martian'>ICE-CREAM</h2>
                    <p className=' mt-2 font-Exo'>It is a Social Media Application running on Android Platform. It requires an Aadhaar number for register the user account. Main Objective of this app is to avoid cyberbullying through the aadhaar based registeration. Another advantage of this application is to which user can create a single account using their's Aadhaar Number.</p>
                    <p className='mt-2'><span className='font-Exo font-bold'>Source Code : </span><a href='https://github.com/aaru637/ICE-CREAM.git' target="blank" className=' text-blue-900 font-extrabold'>Click Here</a></p>
                </div>
            </div>
            <div className=' heart'>
                <img className='mr-3' alt='heart' src={Heart} width={100} height={100} />
                <div className='content'>
                    <h2 className=' mt-3 font-Martian'>HEART</h2>
                    <p className=' mt-2 font-Exo'>It is a Group based Communication Application running on Android Platform. In this there are two modes <span>1. Admin Mode.</span><span> 2. User Mode.</span> Admin registeration made by an System Administrator through submitting the required documents. On the Other hand, User's can join the respected admin group which the user credentials provided by the admin only.<span> This is mainly designed to my School Friends😉.</span></p>
                    <p className='mt-2'><span className='font-Exo font-bold'>Source Code : </span><a href='https://github.com/aaru637/HEART.git' target="blank" className=' text-blue-900 font-extrabold'>Click Here</a></p>
                </div>
            </div>
        </div>
    )
}

export default ProjectList
