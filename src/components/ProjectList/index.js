import React, { useState } from 'react';

const ProjectList = ({ category }) => {
  const [projects] = useState([
    {
                name: 'RunBuddy',
                github: 'https://github.com/LF56/RunBuddy',
                deployed: 'https://lf56.github.io/RunBuddy/',
                description: ''
            },
            {
                name: 'WorkDay Scheduler',
                github: 'https://github.com/LF56/WorkScheduler',
                deployed: 'https://lf56.github.io/WorkScheduler/',
                description: ''
            },
            {
                name: 'Note-Taker',
                github: 'https://github.com/LF56/NoteTaker-Application',
                deployed: 'https://notetaker-challenge.herokuapp.com/notes',
                description: ''
            },
            {
                name: 'TechBlog',
                github: 'https://github.com/LF56/TechBlog',
                deployed: 'https://spotblogfox.herokuapp.com/',
                description: ''
            },
            {
                name: 'goRecette',
                github: 'https://github.com/LF56/goRecette',
                deployed: 'https://lf56.github.io/goRecette/',
                description: ''
            },
            {
                name: 'SafeSpot',
                github: 'https://github.com/LF56/SafeSpot',
                deployed: 'https://safespotblog.herokuapp.com/dashboard/',
                description: ''
            },
  ]);

  const currentPhotos = projects.filter(photo => photo.category === category);

  return (
    <div>
      <div className="flex-row">
        {currentPhotos.map((image, i) => (
          <img
            src={require(`../../assets/images/${i+1}.png`)}
            alt={image.name}
            className=""
            key={image.name}
          />
        ))}
      </div>
    </div>

    
  );
};

export default ProjectList;
