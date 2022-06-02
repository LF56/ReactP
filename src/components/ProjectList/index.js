import React, { useState } from 'react';

const ProjectList = ({ category }) => {
  const [projects, setProject] = useState([
    {
      name: 'BookSpace',
      image: 'BookSpace',
      github: 'https://github.com/LF56/BookSpace',
      deployed: 'https://book-space-app.herokuapp.com/',
      description: 'A book search application designed for avid readers. This is a react based application. This will allow users to search and save books they want to read.'    
    },
    {
      name: 'WorkDay Scheduler',
      image: 'wds',
      github: 'https://github.com/LF56/WorkScheduler',
      deployed: 'https://lf56.github.io/WorkScheduler/',
      description: 'A simple calendar application that allows a user to save events for each hour of the day. Built using HTML, CSS, and jQuery'
    },
    {
      name: 'Note-Taker',
      image: 'notetaker',
      github: 'https://github.com/LF56/NoteTaker-Application',
      deployed: 'https://notetaker-challenge.herokuapp.com/notes',
      description: 'Application called Note Taker that can be used to write and save notes. This application will use an Express.js back end and will save and retrieve note data from a JSON file.'
    },
    {
      name: 'TechBlog',
      image: 'techblog',
      github: 'https://github.com/LF56/TechBlog',
      deployed: 'https://spotblogfox.herokuapp.com/',
      description: 'A CMS-style blog site where developers can publish their blog posts and comment on other developers posts as well.'
    },
    {
      name: 'goRecette',
      image: 'gorecette',
      github: 'https://github.com/LF56/goRecette',
      deployed: 'https://lf56.github.io/goRecette/',
      description: 'First Group project, built using HTML, CSS, Javascript, with the use of APIs. A application you to search recipes based off one food item'
    },
    {
      name: 'SafeSpot',
      image: 'safespot',
      github: 'https://github.com/LF56/SafeSpot',
      deployed: 'https://safespotblog.herokuapp.com/dashboard/',
      description: 'An application built following the MVC structure. Built using express, handlebars, MySQL2 and sequelize'
    },
  ]);

  const image = projects.filter(photo => photo.category === category);

  return (
    <div className='grid-x grid-margin-x small-up-2 medium-up-3'>
          {projects.map((image, i) => (
      <div className="cell" id="photo-cell">
            <div className="card" id="img-card">
              <img src={require(`../../assets/images/${i + 1}.png`)} alt={image.name} className="imgage-card" key={image.name} />
              <div className="card-section">
            <a className="hover" href={image.github}>{image.github}</a>
            <a className="hover" href={image.deployed}>{image.deployed}</a>
              </div>
            </div>
            <div className="middle">
              {image.description}
            </div>
      </div>))}
    </div>

    

  );
};

export default ProjectList;