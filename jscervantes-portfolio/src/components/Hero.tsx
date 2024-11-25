import React from 'react';
import HeroButton from './HeroButtons';

const Hero: React.FC = () => {
  return (
    <div className="container-flex row">
      <div id="name" className="big-box four columns">
        <h1>Jose Cervantes</h1>
      </div>
      <HeroButton label="Resume" href="/new_jscervantes_resume.pdf" />
      <HeroButton label="Github" href="https://github.com/jscervantes" />
      <HeroButton label="Linkedin" href="https://www.linkedin.com/in/josecervantesnyc/" />
      <HeroButton label="Music" href="https://soundcloud.com/s-vhs" />
    </div>
  );
};

export default Hero;
