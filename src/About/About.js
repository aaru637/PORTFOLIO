import React from 'react';
import './AboutStyle.css';
import HeadContent from './Head/HeadContent';
import SkillContent from './Skills/SkillContent';

const About = () => {
    return (
        <div className='aboutBody pb-4' id='about'>
            <HeadContent></HeadContent>
            <SkillContent></SkillContent>
        </div>
    )
}

export default About
