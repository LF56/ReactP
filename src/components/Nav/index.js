import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
  document.title = 'Leah Fox'
  const {
    
    setCurrentCategory,
    contactSelected,
    currentCategory,
    setContactSelected,
    aboutSelected,
    setAboutSelected,
    resumeSelected,
    setResumeSelected
  } = props;

  return (
    <h3 className="flex-row px-1">
      <nav>
        <ul className="menu simple align-center">
        <li className={`mx-2 ${aboutSelected}`}>
            <span onClick={() => {setContactSelected(false); setAboutSelected(true); setCurrentCategory('about') }}>About Me</span>
          </li>

          <li className={`mx-2 ${contactSelected}`}>
            <span onClick={() => {setContactSelected(true); setAboutSelected(false); setCurrentCategory('contact')}}>Contact Me</span>
          </li>
          <li className={`mx-2 ${currentCategory}`}>
            <span onClick={() => {setContactSelected(false); setAboutSelected(false); setCurrentCategory('projects')}}>Projects</span>
          </li>
          <li className={`mx-2 ${resumeSelected}`}>
            <span onClick={() => {setContactSelected(false); setResumeSelected(false); setCurrentCategory('resume')}}>Resume</span>
          </li>

        </ul>
      </nav>
    </h3>
  );
}

export default Nav;
