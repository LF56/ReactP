import React, { useState } from 'react';

const ProjectList = ({ category }) => {
  const [projects] = useState([
    {
      name: 'RunBuddy',
      image: 'runbuddy',
      github: 'https://github.com/LF56/RunBuddy',
      deployed: 'https://lf56.github.io/RunBuddy/',
      description: ''
    },
    {
      name: 'WorkDay Scheduler',
      image: 'wds',
      github: 'https://github.com/LF56/WorkScheduler',
      deployed: 'https://lf56.github.io/WorkScheduler/',
      description: ''
    },
    {
      name: 'Note-Taker',
      image: 'notetaker',
      github: 'https://github.com/LF56/NoteTaker-Application',
      deployed: 'https://notetaker-challenge.herokuapp.com/notes',
      description: ''
    },
    {
      name: 'TechBlog',
      image: 'techblog',
      github: 'https://github.com/LF56/TechBlog',
      deployed: 'https://spotblogfox.herokuapp.com/',
      description: ''
    },
    {
      name: 'goRecette',
      image: 'gorecette',
      github: 'https://github.com/LF56/goRecette',
      deployed: 'https://lf56.github.io/goRecette/',
      description: ''
    },
    {
      name: 'SafeSpot',
      image: 'safespot',
      github: 'https://github.com/LF56/SafeSpot',
      deployed: 'https://safespotblog.herokuapp.com/dashboard/',
      description: ''
    },
  ]);

  const image = projects.filter(photo => photo.category === category);
  
  return (
    <div className='row align-center'>
     
      <div class="grid-container">
          <div class="small">
          {image.map((image, i) => (
                <img src={require(`../../assets/images/${i + 1}.png`)} alt={image.name} className="card"  key={image.name} />))}
            <div class="card">  
              <div class="card-section">
                {projects.name}
              </div>
            </div>
          </div>
        </div>
        </div>
       
  
      
  );
};

export default ProjectList;
