import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
  const {
    categories = [],
    setCurrentCategory,
    contactSelected,
    currentCategory,
    setContactSelected,
    aboutSelected,
    setAboutSelected
  } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(setCurrentCategory.name); }, [setCurrentCategory]);

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

          {categories.map((category) => (
            <li
              className={`mx-1 ${currentCategory.name === category.name && !contactSelected }`} key={category.name} >

              <span onClick={() => { setCurrentCategory(category); setContactSelected(false);setAboutSelected(false) }}>
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </h3>
  );
}

export default Nav;
