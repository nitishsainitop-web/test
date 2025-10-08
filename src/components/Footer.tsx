import {
    FaFacebookF,
    FaXTwitter,
    FaInstagram,
    FaYoutube,
    FaLinkedinIn,
} from "react-icons/fa6";
import { LuPhone } from "react-icons/lu";
import MapIcon from "../assets/Perth.svg";
import logo from "../assets/FortunaLogo-dark.png";

export default function Footer() {
    const sections = [
        {
            title: "Business Advisory",
            links: [
                "Business Advisory",
                "Tax & Account",
                "Legal Advice",
                "CFO & Bookkeeping",
                "Financial Planning",
                "Business Insurance Broking",
                "Fortuna Tech",
            ],
        },
        {
            title: "Tax & Account",
            links: [
                "Business Advisory",
                "Tax & Account",
                "Legal Advice",
                "CFO & Bookkeeping",
                "Financial Planning",
                "Business Insurance Broking",
                "Fortuna Tech",
            ],
        },
        {
            title: "Legal Advice",
            links: [
                "Business Advisory",
                "Tax & Account",
                "Legal Advice",
                "CFO & Bookkeeping",
                "Financial Planning",
                "Business Insurance Broking",
                "Fortuna Tech",
            ],
        },
        {
            title: "CFO & Bookkeeping",
            links: [
                "Business Advisory",
                "Tax & Account",
                "Legal Advice",
                "CFO & Bookkeeping",
                "Financial Planning",
                "Business Insurance Broking",
                "Fortuna Tech",
            ],
        },
        {
            title: "Financial Planning",
            links: [
                "Business Advisory",
                "Tax & Account",
                "Legal Advice",
                "CFO & Bookkeeping",
                "Financial Planning",
                "Business Insurance Broking",
                "Fortuna Tech",
            ],
        },
        {
            title: "Business Insurance Broking",
            links: [
                "Business Advisory",
                "Tax & Account",
                "Legal Advice",
                "CFO & Bookkeeping",
                "Financial Planning",
                "Business Insurance Broking",
                "Fortuna Tech",
            ],
        },
        {
            title: "Fortuna Tech",
            links: [
                "Business Advisory",
                "Tax & Account",
                "Legal Advice",
                "CFO & Bookkeeping",
                "Financial Planning",
                "Business Insurance Broking",
                "Fortuna Tech",
            ],
        },
    ];

    const discoverLinks = [
        "About Us",
        "Industries",
        "Your life journey",
        "Our Clients",
        "Locations",
        "Blog",
        "Community",
        "Resources",
        "Contact Us",
    ];

    return (
        <footer>
            {/* --- Top Section --- */}
            <div className="bg-brand text-white py-10 px-10">
                <div className="flex flex-wrap justify-between items-center mb-10 gap-6">
                    <div className="relative flex items-center gap-6">
                        <img
                            src={logo}
                            alt="Fortuna Advisory Group"
                            className="h-10"
                        />
                        <span className="absolute left-12">
                            <h3 className="text-white ">FORTUNA</h3>
                            <p className="text-sm -mt-1">Advisory Group</p>
                        </span>
                        <a
                            href="tel:+61892404211"
                            className="flex items-center gap-2 text-white hover:text-brandGreen"
                        >
                            <LuPhone className="size-5" /> (08) 9240 4211
                        </a>
                    </div>

                    <div className="flex items-center gap-4 text-white">
                        <a
                            className="rounded-full bg-gray-700 hover:text-brandGreen text-gray-700"
                            href="#"
                        >
                            <FaFacebookF
                                className="rounded-full bg-white pt-1 m-2"
                                size={18}
                            />
                        </a>
                        <a
                            className="rounded-full bg-gray-700 hover:text-brandGreen"
                            href="#"
                        >
                            <FaXTwitter className="m-2" size={18} />
                        </a>
                        <a
                            href="#"
                            className="rounded-full bg-gray-700 hover:text-brandGreen"
                        >
                            <FaInstagram className="m-2" size={18} />
                        </a>
                        <a
                            href="#"
                            className="rounded-full bg-gray-700 hover:text-brandGreen"
                        >
                            <FaYoutube className="m-2" size={18} />
                        </a>
                        <a
                            href="#"
                            className="rounded-full bg-gray-700 hover:text-brandGreen"
                        >
                            <FaLinkedinIn className="m-2" size={18} />
                        </a>
                    </div>
                </div>

                {/* --- Columns --- */}
                <div className="grid grid-cols-5 gap-10 border-t border-gray-700 pt-8">
                    {/* 1. Business Advisory */}
                    <div>
                        <h3 className="font-semibold mb-2">
                            {sections[0].title}
                        </h3>
                        {sections[0].links.map((link, idx) => (
                            <p
                                key={idx}
                                className="text-gray-400 text-sm hover:text-brandGreen cursor-pointer"
                            >
                                {link}
                            </p>
                        ))}
                    </div>

                    {/* 2. Tax & Account */}
                    <div>
                        <h3 className="font-semibold mb-2">
                            {sections[1].title}
                        </h3>
                        {sections[1].links.map((link, idx) => (
                            <p
                                key={idx}
                                className="text-gray-400 text-sm hover:text-brandGreen cursor-pointer"
                            >
                                {link}
                            </p>
                        ))}
                    </div>

                    {/* 3. Legal Advice */}
                    <div>
                        <h3 className="font-semibold mb-2">
                            {sections[2].title}
                        </h3>
                        {sections[2].links.map((link, idx) => (
                            <p
                                key={idx}
                                className="text-gray-400 text-sm hover:text-brandGreen cursor-pointer"
                            >
                                {link}
                            </p>
                        ))}
                    </div>

                    {/* 4. CFO & Bookkeeping */}
                    <div className="border-r border-gray-700 pr-4">
                        <h3 className="font-semibold mb-2">
                            {sections[3].title}
                        </h3>
                        {sections[3].links.map((link, idx) => (
                            <p
                                key={idx}
                                className="text-gray-400 text-sm hover:text-brandGreen cursor-pointer"
                            >
                                {link}
                            </p>
                        ))}
                    </div>

                    {/* 5. Discover */}
                    <div>
                        <h3 className="font-semibold mb-2">Discover</h3>
                        {discoverLinks.map((link, idx) => (
                            <p
                                key={idx}
                                className="text-gray-400 text-sm hover:text-brandGreen cursor-pointer"
                            >
                                {link}
                            </p>
                        ))}
                    </div>

                    {/* 6. Financial Planning */}
                    <div>
                        <h3 className="font-semibold mb-2">
                            {sections[4].title}
                        </h3>
                        {sections[4].links.map((link, idx) => (
                            <p
                                key={idx}
                                className="text-gray-400 text-sm hover:text-brandGreen cursor-pointer"
                            >
                                {link}
                            </p>
                        ))}
                    </div>

                    {/* 7. Business Insurance Broking */}
                    <div>
                        <h3 className="font-semibold mb-2">
                            {sections[5].title}
                        </h3>
                        {sections[5].links.map((link, idx) => (
                            <p
                                key={idx}
                                className="text-gray-400 text-sm hover:text-brandGreen cursor-pointer"
                            >
                                {link}
                            </p>
                        ))}
                    </div>

                    {/* 8. Fortuna Tech */}
                    <div>
                        <h3 className="font-semibold mb-2">
                            {sections[6].title}
                        </h3>
                        {sections[6].links.map((link, idx) => (
                            <p
                                key={idx}
                                className="text-gray-400 text-sm hover:text-brandGreen cursor-pointer"
                            >
                                {link}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center gap-16 w-full py-10">
                <div className="flex gap-16 items-center">
                    <div className="relative flex flex-col items-center">
                        <img
                            src={MapIcon}
                            alt="Map icon"
                            className="w-14 h-14"
                        />
                        {/* black dot on top */}
                        <div className="absolute top-6 -left-1 w-3 h-3 bg-black rounded-full"></div>
                        <p className="font-semibold text-lg">Perth</p>
                    </div>
                    <div className="relative flex flex-col items-center">
                        <img
                            src={MapIcon}
                            alt="Map icon"
                            className="w-14 h-14"
                        />
                        {/* black dot on top */}
                        <div className="absolute top-7 left-12 w-3 h-3 bg-black rounded-full"></div>
                        <p className="font-semibold text-lg">Sydney</p>
                    </div>
                    <div className="relative flex flex-col items-center">
                        <img
                            src={MapIcon}
                            alt="Map icon"
                            className="w-14 h-14"
                        />
                        {/* black dot on top */}
                        <div className="absolute top-8 left-15 w-3 h-3 bg-black rounded-full"></div>
                        <p className="font-semibold text-lg">Melbourne</p>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center gap-4">
                    <h2 className="text-3xl font-semibold">
                        20+ Locations Across Australia
                    </h2>
                    <p className="bg-brandGreen py-2 px-6 rounded-full font-semibold text-lg">
                        Find Your Nearest Office
                    </p>
                </div>

                <div className="flex gap-16 items-center">
                    <div className="relative flex flex-col items-center">
                        <img
                            src={MapIcon}
                            alt="Map icon"
                            className="w-14 h-14"
                        />
                        {/* black dot on top */}
                        <div className="absolute top-9 left-10 w-3 h-3 bg-black rounded-full"></div>
                        <p className="font-semibold text-lg">Adelaide</p>
                    </div>
                    <div className="relative flex flex-col items-center">
                        <img
                            src={MapIcon}
                            alt="Map icon"
                            className="w-14 h-14"
                        />
                        {/* black dot on top */}
                        <div className="absolute top-7 left-14 w-3 h-3 bg-black rounded-full"></div>
                        <p className="font-semibold text-lg">Brisbane</p>
                    </div>
                    <div className="relative flex flex-col items-center">
                        <img
                            src={MapIcon}
                            alt="Map icon"
                            className="w-14 h-14"
                        />
                        {/* black dot on top */}
                        <div className="absolute top-12 left-11 w-3 h-3 bg-black rounded-full"></div>
                        <p className="font-semibold text-lg">Hobart</p>
                    </div>
                </div>
            </div>

            <div className="bg-[#f8f8f8] flex justify-center items-center flex-col text-center text-gray-600 text-sm gap-2">
                <p className="py-8">
                    Liability Limited by a scheme approved under The
                    Professional Standards Legislation.
                </p>
                <div className="bg-brandGreen w-[80%] py-6 rounded-t-2xl flex justify-between">
                    <p className="font-semibold text-black pl-10">
                        Copyright &copy; 2025 Fortuna Advisory Group, All Rights
                        Reserved &nbsp; | &nbsp; T&Cs &nbsp; | &nbsp; Privacy
                    </p>
                    <p className="pr-10">
                        Website By <span className="font-semibold text-black">Burning Fruit</span>
                    </p>
                </div>
                    
            </div>
        </footer>
    );
}
