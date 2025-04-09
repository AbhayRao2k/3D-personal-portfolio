import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';

// Social media profiles data
export const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/AbhayRao2k',
    icon: FaGithub,
    isExternal: true,
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/abhay-rao-in',
    icon: FaLinkedin,
    isExternal: true,
  },
  {
    name: 'Email',
    url: 'mailto:abhayrao2k@gmail.com',
    icon: FaEnvelope,
    isExternal: true,
  },
];

const SocialLinks = ({ className }) => {
  return (
    <div className={`flex space-x-6 ${className || ''}`}>
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.url}
          {...(social.isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          className="text-secondary hover:text-white transition-colors duration-300"
          aria-label={social.name}
        >
          <social.icon className="text-2xl" />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks; 