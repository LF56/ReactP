import React from 'react';
import coverImage from '../../assets/images/selfphoto.jpg';
function About() {
  return (

    <div className="a">
    <div className="a-left">
      <div className="a-card bg"></div>
      <div className="a-card">
    <img src={coverImage}  alt="cover" />

      </div>
    </div>
    <div className="a-right">
      <h1 className="a-title">About Me</h1>
      <p className="a-sub">
        So Who is Leah Fox?
      </p>
      <p className="a-desc">
      Currently a student at Seminole State College finishing up my degree, along with taking a Full Stack Coding Course through the University of Central Florida. I have worked previously 5 years in retail and decided it was time to make a future for myself, so I turned to coding.
I enjoy being creative and trying new things and coding has given me an outlet to explore just that. Through all the trials and roadblocks, I remain determined and persistent on the end goal.
Outside coding and school, I love to bake, plan parties and watch sports. Connect with me!

      </p>
  
    </div>
  </div>
  );
}

export default About;
