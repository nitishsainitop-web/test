import React from "react";
import { ArrowUpRight } from "lucide-react";
import GregImg from "../assets/ClientStory/Greg.png";
import MarkImg from "../assets/ClientStory/Greg.png";
import EmilyImg from "../assets/ClientStory/Greg.png";
import JaycoLogo from "../assets/ClientStory/Greg.png";

interface CardProps {
    title: string;
    subtitle: string;
    description: string;
    buttonText: string;
    buttonColor: string;
    image: string;
    person: string;
    position: string;
    badge?: string;
    journeyLink: string; // New property for journey page URL
}

const cards: CardProps[] = [
    {
        title: "Growth Architects",
        subtitle: "FOR ESTABLISHED BUSINESS OWNERS",
        description:
            "Fuelling growth and minimising risk with smart financial strategies for organisations at every scale – local, national and global.",
        buttonText: "Accelerate Growth",
        buttonColor: "bg-lime-400 hover:bg-lime-500",
        image: GregImg,
        person: "Greg Marshall",
        position: "CFO",
        badge: JaycoLogo,
        journeyLink: "/journey/greg-marshall", // Add journey page URL
    },
    {
        title: "Efficiency Experts",
        subtitle: "FOR EMERGING BUSINESS OWNERS",
        description:
            "Empowering you to take your business further with strategic insights, smart structuring and streamlined systems.",
        buttonText: "Scale Up",
        buttonColor: "bg-lime-400 hover:bg-lime-500",
        image: MarkImg,
        person: "Mark Jones",
        position: "Operations Lead",
        journeyLink: "/journey/mark-jones", // Add journey page URL
    },
    {
        title: "Wealth Magicians",
        subtitle: "FOR FAMILIES AND INDIVIDUALS",
        description:
            "Securing you and your family's future with individualised financial support through life's changes, challenges and exciting new chapters.",
        buttonText: "Take Control",
        buttonColor: "bg-lime-400 hover:bg-lime-500",
        image: EmilyImg,
        person: "Emily Baker",
        position: "Chief Operating Officer",
        journeyLink: "/journey/emily-baker", // Add journey page URL
    },
];

const BusinessCards: React.FC = () => {
    const handleJourneyClick = (link: string, person: string) => {
        // You can use React Router's useNavigate or window.location for navigation
        console.log(`Opening ${person}'s journey: ${link}`);

        // For React Router (if using client-side routing)
        // navigate(link);

        // For regular link navigation
        window.location.href = link;
    };

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-4 mb-4 px-6 bg-gray-50">
            {cards.map((card, idx) => (
                <div
                    key={idx}
                    className="flex flex-col bg-gradient-to-b from-[#001018] to-[#011f2f] text-white rounded-3xl rounded-br-[5rem] overflow-hidden shadow-lg hover:scale-[1.02] transition-transform duration-300 group"
                >
                    {/* Content */}
                    <div className="p-8 flex flex-col flex-grow justify-between">
                        <div>
                            <h2 className="text-3xl font-bold leading-tight mb-2">
                            {card.title}
                        </h2>
                        <p className="text-sm font-semibold mb-3 uppercase bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                            {card.subtitle}
                        </p>
                        <p className="text-gray-300 text-sm leading-relaxed mb-6">
                            {card.description}
                        </p>
                        </div>
                        

                        <button
                            className={`flex items-center justify-center gap-2 ${card.buttonColor} text-black font-semibold px-5 py-2 rounded-full w-fit transition-colors duration-300`}
                        >
                            {card.buttonText} <ArrowUpRight size={16} />
                        </button>
                    </div>

                    {/* Image Section */}
                    <div className="relative overflow-hidden">
                        <div className="relative group-hover:h-60 h-52 transition-all duration-300">
                            <img
                                src={card.image}
                                alt={card.person}
                                className="w-full h-full object-cover rounded-t-[2rem] group-hover:scale-105 transition-transform duration-300"
                            />

                            {/* Hover Overlay with Clickable Link */}
                            <a
                                href={card.journeyLink}
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleJourneyClick(
                                        card.journeyLink,
                                        card.person
                                    );
                                }}
                                className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-[2rem] flex items-center justify-center cursor-pointer no-underline"
                            >
                                <div className="text-center text-white">
                                    <p className="text-lg font-semibold mb-1">
                                        Read {card.person.split(" ")[0]}'s
                                        Journey
                                    </p>
                                    <div className="w-12 h-0.5 bg-lime-400 mx-auto"></div>
                                    <p className="text-sm mt-2 text-lime-300">
                                        Click to explore
                                    </p>
                                </div>
                            </a>

                            {card.badge && (
                                <img
                                    src={card.badge}
                                    alt="Badge"
                                    className="absolute top-2 right-2 w-10 opacity-90 group-hover:opacity-70 transition-opacity duration-300"
                                />
                            )}
                        </div>

                        {/* Name and Position */}
                        <div className="absolute bottom-3 left-4 text-white opacity-120">
                            <p className="font-semibold text-sm">
                                {card.person}
                            </p>
                            <p className="text-xs text-white">
                                {card.position}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default BusinessCards;
