import React from 'react';
import Fade from 'react-reveal/Fade';

const Footer = () => {
  return (
    <footer className="bck-red">
      <Fade delay={500}>
        <div className="font-concert footer-logo-branding">Branding</div>
        <div className="footer-copyright">Copyright text goes here</div>
      </Fade>
    </footer>
  );
};

export default Footer;
