import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="flex-footer" className="row big-box">
      {/* Left Section */}
      <div className="copyright four columns">
        <p>Copyright &#169; 2021 Jose Cervantes</p>
        <a href="/privacypolicy.html">Legal Stuff</a>
      </div>

      {/* Center Section */}
      <div className="contact four columns">
        <a href="/contact.html">Contact Me!</a>
      </div>

      {/* Right Section */}
      <div className="flex-links four columns">
        <div>
          <a href="https://www.linkedin.com/in/josecervantesnyc/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
        <div>
          <a href="https://github.com/jscervantes" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
        <div>
          <a href="/assets/resume" target="_blank" rel="noopener noreferrer">Resume</a>
        </div>
        <div>
          <a href="https://twitter.com/jscervant" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
