import React from 'react';

type HeroButtonProps = {
  label: string; // The text displayed on the button
  href: string;  // The URL the button links to
};

const HeroButton: React.FC<HeroButtonProps> = ({ label, href }) => {
  return (
    <div className="two columns">
      <a className="button button-primary hero" href={href}>
        {label}
      </a>
    </div>
  );
};

export default HeroButton;
