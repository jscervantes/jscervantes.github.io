import React from 'react';
import solopic from '../assets/images/solopic.jpg';

const Intro: React.FC = () => {
  return (
    <div className="container-flex row">
      <div id="profile-pic" className="four columns" style={{ marginTop: '15%' }}>
        <img src={solopic} alt="Me working on the set of an Adobe commercial." />
      </div>
      <div className="big-box eight columns" style={{ marginTop: '15%' }}>
        <h3>A little about me...</h3>
        <p>
          I began keeping a physical journal in 2023. It was one of the best 
          decisions of my life. I am obsessed with making playlists for the bar I
          work at. I bike into the city at least 3 times a week. I keep 5 
          succulents alive. I learned most of what I know about food from the 
          Michelin-starred restaurant I used to work at. IFC Center is my 
          favorite movie theater in the city. I hate the heat but love desert 
          landscapes. My favorite sound is a gated reverb.
        </p>
      </div>
    </div>
  );
};

export default Intro;
