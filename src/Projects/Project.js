import React from 'react';
import ProjectList from './ProjectList/ProjectList';
import './ProjectStyles.css';

const Project = () => {
    return (
        <div className='projectBody flex flex-col pt-8 pb-8' id='projects'>
            <h1 className=' mb-5 font-bold font-Mooli sm:text-xl md:text-3xl lg:text-2xl xl:text-3xl text-center text-white'>
                My Projects
            </h1>
            <ProjectList />
        </div>
    )
}

export default Project
