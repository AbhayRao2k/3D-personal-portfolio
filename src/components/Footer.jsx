import React from 'react';
import SocialLinks from './SocialLinks';

const Footer = () => {
  // Get the current year dynamically
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-tertiary py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-white text-lg font-semibold">Abhay Rao</p>
            <p className="text-secondary text-sm mt-1">© {currentYear} All Rights Reserved</p>
          </div>
          
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
