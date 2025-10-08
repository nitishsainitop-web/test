import React from "react";
import GoldMiner from "../assets/Clientlogo/Goldminer.png";
import TopLogo from "../assets/Clientlogo/Top.png";
import Jayco from "../assets/Clientlogo/jayco.png";
import Alara from "../assets/Clientlogo/AlaraResources.png";

const logos = [
  { src: GoldMiner, name: "GoldMiner", hasWhiteBackground: true },
  { src: TopLogo, name: "TopLogo", hasWhiteBackground: true },
  { src: Jayco, name: "Jayco", hasWhiteBackground: true },
  { src: Alara, name: "Alara", hasWhiteBackground: true },
];

const LogoMarquee: React.FC = () => {
  // Duplicate the logos for seamless loop (left to right needs different arrangement)
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <div className="logo-marquee-container">
      <div className="logo-marquee-track">
        {duplicatedLogos.map((logo, idx) => (
          <div 
            key={idx}
            className={`logo-item ${
              logo.hasWhiteBackground ? 'logo-item-dark' : ''
            }`}
          >
            <img
              src={logo.src}
              alt={`${logo.name} logo`}
              className={`logo-image ${
                logo.hasWhiteBackground ? 'logo-image-dark' : ''
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoMarquee;