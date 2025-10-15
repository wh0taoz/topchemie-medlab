import React from 'react';
import { Footer7 } from '../blocks/footer-7';

const Footer: React.FC = () => {
  const footerSections = [
    {
      title: "Stranice",
      links: [
        { name: "Početna", href: "/" },
        { name: "Proizvodi", href: "/proizvodi/Medicina" },
        { name: "Kontakt", href: "/Kontakt" },
        { name: "Sajmovi i kongresi", href: "/sajmovi-kongresi" },
      ],
    },
    {
      title: "Partneri",
      links: [
        { name: "Borer Chemie", href: "https://www.borer.swiss/en/", target: "_blank" },
        { name: "Sanolabor", href: "https://www.sanolabor.si/", target: "_blank" },
        { name: "Saniswiss", href: "https://www.saniswiss.com/", target: "_blank" },
        { name: "Dastex", href: "https://www.dastex.com/en/", target: "_blank" },
      ],
    },
    {
      title: "Korisni linkovi",
      links: [
        { name: "WHO", href: "https://www.who.int", target: "_blank" },
        { name: "RMOC", href: "https://stopcarcinogensatwork.eu/", target: "_blank" },
        { name: "Swissmedic", href: "https://www.swissmedic.ch", target: "_blank" },
        { name: "Alims", href: "https://www.alims.gov.rs", target: "_blank" },
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