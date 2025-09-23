import React from 'react';
import { Footer7 } from '../blocks/footer-7';

const Footer: React.FC = () => {
  const footerSections = [
    {
      title: "Stranice",
      links: [
        { name: "Početna", href: "/" },
        { name: "O nama", href: "/about" },
        { name: "Usluge", href: "/services" },
        { name: "Kontakt", href: "/contact" },
      ],
    },
    {
      title: "Partneri",
      links: [
        { name: "Borer Chemie", href: "#" },
        { name: "Sanolabor", href: "#" },
        { name: "Saniswiss", href: "#" },
        { name: "Dastex", href: "#" },
      ],
    },
    {
      title: "Korisni linkovi",
      links: [
        { name: "WHO", href: "https://www.who.int" },
        { name: "RMOC", href: "#" },
        { name: "Swissmedic", href: "https://www.swissmedic.ch" },
        { name: "Alims", href: "#" },
      ],
    },
  ];

  const logo = {
    url: "/",
    src: "/topchemie-logo-main.png",
    alt: "Topchemie Medlab",
    title: "Topchemie Medlab",
  };

  return (
    <Footer7
      logo={logo}
      sections={footerSections}
      description=""
      socialLinks={[]}
      copyright=""
      legalLinks={[]}
    />
  );
};

export default Footer;