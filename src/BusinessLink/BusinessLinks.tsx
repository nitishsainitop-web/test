import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import AusIcon from "../assets/BusinessLink/australia-gradient.png";
import GlobeIcon from "../assets/BusinessLink/globe-gradiant.png";

interface LinkCard {
  title: string;
  buttonText: string;
  icon: string;
  link: string; // ✅ new field for navigation path
}

const cards: LinkCard[] = [
  {
    title: "Corporates Australia-wide",
    buttonText: "Your Trusted Partner",
    icon: AusIcon,
    link: "/australia", // 👈 route for navigation
  },
  {
    title: "International Businesses",
    buttonText: "Prepare Your Expansion",
    icon: GlobeIcon,
    link: "/international", // 👈 route for navigation
  },
];

const BusinessLinks: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <div className="flex flex-col sm:flex-row justify-center gap-8 px-6 bg-transparent">
      {cards.map((card, idx) => (
        <div
          key={idx}
          className="flex items-center justify-between bg-gradient-to-r from-[#011f2f] via-[#001018] to-[#01121d] text-white rounded-2xl px-8 py-6 w-full min-h-[150px] shadow-md hover:shadow-xl transition-all duration-300"
        >
          {/* Left side: Text + Button */}
          <div className="flex flex-col justify-center gap-4">
            <h3 className="text-xl font-semibold leading-snug">
              {card.title}
            </h3>

            <button
              onClick={() => handleNavigation(card.link)}
              className="flex items-center justify-center gap-2 bg-lime-400 hover:bg-lime-500 text-black font-semibold px-5 py-2 rounded-full w-fit transition-colors text-sm"
            >
              {card.buttonText}
              <ArrowUpRight size={14} />
            </button>
          </div>

          {/* Right side: Icon */}
          <img
            src={card.icon}
            alt="icon"
            className="w-24 h-24 object-contain opacity-95"
          />
        </div>
      ))}
    </div>
  );
};

export default BusinessLinks;
