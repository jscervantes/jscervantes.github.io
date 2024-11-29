import React from 'react';
import VideoBackground from './components/VideoBackground';
import BorderLayout from './components/BorderLayout';
import Hero from './components/Hero.tsx';
import Intro from './components/Intro.tsx';
import Footer from './components/Footer.tsx';

const App: React.FC = () => {
  return (
    <BorderLayout>
      {/* Add your content here */}
      {/* Video Background */}
      <VideoBackground posterSrc="/background/background.jpg" />
      <div className="container">
        <Hero />
        {/* Add more content as needed */}
        <Intro />
        <Footer />
      </div>

    </BorderLayout>
  );
};

export default App;
