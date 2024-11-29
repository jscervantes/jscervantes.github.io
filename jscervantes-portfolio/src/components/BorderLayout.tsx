import React from 'react';
import '../styles/custom.css'; // Import your styles

type BorderLayoutProps = {
  children: React.ReactNode;
};

const BorderLayout: React.FC<BorderLayoutProps> = ({ children }) => {
  return (
    <div>
      {/* Top Bar */}
      <div id="top-bar" className="flex-title">
        <h3>Jose Cervantes</h3>
      </div>

      {/* Left and Right Bars */}
      <div id="left-bar"></div>
      <div id="right-bar"></div>

      {/* Content */}
        {children}
    </div>
  );
};

export default BorderLayout;
